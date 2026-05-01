"""
Micro1 AI Platform
===================

An AI-driven behavioral assessment and candidate evaluation system.

This package provides:
- Core Platform Architecture
- AI Model Integration Pipeline
- Scoring Engine
- Data Flow Architecture
- Security and Compliance
"""

from .core import (
    Micro1Platform,
    CandidateProfile,
    InterviewQuestion,
    InterviewSession,
    InterviewType,
    CandidateStatus,
    get_platform,
    initialize_platform,
)

from .ai_pipeline import (
    AIModelPipeline,
    AIModelResponse,
    BaseAIModel,
    GPT4Model,
    ClaudeModel,
    ProprietaryModel,
    ModelType,
    get_pipeline,
    initialize_pipeline,
)

from .scoring import (
    ScoringEngine,
    ScoreBreakdown,
    CandidateScore,
    ScoreCategory,
    get_scoring_engine,
    initialize_scoring_engine,
)

from .data_flow import (
    DataFlowArchitecture,
    PipelineExecution,
    PipelineStage,
    PipelineStatus,
    CandidateReport,
    get_pipeline_architecture,
    initialize_pipeline,
)

from .security import (
    SecurityManager,
    InputValidator,
    PasswordHasher,
    TokenManager,
    ConsentManager,
    AuditLogger,
    BiasDetector,
    SecurityLevel,
    ConsentType,
    get_security_manager,
    initialize_security,
)

__version__ = "1.0.0"

__all__ = [
    # Core
    "Micro1Platform",
    "CandidateProfile", 
    "InterviewQuestion",
    "InterviewSession",
    "InterviewType",
    "CandidateStatus",
    "get_platform",
    "initialize_platform",
    
    # AI Pipeline
    "AIModelPipeline",
    "AIModelResponse",
    "BaseAIModel",
    "GPT4Model",
    "ClaudeModel",
    "ProprietaryModel",
    "ModelType",
    "get_pipeline",
    "initialize_pipeline",
    
    # Scoring
    "ScoringEngine",
    "ScoreBreakdown",
    "CandidateScore", 
    "ScoreCategory",
    "get_scoring_engine",
    "initialize_scoring_engine",
    
    # Data Flow
    "DataFlowArchitecture",
    "PipelineExecution",
    "PipelineStage",
    "PipelineStatus",
    "CandidateReport",
    "get_pipeline_architecture",
    "initialize_pipeline",
    
    # Security
    "SecurityManager",
    "InputValidator",
    "PasswordHasher",
    "TokenManager",
    "ConsentManager",
    "AuditLogger",
    "BiasDetector",
    "SecurityLevel",
    "ConsentType",
    "get_security_manager",
    "initialize_security",
]