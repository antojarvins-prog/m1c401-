"""
Micro1 AI Platform - Scoring Engine
===================================

This module provides the Scoring Engine with weighted metrics for the Micro1 AI Platform.

Scoring Algorithm:
- Technical Skills: 35%
- Behavioral Fit: 25%
- Communication: 20%
- Problem Solving: 15%
- Cultural Alignment: 5%

Multi-factor evaluation with weighted scoring system
"""

from typing import Dict, List, Optional, Any
from dataclasses import dataclass, field
from datetime import datetime
from enum import Enum
import json
import re


class ScoreCategory(Enum):
    """Categories for candidate scoring."""
    TECHNICAL_SKILLS = "technical_skills"
    BEHAVIORAL_FIT = "behavioral_fit"
    COMMUNICATION = "communication"
    PROBLEM_SOLVING = "problem_solving"
    CULTURAL_ALIGNMENT = "cultural_alignment"


@dataclass
class ScoreBreakdown:
    """Breakdown of scores by category."""
    technical_skills: float = 0.0
    behavioral_fit: float = 0.0
    communication: float = 0.0
    problem_solving: float = 0.0
    cultural_alignment: float = 0.0
    
    def to_dict(self) -> Dict[str, float]:
        """Convert to dictionary."""
        return {
            'technical_skills': self.technical_skills,
            'behavioral_fit': self.behavioral_fit,
            'communication': self.communication,
            'problem_solving': self.problem_solving,
            'cultural_alignment': self.cultural_alignment
        }
    
    def get_by_category(self, category: ScoreCategory) -> float:
        """Get score by category."""
        category_map = {
            ScoreCategory.TECHNICAL_SKILLS: self.technical_skills,
            ScoreCategory.BEHAVIORAL_FIT: self.behavioral_fit,
            ScoreCategory.COMMUNICATION: self.communication,
            ScoreCategory.PROBLEM_SOLVING: self.problem_solving,
            ScoreCategory.CULTURAL_ALIGNMENT: self.cultural_alignment
        }
        return category_map.get(category, 0.0)


@dataclass
class CandidateScore:
    """Complete score for a candidate."""
    candidate_id: str = ""
    session_id: str = ""
    overall_score: float = 0.0
    breakdown: ScoreBreakdown = field(default_factory=ScoreBreakdown)
    percentile_rank: Optional[float] = None
    scored_at: datetime = field(default_factory=datetime.now)
    metadata: Dict[str, Any] = field(default_factory=dict)
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary."""
        return {
            'candidate_id': self.candidate_id,
            'session_id': self.session_id,
            'overall_score': self.overall_score,
            'breakdown': self.breakdown.to_dict(),
            'percentile_rank': self.percentile_rank,
            'scored_at': self.scored_at.isoformat(),
            'metadata': self.metadata
        }


class ScoringEngine:
    """
    Scoring Engine Implementation
    
    Weighted scoring calculation with multi-factor evaluation:
    - Technical Skills: 35%
    - Behavioral Fit: 25%
    - Communication: 20%
    - Problem Solving: 15%
    - Cultural Alignment: 5%
    """
    
    def __init__(self):
        self.weights = {
            'technical_skills': 0.35,
            'behavioral_fit': 0.25,
            'communication': 0.20,
            'problem_solving': 0.15,
            'cultural_alignment': 0.05
        }
        
        # Score history for percentile calculation
        self.score_history: List[float] = []
        
        # Keywords for each category (for text analysis)
        self.category_keywords = {
            'technical_skills': [
                'code', 'programming', 'algorithm', 'database', 'system',
                'architecture', 'technical', 'development', 'software',
                'api', 'debug', 'optimize', 'performance'
            ],
            'behavioral_fit': [
                'team', 'collaborate', 'communicate', 'conflict',
                'relationship', 'support', 'help', 'together', 'group'
            ],
            'communication': [
                'explain', 'describe', 'tell', 'present', 'speak',
                'write', 'clear', 'understand', 'articulate'
            ],
            'problem_solving': [
                'solve', 'problem', 'issue', 'challenge', 'resolve',
                'solution', 'fix', 'approach', 'method', 'strategy'
            ],
            'cultural_alignment': [
                'culture', 'value', 'believe', 'mission', 'environment',
                'team', 'work', 'balance', 'growth', 'learning'
            ]
        }
    
    def calculate_overall_score(self, candidate_data: Dict[str, Any]) -> float:
        """Calculate weighted overall score."""
        breakdown = self.calculate_score_breakdown(candidate_data)
        
        overall_score = (
            breakdown.technical_skills * self.weights['technical_skills'] +
            breakdown.behavioral_fit * self.weights['behavioral_fit'] +
            breakdown.communication * self.weights['communication'] +
            breakdown.problem_solving * self.weights['problem_solving'] +
            breakdown.cultural_alignment * self.weights['cultural_alignment']
        )
        
        # Update history
        self.score_history.append(overall_score)
        
        return overall_score
    
    def calculate_score_breakdown(self, candidate_data: Dict[str, Any]) -> ScoreBreakdown:
        """Calculate detailed score breakdown."""
        breakdown = ScoreBreakdown()
        
        # Get behavioral metrics from candidate data
        behavioral_metrics = candidate_data.get('behavioral_metrics', {})
        
        # Calculate technical skills score (35%)
        breakdown.technical_skills = self.calculate_technical_score(candidate_data)
        
        # Calculate behavioral fit score (25%)
        breakdown.behavioral_fit = self.calculate_behavioral_score(candidate_data)
        
        # Calculate communication score (20%)
        breakdown.communication = self.calculate_communication_score(candidate_data)
        
        # Calculate problem solving score (15%)
        breakdown.problem_solving = self.calculate_problem_solving_score(candidate_data)
        
        # Calculate cultural alignment score (5%)
        breakdown.cultural_alignment = self.calculate_cultural_score(candidate_data)
        
        return breakdown
    
    def calculate_technical_score(self, candidate_data: Dict[str, Any]) -> float:
        """Calculate technical skills score."""
        # Check for existing metric
        if 'behavioral_metrics' in candidate_data:
            metrics = candidate_data['behavioral_metrics']
            if 'technical_aptitude' in metrics:
                return float(metrics['technical_aptitude']) / 100.0
        
        # Analyze responses for technical keywords
        responses = self._extract_responses(candidate_data)
        keyword_score = self._analyze_keywords(responses, 'technical_skills')
        
        # Consider experience
        experience = candidate_data.get('professional_data', {}).get('experience', 0)
        experience_factor = min(experience / 10.0, 1.0)  # Cap at 10 years
        
        # Combine factors
        return (keyword_score * 0.7 + experience_factor * 0.3)
    
    def calculate_behavioral_score(self, candidate_data: Dict[str, Any]) -> float:
        """Calculate behavioral fit score."""
        # Check for existing metric
        if 'behavioral_metrics' in candidate_data:
            metrics = candidate_data['behavioral_metrics']
            if 'cultural_fit' in metrics:
                return float(metrics['cultural_fit']) / 100.0
        
        # Analyze responses for behavioral keywords
        responses = self._extract_responses(candidate_data)
        keyword_score = self._analyze_keywords(responses, 'behavioral_fit')
        
        return keyword_score
    
    def calculate_communication_score(self, candidate_data: Dict[str, Any]) -> float:
        """Calculate communication score."""
        # Check for existing metric
        if 'behavioral_metrics' in candidate_data:
            metrics = candidate_data['behavioral_metrics']
            if 'communication_score' in metrics:
                return float(metrics['communication_score']) / 100.0
        
        # Analyze responses for communication keywords
        responses = self._extract_responses(candidate_data)
        keyword_score = self._analyze_keywords(responses, 'communication')
        
        # Analyze response length and clarity
        length_score = self._analyze_response_quality(responses)
        
        return (keyword_score * 0.6 + length_score * 0.4)
    
    def calculate_problem_solving_score(self, candidate_data: Dict[str, Any]) -> float:
        """Calculate problem solving score."""
        # Check for existing metric
        if 'behavioral_metrics' in candidate_data:
            metrics = candidate_data['behavioral_metrics']
            if 'problem_solving_score' in metrics:
                return float(metrics['problem_solving_score']) / 100.0
        
        # Analyze responses for problem solving keywords
        responses = self._extract_responses(candidate_data)
        keyword_score = self._analyze_keywords(responses, 'problem_solving')
        
        return keyword_score
    
    def calculate_cultural_score(self, candidate_data: Dict[str, Any]) -> float:
        """Calculate cultural alignment score."""
        # Check for existing metric
        if 'behavioral_metrics' in candidate_data:
            metrics = candidate_data['behavioral_metrics']
            if 'cultural_fit' in metrics:
                return float(metrics['cultural_fit']) / 100.0
        
        # Analyze responses for cultural keywords
        responses = self._extract_responses(candidate_data)
        keyword_score = self._analyze_keywords(responses, 'cultural_alignment')
        
        return keyword_score
    
    def _extract_responses(self, candidate_data: Dict[str, Any]) -> List[str]:
        """Extract all responses from candidate data."""
        responses = []
        
        # Extract from interview responses
        interview_responses = candidate_data.get('interview_responses', {})
        
        for response_list in interview_responses.values():
            if isinstance(response_list, list):
                for response in response_list:
                    if isinstance(response, dict) and 'response' in response:
                        responses.append(response['response'])
                    elif isinstance(response, str):
                        responses.append(response)
        
        return responses
    
    def _analyze_keywords(self, responses: List[str], category: str) -> float:
        """Analyze text for category keywords."""
        keywords = self.category_keywords.get(category, [])
        
        if not responses or not keywords:
            return 0.5  # Default neutral score
        
        total_matches = 0
        total_words = 0
        
        for response in responses:
            words = response.lower().split()
            total_words += len(words)
            
            for word in words:
                if any(keyword in word for keyword in keywords):
                    total_matches += 1
        
        if total_words == 0:
            return 0.5
        
        # Calculate keyword density
        density = total_matches / total_words
        
        # Normalize to 0-1 scale (max density of 0.1 = 1.0)
        return min(density * 10, 1.0)
    
    def _analyze_response_quality(self, responses: List[str]) -> float:
        """Analyze response quality (length and detail)."""
        if not responses:
            return 0.5
        
        avg_length = sum(len(r.split()) for r in responses) / len(responses)
        
        # Ideal length is around 50-150 words
        if avg_length < 20:
            return 0.3
        elif avg_length < 50:
            return 0.6
        elif avg_length < 150:
            return 0.9
        else:
            return 0.7
    
    def calculate_percentile(self, score: float) -> float:
        """Calculate percentile rank for a score."""
        if not self.score_history:
            return 50.0  # Default to median
        
        below_count = sum(1 for s in self.score_history if s < score)
        return (below_count / len(self.score_history)) * 100
    
    def get_candidate_score(
        self, 
        candidate_data: Dict[str, Any],
        session_id: str = ""
    ) -> CandidateScore:
        """Get complete candidate score with breakdown."""
        candidate_id = candidate_data.get('candidate_id', '')
        
        # Calculate breakdown
        breakdown = self.calculate_score_breakdown(candidate_data)
        
        # Calculate overall score
        overall_score = self.calculate_overall_score(candidate_data)
        
        # Calculate percentile
        percentile = self.calculate_percentile(overall_score)
        
        return CandidateScore(
            candidate_id=candidate_id,
            session_id=session_id,
            overall_score=overall_score,
            breakdown=breakdown,
            percentile_rank=percentile,
            metadata=self.weights
        )
    
    def get_weights(self) -> Dict[str, float]:
        """Get current weights."""
        return self.weights.copy()
    
    def set_weights(self, weights: Dict[str, float]) -> None:
        """Set new weights (must sum to 1.0)."""
        total = sum(weights.values())
        if abs(total - 1.0) > 0.01:
            raise ValueError("Weights must sum to 1.0")
        self.weights = weights
    
    def get_top_candidates(
        self, 
        candidates: List[Dict[str, Any]], 
        top_n: int = 10
    ) -> List[Dict[str, Any]]:
        """Get top N candidates by score."""
        scored_candidates = []
        
        for candidate_data in candidates:
            score = self.calculate_overall_score(candidate_data)
            scored_candidates.append({
                **candidate_data,
                'overall_score': score,
                'percentile': self.calculate_percentile(score)
            })
        
        # Sort by score descending
        scored_candidates.sort(key=lambda x: x['overall_score'], reverse=True)
        
        return scored_candidates[:top_n]


# Scoring engine instance for easy access
_scoring_engine_instance: Optional[ScoringEngine] = None


def get_scoring_engine() -> ScoringEngine:
    """Get the scoring engine instance."""
    global _scoring_engine_instance
    if _scoring_engine_instance is None:
        _scoring_engine_instance = ScoringEngine()
    return _scoring_engine_instance


def initialize_scoring_engine() -> ScoringEngine:
    """Initialize and return the scoring engine instance."""
    global _scoring_engine_instance
    _scoring_engine_instance = ScoringEngine()
    return _scoring_engine_instance