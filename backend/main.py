#!/usr/bin/env python3
"""
Micro1 AI Platform - FastAPI Backend
=====================================

Node.js/Python Backend API for the Micro1 Platform.

Provides RESTful API endpoints:
- Candidates management
- Interview sessions
- Scoring and evaluation
- Dashboard analytics
"""

from fastapi import FastAPI, HTTPException, Depends, status, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, EmailStr, Field
from typing import Optional, List, Dict, Any
from datetime import datetime
from enum import Enum
import uuid
import os

# Initialize FastAPI app
app = FastAPI(
    title="Micro1 AI Platform API",
    description="AI-driven behavioral assessment and candidate evaluation system",
    version="1.0.0",
    docs_url="/api/docs",
    redoc_url="/api/redoc",
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Security
security = HTTPBearer()

# Enums
class CandidateStatus(str, Enum):
    REGISTERED = "registered"
    IN_PROGRESS = "in_progress"
    COMPLETED = "completed"
    SCORED = "scored"
    REVIEWED = "reviewed"
    HIRED = "hired"
    REJECTED = "rejected"


# Pydantic Models
class PersonalInfo(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    location: Optional[str] = None


class ProfessionalData(BaseModel):
    experience: int = 0
    skills: List[str] = []
    education: Optional[str] = None
    certifications: List[str] = []


class BehavioralMetrics(BaseModel):
    communication_score: float = 0.0
    problem_solving_score: float = 0.0
    technical_aptitude: float = 0.0
    cultural_fit: float = 0.0


class InterviewResponse(BaseModel):
    question: str
    response: str


class InterviewResponses(BaseModel):
    behavioral_questions: List[InterviewResponse] = []
    technical_questions: List[InterviewResponse] = []
    scenario_questions: List[InterviewResponse] = []


class CandidateCreate(BaseModel):
    personal_info: PersonalInfo
    professional_data: ProfessionalData
    behavioral_metrics: Optional[BehavioralMetrics] = None
    interview_responses: Optional[InterviewResponses] = None


class InterviewQuestion(BaseModel):
    question_id: str
    question_text: str
    question_type: str
    difficulty_level: int


class InterviewSessionCreate(BaseModel):
    candidate_id: str
    num_questions: int = 5


class ResponseSubmit(BaseModel):
    question_id: str
    response: str


class ScoreBreakdown(BaseModel):
    technical_skills: float
    behavioral_fit: float
    communication: float
    problem_solving: float
    cultural_alignment: float


class CandidateScore(BaseModel):
    candidate_id: str
    session_id: str
    overall_score: float
    breakdown: ScoreBreakdown
    percentile_rank: Optional[float] = None


class CandidateReport(BaseModel):
    report_id: str
    candidate_id: str
    session_id: str
    overall_score: float
    score_breakdown: Dict[str, float]
    percentile_rank: Optional[float] = None
    strengths: List[str]
    areas_for_improvement: List[str]
    recommendations: List[str]

class JobCreate(BaseModel):
    title: str
    description: str
    required_skills: List[str]
    questions: List[Dict[str, Any]]


# In-memory database (replace with actual database in production)
class InMemoryDB:
    def __init__(self):
        self.candidates: Dict[str, Dict[str, Any]] = {}
        self.sessions: Dict[str, Dict[str, Any]] = {}
        self.scores: Dict[str, CandidateScore] = {}
        self.reports: Dict[str, CandidateReport] = {}
        self.jobs: Dict[str, Dict[str, Any]] = {}

    def add_candidate(self, candidate_data: Dict[str, Any]) -> Dict[str, Any]:
        candidate_id = str(uuid.uuid4())
        candidate = {
            'candidate_id': candidate_id,
            **candidate_data,
            'status': CandidateStatus.REGISTERED.value,
            'created_at': datetime.now().isoformat(),
            'updated_at': datetime.now().isoformat(),
        }
        self.candidates[candidate_id] = candidate
        return candidate

    def get_candidate(self, candidate_id: str) -> Optional[Dict[str, Any]]:
        return self.candidates.get(candidate_id)

    def get_all_candidates(self) -> List[Dict[str, Any]]:
        return list(self.candidates.values())

    def update_candidate(self, candidate_id: str, data: Dict[str, Any]) -> Optional[Dict[str, Any]]:
        if candidate_id in self.candidates:
            self.candidates[candidate_id].update(data)
            self.candidates[candidate_id]['updated_at'] = datetime.now().isoformat()
            return self.candidates[candidate_id]
        return None


db = InMemoryDB()


# API Routes

@app.get("/")
async def root():
    """Root endpoint."""
    return {
        "message": "Welcome to Micro1 AI Platform API",
        "version": "1.0.0",
        "docs": "/api/docs",
    }


@app.get("/api/health")
async def health_check():
    """Health check endpoint."""
    return {
        "status": "healthy",
        "timestamp": datetime.now().isoformat(),
    }


# Candidates API
@app.post("/api/candidates", status_code=status.HTTP_201_CREATED)
async def create_candidate(candidate: CandidateCreate):
    """Create a new candidate."""
    candidate_data = candidate.dict()
    result = db.add_candidate(candidate_data)
    return result


@app.get("/api/candidates")
async def get_candidates(
    skip: int = 0,
    limit: int = 100,
    status: Optional[CandidateStatus] = None,
):
    """Get all candidates."""
    candidates = db.get_all_candidates()

    if status:
        candidates = [c for c in candidates if c.get('status') == status.value]

    return candidates[skip : skip + limit]


@app.get("/api/candidates/{candidate_id}")
async def get_candidate(candidate_id: str):
    """Get a candidate by ID."""
    candidate = db.get_candidate(candidate_id)
    if not candidate:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Candidate not found",
        )
    return candidate


@app.patch("/api/candidates/{candidate_id}")
async def update_candidate(candidate_id: str, data: Dict[str, Any]):
    """Update a candidate."""
    candidate = db.update_candidate(candidate_id, data)
    if not candidate:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Candidate not found",
        )
    return candidate


@app.delete("/api/candidates/{candidate_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_candidate(candidate_id: str):
    """Delete a candidate."""
    if candidate_id not in db.candidates:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Candidate not found",
        )
    del db.candidates[candidate_id]


# Interview API
@app.post("/api/interviews", status_code=status.HTTP_201_CREATED)
async def create_interview_session(data: InterviewSessionCreate):
    """Create a new interview session."""
    candidate = db.get_candidate(data.candidate_id)
    if not candidate:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Candidate not found",
        )

    # Create session
    import random

    session_id = str(uuid.uuid4())
    questions = [
        {
            'question_id': str(uuid.uuid4()),
            'question_text': q,
            'question_type': t,
            'difficulty_level': d,
        }
        for q, t, d in [
            ("Tell me about a time you had to manage a difficult project with tight deadlines.", "behavioral", 2),
            ("Describe a situation where you had to resolve a conflict within your team.", "behavioral", 3),
            ("Explain a technical challenge you faced and how you solved it.", "technical", 3),
            ("How do you prioritize tasks when everything seems equally urgent?", "scenario", 2),
            ("Describe your ideal work environment and team culture.", "behavioral", 1),
        ][:data.num_questions]
    ]

    session = {
        'session_id': session_id,
        'candidate_id': data.candidate_id,
        'questions': questions,
        'status': 'in_progress',
        'started_at': datetime.now().isoformat(),
        'responses': {},
    }

    db.sessions[session_id] = session

    # Update candidate status
    db.update_candidate(data.candidate_id, {'status': CandidateStatus.IN_PROGRESS.value})

    return session


@app.get("/api/interviews/{session_id}")
async def get_interview_session(session_id: str):
    """Get an interview session."""
    if session_id not in db.sessions:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Interview session not found",
        )
    return db.sessions[session_id]


@app.post("/api/interviews/{session_id}/responses")
async def submit_response(session_id: str, response: ResponseSubmit):
    """Submit a response to a question."""
    if session_id not in db.sessions:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Interview session not found",
        )

    session = db.sessions[session_id]
    session['responses'][response.question_id] = response.response

    return {"message": "Response submitted", "question_id": response.question_id}


@app.post("/api/interviews/{session_id}/complete")
async def complete_interview(session_id: str):
    """Complete an interview and generate report."""
    if session_id not in db.sessions:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Interview session not found",
        )

    session = db.sessions[session_id]
    candidate_id = session['candidate_id']

    # Calculate score (simplified)
    overall_score = round(70 + random.random() * 25, 1)
    breakdown = ScoreBreakdown(
        technical_skills=round(min(overall_score + random.uniform(-5, 5), 100) / 100, 2),
        behavioral_fit=round(min(overall_score + random.uniform(-5, 5), 100) / 100, 2),
        communication=round(min(overall_score + random.uniform(-5, 5), 100) / 100, 2),
        problem_solving=round(min(overall_score + random.uniform(-5, 5), 100) / 100, 2),
        cultural_alignment=round(min(overall_score + random.uniform(-5, 5), 100) / 100, 2),
    )

    score = CandidateScore(
        candidate_id=candidate_id,
        session_id=session_id,
        overall_score=overall_score,
        breakdown=breakdown,
        percentile_rank=round(random.uniform(50, 95), 1),
    )

    db.scores[candidate_id] = score

    # Generate report
    strengths = []
    areas_for_improvement = []

    if breakdown.technical_skills > 0.7:
        strengths.append("Strong technical skills")
    else:
        areas_for_improvement.append("Technical skills development")

    if breakdown.communication > 0.7:
        strengths.append("Excellent communication")
    else:
        areas_for_improvement.append("Communication clarity")

    if breakdown.problem_solving > 0.7:
        strengths.append("Strong problem-solving abilities")
    else:
        areas_for_improvement.append("Problem-solving approach")

    recommendations = []
    if breakdown.cultural_alignment < 0.6:
        recommendations.append("Consider company culture alignment")
    if breakdown.technical_skills < 0.6:
        recommendations.append("Pursue additional technical training")

    report = CandidateReport(
        report_id=str(uuid.uuid4()),
        candidate_id=candidate_id,
        session_id=session_id,
        overall_score=overall_score,
        score_breakdown=breakdown.dict(),
        percentile_rank=score.percentile_rank,
        strengths=strengths,
        areas_for_improvement=areas_for_improvement,
        recommendations=recommendations,
    )

    db.reports[report_id] = report

    # Update session and candidate status
    session['status'] = 'completed'
    session['completed_at'] = datetime.now().isoformat()
    db.update_candidate(candidate_id, {'status': CandidateStatus.COMPLETED.value})

    return report


# Scoring API
@app.get("/api/scoring/{candidate_id}")
async def get_score(candidate_id: str):
    """Get candidate score."""
    if candidate_id not in db.scores:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Score not found",
        )
    return db.scores[candidate_id]


@app.get("/api/scoring/top")
async def get_top_candidates(limit: int = 10):
    """Get top candidates by score."""
    scored = [
        {**db.candidates[c_id], 'score': score.overall_score}
        for c_id, score in db.scores.items()
        if c_id in db.candidates
    ]
    scored.sort(key=lambda x: x['score'], reverse=True)
    return scored[:limit]


# Dashboard API
@app.get("/api/dashboard/stats")
async def get_dashboard_stats():
    """Get dashboard statistics."""
    total = len(db.candidates)
    completed = len([
        c for c in db.candidates.values()
        if c.get('status') == CandidateStatus.COMPLETED.value
    ])
    in_progress = len([
        c for c in db.candidates.values()
        if c.get('status') == CandidateStatus.IN_PROGRESS.value
    ])

    scores = [s.overall_score for s in db.scores.values()]
    avg_score = sum(scores) / len(scores) if scores else 0

    # Get top skills
    all_skills = []
    for c in db.candidates.values():
        professional_data = c.get('professional_data', {})
        all_skills.extend(professional_data.get('skills', []))

    skill_counts = {}
    for skill in all_skills:
        skill_counts[skill] = skill_counts.get(skill, 0) + 1

    top_skills = sorted(skill_counts.items(), key=lambda x: x[1], reverse=True)[:5]

    return {
        'total_candidates': total,
        'completed_interviews': completed,
        'active_sessions': in_progress,
        'average_score': round(avg_score, 1),
        'top_skills': [s[0] for s in top_skills],
    }


@app.get("/api/dashboard/recent")
async def get_recent_activity():
    """Get recent activity."""
    recent = list(db.candidates.values())
    recent.sort(key=lambda x: x.get('created_at', ''), reverse=True)
    return recent[:10]

# Jobs API
@app.post("/api/jobs", status_code=status.HTTP_201_CREATED)
async def create_job(job: JobCreate):
    """Create a new job opening."""
    job_id = str(uuid.uuid4())
    job_data = job.dict()
    job_data['job_id'] = job_id
    job_data['created_at'] = datetime.now().isoformat()
    db.jobs[job_id] = job_data
    return job_data

@app.get("/api/jobs")
async def get_jobs():
    """Get all jobs."""
    return list(db.jobs.values())


if __name__ == "__main__":
    import uvicorn
    port = int(os.environ.get("PORT", "3000"))
    uvicorn.run(app, host="0.0.0.0", port=port)