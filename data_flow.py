"""
Micro1 AI Platform - Data Flow Architecture
==============================================

This module provides the complete Data Flow Pipeline for the Micro1 AI Platform.

Data Flow Architecture:
- Candidate Input: Registration & profile creation
- AI Processing: Interview generation & analysis
- Scoring Engine: Automated evaluation
- Employer View: Dashboard & analytics
- Feedback Loop: Continuous improvement
"""

from typing import Dict, List, Optional, Any, Callable
from typing import TYPE_CHECKING
from dataclasses import dataclass, field
from datetime import datetime
from enum import Enum
import json
import uuid

# Import with TYPE_CHECKING to avoid circular imports
if TYPE_CHECKING:
    from .core import Micro1Platform, CandidateProfile
    from .ai_pipeline import AIModelPipeline
    from .scoring import ScoringEngine


class PipelineStatus(Enum):
    """Status of pipeline execution."""
    PENDING = "pending"
    PROCESSING = "processing"
    COMPLETED = "completed"
    FAILED = "failed"


class PipelineStage(Enum):
    """Stages in the data flow pipeline."""
    CANDIDATE_REGISTRATION = "candidate_registration"
    INTERVIEW_GENERATION = "interview_generation"
    RESPONSE_COLLECTION = "response_collection"
    RESPONSE_ANALYSIS = "response_analysis"
    SCORING = "scoring"
    REPORT_GENERATION = "report_generation"
    EMPLOYER_NOTIFICATION = "employer_notification"
    FEEDBACK_LOOP = "feedback_loop"


@dataclass
class PipelineExecution:
    """Execution record for a pipeline run."""
    execution_id: str = field(default_factory=lambda: str(uuid.uuid4()))
    candidate_id: str = ""
    session_id: str = ""
    status: PipelineStatus = PipelineStatus.PENDING
    stages_completed: List[PipelineStage] = field(default_factory=list)
    current_stage: PipelineStage = PipelineStage.CANDIDATE_REGISTRATION
    started_at: datetime = field(default_factory=datetime.now)
    completed_at: Optional[datetime] = None
    data: Dict[str, Any] = field(default_factory=dict)
    errors: List[str] = field(default_factory=list)
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary."""
        return {
            'execution_id': self.execution_id,
            'candidate_id': self.candidate_id,
            'session_id': self.session_id,
            'status': self.status.value,
            'stages_completed': [s.value for s in self.stages_completed],
            'current_stage': self.current_stage.value,
            'started_at': self.started_at.isoformat(),
            'completed_at': self.completed_at.isoformat() if self.completed_at else None,
            'data': self.data,
            'errors': self.errors
        }


@dataclass
class CandidateReport:
    """Final report for a candidate."""
    report_id: str = field(default_factory=lambda: str(uuid.uuid4()))
    candidate_id: str = ""
    session_id: str = ""
    overall_score: float = 0.0
    score_breakdown: Dict[str, float] = field(default_factory=dict)
    percentile_rank: Optional[float] = None
    strengths: List[str] = field(default_factory=list)
    areas_for_improvement: List[str] = field(default_factory=list)
    recommendations: List[str] = field(default_factory=list)
    generated_at: datetime = field(default_factory=datetime.now)
    
    def to_dict(self) -> Dict[str, Any]:
        """Convert to dictionary."""
        return {
            'report_id': self.report_id,
            'candidate_id': self.candidate_id,
            'session_id': self.session_id,
            'overall_score': self.overall_score,
            'score_breakdown': self.score_breakdown,
            'percentile_rank': self.percentile_rank,
            'strengths': self.strengths,
            'areas_for_improvement': self.areas_for_improvement,
            'recommendations': self.recommendations,
            'generated_at': self.generated_at.isoformat()
        }


class PipelineCallbacks:
    """Callbacks for pipeline events."""
    
    def __init__(self):
        self.on_stage_start: Optional[Callable] = None
        self.on_stage_complete: Optional[Callable] = None
        self.on_pipeline_complete: Optional[Callable] = None
        self.on_error: Optional[Callable] = None
    
    def trigger_stage_start(
        self, 
        stage: PipelineStage, 
        execution: PipelineExecution
    ) -> None:
        """Trigger stage start callback."""
        if self.on_stage_start:
            self.on_stage_start(stage, execution)
    
    def trigger_stage_complete(
        self, 
        stage: PipelineStage, 
        execution: PipelineExecution
    ) -> None:
        """Trigger stage complete callback."""
        if self.on_stage_complete:
            self.on_stage_complete(stage, execution)
    
    def trigger_pipeline_complete(
        self, 
        execution: PipelineExecution
    ) -> None:
        """Trigger pipeline complete callback."""
        if self.on_pipeline_complete:
            self.on_pipeline_complete(execution)
    
    def trigger_error(
        self, 
        stage: PipelineStage, 
        error: str, 
        execution: PipelineExecution
    ) -> None:
        """Trigger error callback."""
        if self.on_error:
            self.on_error(stage, error, execution)


class DataFlowArchitecture:
    """
    Complete Data Flow Pipeline
    
    End-to-end data processing:
    - Candidate Input: Registration & profile creation
    - AI Processing: Interview generation & analysis
    - Scoring Engine: Automated evaluation
    - Employer View: Dashboard & analytics
    - Feedback Loop: Continuous improvement
    """
    
    def __init__(self):
        self.flow = {
            'candidate_input': 'Registration & profile creation',
            'ai_processing': 'Interview generation & analysis',
            'scoring_engine': 'Automated evaluation',
            'employer_view': 'Dashboard & analytics',
            'feedback_loop': 'Continuous improvement'
        }
        
        # Pipeline callbacks
        self.callbacks = PipelineCallbacks()
        
        # Execution history
        self.executions: Dict[str, PipelineExecution] = {}
        
        # Platform references (set later to avoid circular imports)
        self._platform = None
        self._ai_pipeline = None
        self._scoring_engine = None
    
    def set_dependencies(self, platform, ai_pipeline, scoring_engine):
        """Set dependencies after initialization to avoid circular imports."""
        self._platform = platform
        self._ai_pipeline = ai_pipeline
        self._scoring_engine = scoring_engine
    
    @property
    def platform(self):
        """Get platform (lazy loaded)."""
        if self._platform is None:
            from .core import Micro1Platform
            self._platform = Micro1Platform()
        return self._platform
    
    @property
    def ai_pipeline(self):
        """Get AI pipeline (lazy loaded)."""
        if self._ai_pipeline is None:
            from .ai_pipeline import AIModelPipeline
            self._ai_pipeline = AIModelPipeline()
        return self._ai_pipeline
    
    @property
    def scoring_engine(self):
        """Get scoring engine (lazy loaded)."""
        if self._scoring_engine is None:
            from .scoring import ScoringEngine
            self._scoring_engine = ScoringEngine()
        return self._scoring_engine
    
    def complete_pipeline(
        self, 
        candidate_data: Dict[str, Any]
    ) -> CandidateReport:
        """Run complete pipeline for a candidate."""
        # Create execution record
        execution = PipelineExecution(
            candidate_id=candidate_data.get('candidate_id', ''),
            data=candidate_data
        )
        
        try:
            # Stage 1: Candidate Registration
            execution = self._stage_registration(execution, candidate_data)
            
            # Stage 2: Interview Generation
            execution = self._stage_interview_generation(execution)
            
            # Stage 3: Response Collection (simulated)
            execution = self._stage_response_collection(execution)
            
            # Stage 4: Response Analysis
            execution = self._stage_response_analysis(execution)
            
            # Stage 5: Scoring
            execution = self._stage_scoring(execution)
            
            # Stage 6: Report Generation
            report = self._stage_report_generation(execution)
            
            # Stage 7: Employer Notification
            self._stage_employer_notification(execution)
            
            # Mark complete
            execution.status = PipelineStatus.COMPLETED
            execution.completed_at = datetime.now()
            
            self.executions[execution.execution_id] = execution
            
            return report
            
        except Exception as e:
            execution.status = PipelineStatus.FAILED
            execution.errors.append(str(e))
            self.callbacks.trigger_error(
                execution.current_stage, 
                str(e), 
                execution
            )
            raise
    
    def _stage_registration(
        self, 
        execution: PipelineExecution,
        candidate_data: Dict[str, Any]
    ) -> PipelineExecution:
        """Stage 1: Candidate Registration."""
        execution.current_stage = PipelineStage.CANDIDATE_REGISTRATION
        self.callbacks.trigger_stage_start(
            PipelineStage.CANDIDATE_REGISTRATION, 
            execution
        )
        
        # Register candidate in platform
        name = candidate_data.get('personal_info', {}).get('name', '')
        email = candidate_data.get('personal_info', {}).get('email', '')
        
        if not execution.candidate_id or execution.candidate_id not in self.platform.candidates:
            candidate = self.platform.register_candidate(
                name=name,
                email=email,
                phone=candidate_data.get('personal_info', {}).get('phone', ''),
                location=candidate_data.get('personal_info', {}).get('location', ''),
                experience_years=candidate_data.get('professional_data', {}).get('experience', 0),
                skills=candidate_data.get('professional_data', {}).get('skills', []),
                education=candidate_data.get('professional_data', {}).get('education', ''),
                certifications=candidate_data.get('professional_data', {}).get('certifications', [])
            )
            execution.candidate_id = candidate.candidate_id
        else:
            execution.candidate_id = list(self.platform.candidates.keys())[0]
        
        execution.stages_completed.append(PipelineStage.CANDIDATE_REGISTRATION)
        self.callbacks.trigger_stage_complete(
            PipelineStage.CANDIDATE_REGISTRATION, 
            execution
        )
        
        return execution
    
    def _stage_interview_generation(
        self, 
        execution: PipelineExecution
    ) -> PipelineExecution:
        """Stage 2: Interview Generation."""
        execution.current_stage = PipelineStage.INTERVIEW_GENERATION
        self.callbacks.trigger_stage_start(
            PipelineStage.INTERVIEW_GENERATION, 
            execution
        )
        
        # Create interview session
        session = self.platform.create_interview_session(
            execution.candidate_id,
            num_questions=5
        )
        
        execution.session_id = session.session_id
        execution.data['questions'] = [
            q.to_dict() for q in session.questions
        ]
        
        execution.stages_completed.append(PipelineStage.INTERVIEW_GENERATION)
        self.callbacks.trigger_stage_complete(
            PipelineStage.INTERVIEW_GENERATION, 
            execution
        )
        
        return execution
    
    def _stage_response_collection(
        self, 
        execution: PipelineExecution
    ) -> PipelineExecution:
        """Stage 3: Response Collection."""
        execution.current_stage = PipelineStage.RESPONSE_COLLECTION
        self.callbacks.trigger_stage_start(
            PipelineStage.RESPONSE_COLLECTION, 
            execution
        )
        
        # Collect responses (in production, this would collect from the candidate)
        # For demo, we simulate responses
        responses = {
            'behavioral_questions': [
                {
                    'question': 'Tell me about a time you had to manage a difficult project.',
                    'response': 'I led a team project where we had tight deadlines. I prioritized tasks, delegated responsibilities, and communicated regularly with stakeholders to ensure we met our goals on time.'
                }
            ],
            'technical_questions': [
                {
                    'question': 'Explain a technical challenge you faced.',
                    'response': 'I faced a performance issue with a database query. I analyzed the query execution plan, indexed the frequently accessed columns, and optimized the query to reduce load time by 70%.'
                }
            ],
            'scenario_questions': [
                {
                    'question': 'How do you prioritize tasks when everything seems urgent?',
                    'response': 'I use the Eisenhower matrix to categorize tasks by urgency and importance. I focus on tasks that are important but not urgent first, then schedule time-sensitive tasks, and delegate or eliminate non-essential items.'
                }
            ]
        }
        
        execution.data['responses'] = responses
        
        execution.stages_completed.append(PipelineStage.RESPONSE_COLLECTION)
        self.callbacks.trigger_stage_complete(
            PipelineStage.RESPONSE_COLLECTION, 
            execution
        )
        
        return execution
    
    def _stage_response_analysis(
        self, 
        execution: PipelineExecution
    ) -> PipelineExecution:
        """Stage 4: Response Analysis."""
        execution.current_stage = PipelineStage.RESPONSE_ANALYSIS
        self.callbacks.trigger_stage_start(
            PipelineStage.RESPONSE_ANALYSIS, 
            execution
        )
        
        # Get responses from execution data
        responses = execution.data.get('responses', {})
        
        # Flatten responses for analysis
        flat_responses = {}
        for category, response_list in responses.items():
            if isinstance(response_list, list):
                for i, response in enumerate(response_list):
                    if isinstance(response, dict) and 'response' in response:
                        flat_responses[f'{category}_{i}'] = response['response']
                    elif isinstance(response, str):
                        flat_responses[f'{category}_{i}'] = response
        
        # Analyze using AI pipeline
        analysis = self.ai_pipeline.analyze_responses(flat_responses)
        
        execution.data['analysis'] = analysis
        
        execution.stages_completed.append(PipelineStage.RESPONSE_ANALYSIS)
        self.callbacks.trigger_stage_complete(
            PipelineStage.RESPONSE_ANALYSIS, 
            execution
        )
        
        return execution
    
    def _stage_scoring(
        self, 
        execution: PipelineExecution
    ) -> PipelineExecution:
        """Stage 5: Scoring."""
        execution.current_stage = PipelineStage.SCORING
        self.callbacks.trigger_stage_start(
            PipelineStage.SCORING, 
            execution
        )
        
        # Build candidate data from execution
        candidate_data = {
            'candidate_id': execution.candidate_id,
            'personal_info': execution.data.get('personal_info', {}),
            'professional_data': execution.data.get('professional_data', {}),
            'interview_responses': execution.data.get('responses', {}),
            'behavioral_metrics': {}
        }
        
        # Get score from scoring engine
        score = self.scoring_engine.get_candidate_score(
            candidate_data,
            session_id=execution.session_id
        )
        
        execution.data['score'] = score.to_dict()
        
        execution.stages_completed.append(PipelineStage.SCORING)
        self.callbacks.trigger_stage_complete(
            PipelineStage.SCORING, 
            execution
        )
        
        return execution
    
    def _stage_report_generation(
        self, 
        execution: PipelineExecution
    ) -> CandidateReport:
        """Stage 6: Report Generation."""
        execution.current_stage = PipelineStage.REPORT_GENERATION
        
        score_data = execution.data.get('score', {})
        
        # Build strengths and areas for improvement
        breakdown = score_data.get('breakdown', {})
        
        strengths = []
        areas_for_improvement = []
        
        if breakdown.get('technical_skills', 0) > 0.7:
            strengths.append("Strong technical skills")
        else:
            areas_for_improvement.append("Technical skills development")
        
        if breakdown.get('communication', 0) > 0.7:
            strengths.append("Excellent communication")
        else:
            areas_for_improvement.append("Communication clarity")
        
        if breakdown.get('problem_solving', 0) > 0.7:
            strengths.append("Strong problem-solving abilities")
        else:
            areas_for_improvement.append("Problem-solving approach")
        
        # Build recommendations
        recommendations = []
        if breakdown.get('cultural_alignment', 0) < 0.6:
            recommendations.append("Consider company culture alignment")
        if breakdown.get('technical_skills', 0) < 0.6:
            recommendations.append("Pursue additional technical training")
        
        report = CandidateReport(
            candidate_id=execution.candidate_id,
            session_id=execution.session_id,
            overall_score=score_data.get('overall_score', 0.0),
            score_breakdown=breakdown,
            percentile_rank=score_data.get('percentile_rank'),
            strengths=strengths,
            areas_for_improvement=areas_for_improvement,
            recommendations=recommendations
        )
        
        execution.stages_completed.append(PipelineStage.REPORT_GENERATION)
        
        return report
    
    def _stage_employer_notification(
        self, 
        execution: PipelineExecution
    ) -> None:
        """Stage 7: Employer Notification."""
        execution.current_stage = PipelineStage.EMPLOYER_NOTIFICATION
        
        # In production, this would send email/notification
        # For demo, we just log it
        
        execution.stages_completed.append(PipelineStage.EMPLOYER_NOTIFICATION)
        
        self.callbacks.trigger_pipeline_complete(execution)
    
    def get_execution(self, execution_id: str) -> Optional[PipelineExecution]:
        """Get an execution by ID."""
        return self.executions.get(execution_id)
    
    def get_all_executions(self) -> List[PipelineExecution]:
        """Get all executions."""
        return list(self.executions.values())
    
    def get_pipeline_statistics(self) -> Dict[str, Any]:
        """Get pipeline statistics."""
        total = len(self.executions)
        completed = len([e for e in self.executions.values() if e.status == PipelineStatus.COMPLETED])
        failed = len([e for e in self.executions.values() if e.status == PipelineStatus.FAILED])
        
        return {
            'total_executions': total,
            'completed': completed,
            'failed': failed,
            'stages': [stage.value for stage in PipelineStage],
            'flow': self.flow
        }


# Pipeline instance
_pipeline_instance: Optional[DataFlowArchitecture] = None


def get_pipeline_architecture() -> DataFlowArchitecture:
    """Get the pipeline architecture instance."""
    global _pipeline_instance
    if _pipeline_instance is None:
        _pipeline_instance = DataFlowArchitecture()
    return _pipeline_instance


def initialize_pipeline() -> DataFlowArchitecture:
    """Initialize and return the pipeline architecture."""
    global _pipeline_instance
    _pipeline_instance = DataFlowArchitecture()
    return _pipeline_instance