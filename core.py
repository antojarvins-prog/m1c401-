"""
Micro1 AI Platform - Complete Platform Architecture
=====================================================

This module provides the core system components for the Micro1 AI Platform,
an AI-driven behavioral assessment and candidate evaluation system.

Core System Components:
- Interview Engine: AI-driven behavioral assessment
- Assessment Pipeline: Multi-stage evaluation system
- Scoring Algorithm: Proprietary candidate ranking
- Candidate Database: Structured applicant profiles
- Employer Dashboard: Real-time analytics interface

Technical Stack:
- Frontend: React/Next.js
- Backend: Node.js/Python
- Database: PostgreSQL/MongoDB
- AI Models: GPT-4/Claude/Proprietary
- Infrastructure: AWS/GCP
"""

from typing import Dict, List, Optional, Any
from dataclasses import dataclass, field
from datetime import datetime
from enum import Enum
import uuid


class InterviewType(Enum):
    """Types of interviews supported by the platform."""
    BEHAVIORAL = "behavioral"
    TECHNICAL = "technical"
    SCENARIO = "scenario"
    MIXED = "mixed"


class CandidateStatus(Enum):
    """Status of candidate in the pipeline."""
    REGISTERED = "registered"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    SCORED = "scored"
    REVIEWED = "reviewed"
    HIRED = "hired"
    REJECTED = "rejected"


@dataclass
class CandidateProfile:
    """
    Candidate Data Schema
    
    Contains all necessary data points for candidate evaluation:
    - Personal information
    - Professional data
    - Behavioral metrics
    - Interview responses
    """
    name: str = ""
    email: str = ""
    phone: str = ""
    location: str = ""
    experience_years: int = 0
    skills: List[str] = field(default_factory=list)
    education: str = ""
    certifications: List[str] = field(default_factory=list)
    communication_score: float = 0.0
    problem_solving_score: float = 0.0
    technical_aptitude: float = 0.0
    cultural_fit: float = 0.0
    behavioral_responses: List[Dict[str, str]] = field(default_factory=list)
    technical_responses: List[Dict[str, str]] = field(default_factory=list)
    scenario_responses: List[Dict[str, str]] = field(default_factory=list)
    created_at: datetime = field(default_factory=datetime.now)
    updated_at: datetime = field(default_factory=datetime.now)
    candidate_id: str = field(default_factory=lambda: str(uuid.uuid4()))
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert candidate profile to dictionary."""
        return {
            'candidate_id': self.candidate_id,
            'personal_info': {
                'name': self.name,
                'email': self.email,
                'phone': self.phone,
                'location': self.location
            },
            'professional_data': {
                'experience': self.experience_years,
                'skills': self.skills,
                'education': self.education,
                'certifications': self.certifications
            },
            'behavioral_metrics': {
                'communication_score': self.communication_score,
                'problem_solving_score': self.problem_solving_score,
                'technical_aptitude': self.technical_aptitude,
                'cultural_fit': self.cultural_fit
            },
            'interview_responses': {
                'behavioral_questions': self.behavioral_responses,
                'technical_questions': self.technical_responses,
                'scenario_questions': self.scenario_responses
            },
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat()
        }


@dataclass
class InterviewQuestion:
    """Single interview question with metadata."""
    question_id: str = field(default_factory=lambda: str(uuid.uuid4()))
    question_text: str = ""
    question_type: InterviewType = InterviewType.MIXED
    difficulty_level: int = 1  # 1-5 scale
    expected_keywords: List[str] = field(default_factory=list)
    category: str = ""
    created_at: datetime = field(default_factory=datetime.now)


@dataclass
class InterviewSession:
    """Complete interview session data."""
    session_id: str = field(default_factory=lambda: str(uuid.uuid4()))
    candidate_id: str = ""
    questions: List[InterviewQuestion] = field(default_factory=list)
    responses: Dict[str, str] = field(default_factory=dict)
    started_at: Optional[datetime] = None
    completed_at: Optional[datetime] = None
    status: str = "pending"
    
    def add_question(self, question: InterviewQuestion) -> None:
        """Add a question to the interview session."""
        self.questions.append(question)
    
    def add_response(self, question_id: str, response: str) -> None:
        """Add a response to a question."""
        self.responses[question_id] = response


class Micro1Platform:
    """
    Micro1 AI Platform Core Architecture
    
    Main platform class containing all core system components:
    - Interview Engine: AI-driven behavioral assessment
    - Assessment Pipeline: Multi-stage evaluation system
    - Scoring Algorithm: Proprietary candidate ranking
    - Candidate Database: Structured applicant profiles
    - Employer Dashboard: Real-time analytics interface
    """
    
    def __init__(self):
        """Initialize the Micro1 Platform with all components."""
        self.components = {
            'interview_engine': 'AI-driven behavioural assessment',
            'assessment_pipeline': 'Multi-stage evaluation system',
            'scoring_algorithm': 'Proprietary candidate ranking',
            'candidate_database': 'Structured applicant profiles',
            'employer_dashboard': 'Real-time analytics interface'
        }
        self.technical_stack = {
            'frontend': 'React/Next.js',
            'backend': 'Node.js/Python',
            'database': 'PostgreSQL/MongoDB',
            'ai_models': 'GPT-4/Claude/Proprietary',
            'infrastructure': 'AWS/GCP'
        }
        self.candidates: Dict[str, CandidateProfile] = {}
        self.interview_sessions: Dict[str, InterviewSession] = {}
        self.question_bank: List[InterviewQuestion] = []
        
        # Initialize default question bank
        self._initialize_question_bank()
    
    def _initialize_question_bank(self) -> None:
        """Initialize the platform with default questions."""
        default_questions = [
            InterviewQuestion(
                question_text="Tell me about a time you had to manage a difficult project with tight deadlines.",
                question_type=InterviewType.BEHAVIORAL,
                difficulty_level=2,
                expected_keywords=["deadline", "priority", "manage", "team"],
                category="time_management"
            ),
            InterviewQuestion(
                question_text="Describe a situation where you had to resolve a conflict within your team.",
                question_type=InterviewType.BEHAVIORAL,
                difficulty_level=3,
                expected_keywords=["conflict", "team", "resolve", "communication"],
                category="conflict_resolution"
            ),
            InterviewQuestion(
                question_text="Explain a technical challenge you faced and how you solved it.",
                question_type=InterviewType.TECHNICAL,
                difficulty_level=3,
                expected_keywords=["technical", "challenge", "solution", "approach"],
                category="problem_solving"
            ),
            InterviewQuestion(
                question_text="How do you prioritize tasks when everything seems equally urgent?",
                question_type=InterviewType.SCENARIO,
                difficulty_level=2,
                expected_keywords=["priority", "urgent", "tasks", "organization"],
                category="decision_making"
            ),
            InterviewQuestion(
                question_text="Describe your ideal work environment and team culture.",
                question_type=InterviewType.BEHAVIORAL,
                difficulty_level=1,
                expected_keywords=["environment", "team", "culture", "work"],
                category="cultural_fit"
            ),
        ]
        self.question_bank.extend(default_questions)
    
    def register_candidate(self, name: str, email: str, **kwargs) -> CandidateProfile:
        """Register a new candidate in the platform."""
        candidate = CandidateProfile(
            name=name,
            email=email,
            phone=kwargs.get('phone', ''),
            location=kwargs.get('location', ''),
            experience_years=kwargs.get('experience_years', 0),
            skills=kwargs.get('skills', []),
            education=kwargs.get('education', ''),
            certifications=kwargs.get('certifications', [])
        )
        self.candidates[candidate.candidate_id] = candidate
        return candidate
    
    def create_interview_session(self, candidate_id: str, num_questions: int = 5) -> InterviewSession:
        """Create a new interview session for a candidate."""
        session = InterviewSession(candidate_id=candidate_id)
        
        # Select questions from question bank
        import random
        selected_questions = random.sample(
            self.question_bank, 
            min(num_questions, len(self.question_bank))
        )
        
        for q in selected_questions:
            session.add_question(q)
        
        session.started_at = datetime.now()
        session.status = "in_progress"
        
        self.interview_sessions[session.session_id] = session
        return session
    
    def get_candidate(self, candidate_id: str) -> Optional[CandidateProfile]:
        """Get a candidate by ID."""
        return self.candidates.get(candidate_id)
    
    def get_all_candidates(self) -> List[CandidateProfile]:
        """Get all candidates."""
        return list(self.candidates.values())
    
    def get_statistics(self) -> Dict[str, Any]:
        """Get platform statistics."""
        total_candidates = len(self.candidates)
        completed_interviews = len([
            s for s in self.interview_sessions.values() 
            if s.status == "completed"
        ])
        
        return {
            'total_candidates': total_candidates,
            'completed_interviews': completed_interviews,
            'active_sessions': len([
                s for s in self.interview_sessions.values()
                if s.status == "in_progress"
            ]),
            'question_bank_size': len(self.question_bank),
            'components': self.components,
            'technical_stack': self.technical_stack
        }


# Platform instance for easy access
_platform_instance: Optional[Micro1Platform] = None


def get_platform() -> Micro1Platform:
    """Get the platform instance."""
    global _platform_instance
    if _platform_instance is None:
        _platform_instance = Micro1Platform()
    return _platform_instance


def initialize_platform() -> Micro1Platform:
    """Initialize and return the platform instance."""
    global _platform_instance
    _platform_instance = Micro1Platform()
    return _platform_instance