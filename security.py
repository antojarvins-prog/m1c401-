"""
Micro1 AI Platform - Security Module
=====================================

This module provides security best practices and compliance features for the Micro1 Platform.

Security Features:
- Data encryption standards
- Input validation and sanitization  
- Authentication and authorization
- Session management
- GDPR/CCPA compliance
- Non-discrimination policies

Compliance Areas:
- Data Privacy: GDPR compliance, CCPA compliance, Data encryption standards
- Employment Law: Non-discrimination policies, Fair hiring practices, Documentation requirements
- AI Ethics: Bias mitigation, Transparency in scoring, Candidate consent
"""

from typing import Dict, List, Optional, Any, Callable
from dataclasses import dataclass, field
from datetime import datetime, timedelta
from enum import Enum
import hashlib
import hmac
import secrets
import re
from abc import ABC, abstractmethod
from jose import jwt
from datetime import datetime, timedelta


class SecurityLevel(Enum):
    """Security levels for different operations."""
    PUBLIC = "public"
    AUTHENTICATED = "authenticated"
    ADMIN = "admin"


class ConsentType(Enum):
    """Types of consent for data processing."""
    DATA_PROCESSING = "data_processing"
    AI_ANALYSIS = "ai_analysis"
    DATA_SHARING = "data_sharing"
    MARKETING = "marketing"


@dataclass
class Consent:
    """Consent record for a candidate."""
    consent_id: str
    candidate_id: str
    consent_type: ConsentType
    granted: bool
    granted_at: Optional[datetime] = None
    withdrawn_at: Optional[datetime] = None
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None


@dataclass
class AuditLog:
    """Audit log entry for compliance."""
    log_id: str
    candidate_id: str
    action: str
    details: Dict[str, Any]
    timestamp: datetime
    ip_address: str
    user_agent: str


class InputValidator:
    """
    Input Validation and Sanitization
    
    Validates and sanitizes all user inputs to prevent:
    - SQL injection
    - XSS attacks
    - Command injection
    - Other security vulnerabilities
    """
    
    # Common SQL injection patterns
    SQL_PATTERNS = [
        r"(\b(SELECT|INSERT|UPDATE|DELETE|DROP|ALTER|CREATE|TRUNCATE)\b)",
        r"(--)",
        r"(;)",
        r"(\/\*|\*\/)",
    ]
    
    # Common XSS patterns
    XSS_PATTERNS = [
        r"<script[^>]*>.*?</script>",
        r"javascript:",
        r"on\w+\s*=",
        r"<iframe[^>]*>.*?</iframe>",
    ]
    
    # Email validation regex
    EMAIL_REGEX = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    
    # Phone validation regex
    PHONE_REGEX = r'^\+?1?\d{9,15}$'
    
    @classmethod
    def sanitize_string(cls, value: str) -> str:
        """Sanitize a string value."""
        if not isinstance(value, str):
            return str(value)
        
        # Remove null bytes
        value = value.replace('\x00', '')
        
        # Strip whitespace
        value = value.strip()
        
        return value
    
    @classmethod
    def validate_email(cls, email: str) -> bool:
        """Validate email address."""
        return bool(re.match(cls.EMAIL_REGEX, email))
    
    @classmethod
    def validate_phone(cls, phone: str) -> bool:
        """Validate phone number."""
        # Remove common formatting characters
        cleaned = re.sub(r'[\s\-\(\)\.]', '', phone)
        return bool(re.match(cls.PHONE_REGEX, cleaned))
    
    @classmethod
    def check_sql_injection(cls, value: str) -> bool:
        """Check for SQL injection patterns."""
        value_lower = value.lower()
        for pattern in cls.SQL_PATTERNS:
            if re.search(pattern, value_lower, re.IGNORECASE):
                return True
        return False
    
    @classmethod
    def check_xss(cls, value: str) -> bool:
        """Check for XSS patterns."""
        for pattern in cls.XSS_PATTERNS:
            if re.search(pattern, value, re.IGNORECASE):
                return True
        return False
    
    @classmethod
    def validate_input(cls, value: str, field_name: str = "") -> Dict[str, Any]:
        """
        Validate input and return validation result.
        
        Returns:
            Dict with 'valid' (bool), 'sanitized_value' (str), and 'errors' (list)
        """
        errors = []
        
        # Sanitize
        sanitized = cls.sanitize_string(value)
        
        # Check SQL injection
        if cls.check_sql_injection(value):
            errors.append(f"Potential SQL injection detected in {field_name}")
        
        # Check XSS
        if cls.check_xss(value):
            errors.append(f"Potential XSS detected in {field_name}")
        
        return {
            'valid': len(errors) == 0,
            'sanitized_value': sanitized,
            'errors': errors
        }


class PasswordHasher:
    """
    Secure Password Hashing
    
    Uses PBKDF2 with HMAC-SHA256 for secure password hashing.
    """
    
    def __init__(self, iterations: int = 100000):
        self.iterations = iterations
        self.salt_length = 32
    
    def generate_salt(self) -> str:
        """Generate a random salt."""
        return secrets.token_hex(self.salt_length)
    
    def hash_password(self, password: str, salt: Optional[str] = None) -> Dict[str, str]:
        """Hash a password."""
        if salt is None:
            salt = self.generate_salt()
        
        # Create hash
        password_hash = hashlib.pbkdf2_hmac(
            'sha256',
            password.encode('utf-8'),
            salt.encode('utf-8'),
            self.iterations
        )
        
        return {
            'hash': password_hash.hex(),
            'salt': salt,
            'iterations': str(self.iterations)
        }
    
    def verify_password(
        self, 
        password: str, 
        stored_hash: str, 
        salt: str
    ) -> bool:
        """Verify a password against stored hash."""
        computed_hash = self.hash_password(password, salt)['hash']
        return hmac.compare_digest(computed_hash, stored_hash)


class TokenManager:
    """
    JWT Token Management
    
    Handles secure token generation and validation.
    """
    
    def __init__(self, secret_key: str, algorithm: str = "HS256"):
        self.secret_key = secret_key
        self.algorithm = algorithm
        self.expiration_hours = 24
    
    def generate_token(
        self, 
        user_id: str, 
        level: SecurityLevel = SecurityLevel.AUTHENTICATED
    ) -> str:
        """Generate a JWT token."""
        now = datetime.utcnow()
        payload = {
            'user_id': user_id,
            'security_level': level.value,
            'issued_at': now.isoformat(),
            'expires_at': (now + timedelta(hours=self.expiration_hours)).isoformat(),
        }
        
        return jwt.encode(payload, self.secret_key, algorithm=self.algorithm)
    
    def verify_token(self, token: str) -> Optional[Dict[str, Any]]:
        """Verify a JWT token."""
        try:
            payload = jwt.decode(token, self.secret_key, algorithms=[self.algorithm])
            
            # Check expiration
            expires_at = datetime.fromisoformat(payload.get('expires_at', ''))
            if expires_at < datetime.utcnow():
                return None
            
            return payload
        except jwt.InvalidTokenError:
            return None
    
    def refresh_token(self, token: str) -> Optional[str]:
        """Refresh a token."""
        payload = self.verify_token(token)
        if payload:
            return self.generate_token(
                payload['user_id'],
                SecurityLevel(payload.get('security_level', 'authenticated'))
            )
        return None


class ConsentManager:
    """
    Consent Management
    
    Manages candidate consent for GDPR/CCPA compliance.
    """
    
    def __init__(self):
        self.consents: Dict[str, List[Consent]] = {}
    
    def grant_consent(
        self,
        candidate_id: str,
        consent_type: ConsentType,
        ip_address: str = "",
        user_agent: str = ""
    ) -> Consent:
        """Grant consent for a candidate."""
        consent = Consent(
            consent_id=secrets.token_hex(16),
            candidate_id=candidate_id,
            consent_type=consent_type,
            granted=True,
            granted_at=datetime.now(),
            ip_address=ip_address,
            user_agent=user_agent
        )
        
        key = f"{candidate_id}:{consent_type.value}"
        if key not in self.consents:
            self.consents[key] = []
        self.consents[key].append(consent)
        
        return consent
    
    def withdraw_consent(
        self,
        candidate_id: str,
        consent_type: ConsentType
    ) -> bool:
        """Withdraw consent for a candidate."""
        key = f"{candidate_id}:{consent_type.value}"
        if key in self.consents:
            for consent in self.consents[key]:
                if consent.granted:
                    consent.granted = False
                    consent.withdrawn_at = datetime.now()
            return True
        return False
    
    def has_consent(
        self,
        candidate_id: str,
        consent_type: ConsentType
    ) -> bool:
        """Check if candidate has granted consent."""
        key = f"{candidate_id}:{consent_type.value}"
        if key in self.consents:
            return any(c.granted for c in self.consents[key])
        return False
    
    def get_consents(self, candidate_id: str) -> List[Consent]:
        """Get all consents for a candidate."""
        return [
            c for key, consents in self.consents.items()
            if key.startswith(candidate_id)
            for c in consents
        ]


class AuditLogger:
    """
    Audit Logging
    
    Logs all actions for compliance and security monitoring.
    """
    
    def __init__(self):
        self.logs: List[AuditLog] = []
    
    def log_action(
        self,
        candidate_id: str,
        action: str,
        details: Dict[str, Any],
        ip_address: str = "",
        user_agent: str = ""
    ) -> AuditLog:
        """Log an action."""
        log_entry = AuditLog(
            log_id=secrets.token_hex(16),
            candidate_id=candidate_id,
            action=action,
            details=details,
            timestamp=datetime.now(),
            ip_address=ip_address,
            user_agent=user_agent
        )
        
        self.logs.append(log_entry)
        return log_entry
    
    def get_logs(
        self,
        candidate_id: Optional[str] = None,
        action: Optional[str] = None,
        start_date: Optional[datetime] = None,
        end_date: Optional[datetime] = None
    ) -> List[AuditLog]:
        """Get audit logs with filters."""
        logs = self.logs
        
        if candidate_id:
            logs = [l for l in logs if l.candidate_id == candidate_id]
        
        if action:
            logs = [l for l in logs if l.action == action]
        
        if start_date:
            logs = [l for l in logs if l.timestamp >= start_date]
        
        if end_date:
            logs = [l for l in logs if l.timestamp <= end_date]
        
        return logs


class BiasDetector:
    """
    Bias Detection for AI Ethics
    
    Detects potential bias in scoring and assessments to ensure
    fair hiring practices.
    """
    
    # Protected characteristics (should not be used in scoring)
    PROTECTED_CHARACTERISTICS = [
        'race',
        'ethnicity',
        'religion',
        'gender',
        'sexual_orientation',
        'age',
        'disability',
        'national_origin',
    ]
    
    def __init__(self):
        self.bias_thresholds = {
            'score_disparity': 0.15,  # Max allowed score disparity
            'demographic_parity': 0.1,  # Max allowed demographic disparity
        }
    
    def check_score_bias(
        self,
        scores_by_group: Dict[str, List[float]]
    ) -> Dict[str, Any]:
        """
        Check for score bias across demographic groups.
        
        Returns bias analysis report.
        """
        if not scores_by_group or len(scores_by_group) < 2:
            return {'biased': False, 'reason': 'Insufficient data'}
        
        # Calculate average scores per group
        avg_scores = {
            group: sum(scores) / len(scores)
            for group, scores in scores_by_group.items()
        }
        
        # Check for significant disparities
        max_score = max(avg_scores.values())
        min_score = min(avg_scores.values())
        disparity = max_score - min_score
        
        biased = disparity > self.bias_thresholds['score_disparity']
        
        return {
            'biased': biased,
            'disparity': disparity,
            'avg_scores': avg_scores,
            'threshold': self.bias_thresholds['score_disparity'],
            'message': f"Score disparity of {disparity:.2%} detected" if biased else "No significant bias detected"
        }
    
    def check_feature_correlation(
        self,
        features: List[str],
        protected_characteristics: List[str]
    ) -> Dict[str, Any]:
        """Check if scored features correlate with protected characteristics."""
        problematic_features = [
            f for f in features
            if any(pc in f.lower() for pc in self.PROTECTED_CHARACTERISTICS)
        ]
        
        return {
            'has_problematic_features': len(problematic_features) > 0,
            'problematic_features': problematic_features,
            'recommendation': (
                "Remove or neutralize features that may correlate with protected characteristics"
                if problematic_features else None
            )
        }


class SecurityManager:
    """
    Main Security Manager
    
    Coordinates all security features.
    """
    
    def __init__(self, secret_key: str):
        self.secret_key = secret_key
        self.validator = InputValidator()
        self.password_hasher = PasswordHasher()
        self.token_manager = TokenManager(secret_key)
        self.consent_manager = ConsentManager()
        self.audit_logger = AuditLogger()
        self.bias_detector = BiasDetector()
    
    def validate_input(self, value: str, field_name: str = "") -> Dict[str, Any]:
        """Validate input."""
        return self.validator.validate_input(value, field_name)
    
    def hash_password(self, password: str) -> Dict[str, str]:
        """Hash password."""
        return self.password_hasher.hash_password(password)
    
    def verify_password(
        self, 
        password: str, 
        stored_hash: str, 
        salt: str
    ) -> bool:
        """Verify password."""
        return self.password_hasher.verify_password(password, stored_hash, salt)
    
    def generate_token(
        self, 
        user_id: str, 
        level: SecurityLevel = SecurityLevel.AUTHENTICATED
    ) -> str:
        """Generate token."""
        # Ensure level is a SecurityLevel enum
        if isinstance(level, str):
            level = SecurityLevel(level)
        return self.token_manager.generate_token(user_id, level)
    
    def verify_token(self, token: str) -> Optional[Dict[str, Any]]:
        """Verify token."""
        return self.token_manager.verify_token(token)
    
    def log_action(
        self,
        candidate_id: str,
        action: str,
        details: Dict[str, Any],
        ip_address: str = "",
        user_agent: str = ""
    ) -> AuditLog:
        """Log action."""
        return self.audit_logger.log_action(
            candidate_id, action, details, ip_address, user_agent
        )
    
    def check_bias(
        self,
        scores_by_group: Dict[str, List[float]]
    ) -> Dict[str, Any]:
        """Check for bias."""
        return self.bias_detector.check_score_bias(scores_by_group)


# Security instance
_security_instance: Optional[SecurityManager] = None


def get_security_manager(secret_key: str = "default-secret-key") -> SecurityManager:
    """Get security manager instance."""
    global _security_instance
    if _security_instance is None:
        _security_instance = SecurityManager(secret_key)
    return _security_instance


def initialize_security(secret_key: str) -> SecurityManager:
    """Initialize security manager."""
    global _security_instance
    _security_instance = SecurityManager(secret_key)
    return _security_instance