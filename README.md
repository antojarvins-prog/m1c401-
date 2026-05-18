# Micro1 AI Platform

<p align="center">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Version">
  <img src="https://img.shields.io/badge/Python-3.9%2B-blue" alt="Python">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
</p>

An AI-driven behavioral assessment and candidate evaluation platform that replicates the core functionality of Micro1's AI Interview Platform.

## Features

### Core Components

- **Interview Engine** - AI-driven behavioral assessment
- **Assessment Pipeline** - Multi-stage evaluation system  
- **Scoring Algorithm** - Proprietary candidate ranking
- **Candidate Database** - Structured applicant profiles
- **Employer Dashboard** - Real-time analytics interface

### AI Model Integration

- **GPT-4 (OpenAI)** - Interview generation and natural language processing
- **Claude (Anthropic)** - Behavioral analysis and reasoning
- **Proprietary Models** - Domain-specific assessments
- **Custom Scoring** - Weighted candidate evaluation

### Technical Stack

- **Frontend**: React/Next.js with TypeScript and Tailwind CSS
- **Backend**: FastAPI (Python) with Node.js compatibility
- **Security**: JWT authentication, password hashing, audit logging
- **Compliance**: GDPR, CCPA, bias detection, consent management

## Architecture

### Weighted Scoring Algorithm

| Category | Weight |
|----------|--------|
| Technical Skills | 35% |
| Behavioral Fit | 25% |
| Communication | 20% |
| Problem Solving | 15% |
| Cultural Alignment | 5% |

### Data Flow Pipeline

1. **Candidate Registration** - Profile creation
2. **Interview Generation** - AI-powered question creation
3. **Response Collection** - Answer collection
4. **Response Analysis** - Multi-model analysis
5. **Scoring** - Weighted evaluation
6. **Report Generation** - Candidate report

## Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/your-repo/micro1-platform.git
cd micro1-platform

# Install dependencies
pip install -r micro1_platform/requirements.txt

# Run the backend
cd micro1_platform/backend
python main.py
```

### API Usage

```python
from micro1_platform import initialize_platform, initialize_pipeline

# Initialize platform
platform = initialize_platform()

# Register a candidate
candidate = platform.register_candidate(
    name="John Doe",
    email="john@example.com",
    experience_years=5,
    skills=["Python", "JavaScript", "AWS"]
)

# Create interview session
session = platform.create_interview_session(candidate.candidate_id)
```

### REST API Endpoints

```bash
# Health check
GET /api/health

# Create candidate
POST /api/candidates
{
  "personal_info": {
    "name": "John Doe",
    "email": "john@example.com"
  },
  "professional_data": {
    "experience": 5,
    "skills": ["Python", "JavaScript"]
  }
}

# Create interview session
POST /api/interviews
{
  "candidate_id": "uuid",
  "num_questions": 5
}

# Complete interview
POST /api/interviews/{session_id}/complete

# Get dashboard stats
GET /api/dashboard/stats
```

## Project Structure

```
micro1_platform/
├── core.py                 # Core platform architecture
├── ai_pipeline.py         # AI model integration
├── scoring.py           # Scoring engine
├── data_flow.py         # Data flow pipeline
├── security.py         # Security & compliance
├── __init__.py        # Package exports
├── requirements.txt  # Python dependencies
├── backend/
│   └── main.py       # FastAPI backend
└── frontend/
    ├── package.json
    ├── tailwind.config.js
    └── src/
        ├── components/
        │   └── Dashboard.tsx
        ├── pages/
        │   └── index.tsx
        ├── styles/
        │   └── globals.css
        └── lib/
            └── api.ts
```

## Security Features

- **Input Validation** - SQL injection and XSS prevention
- **Password Hashing** - PBKDF2 with HMAC-SHA256
- **JWT Tokens** - Secure authentication
- **Consent Management** - GDPR/CCPA compliance
- **Audit Logging** - Complete action tracking
- **Bias Detection** - Fair hiring practices

## Compliance

### Data Privacy

- GDPR compliance
- CCPA compliance  
- Data encryption standards
- Consent management

### Employment Law

- Non-discrimination policies
- Fair hiring practices
- Documentation requirements

### AI Ethics

- Bias mitigation
- Transparency in scoring
- Candidate consent

## API Documentation

Once running, visit:

- Swagger UI: `http://localhost:3000/api/docs`
- ReDoc: `http://localhost:3000/api/redoc`

## License

MIT License - See LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

Built with ❤️ using Python, FastAPI, React, and AI