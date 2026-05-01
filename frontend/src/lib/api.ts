// Micro1 Platform API Client
// Integration with backend services

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export interface Candidate {
  candidate_id: string;
  name: string;
  email: string;
  phone?: string;
  location?: string;
  experience_years: number;
  skills: string[];
  education?: string;
  certifications?: string[];
  created_at: string;
}

export interface InterviewSession {
  session_id: string;
  candidate_id: string;
  questions: Question[];
  status: string;
  started_at?: string;
  completed_at?: string;
}

export interface Question {
  question_id: string;
  question_text: string;
  question_type: string;
  difficulty_level: number;
}

export interface Score {
  overall_score: number;
  breakdown: {
    technical_skills: number;
    behavioral_fit: number;
    communication: number;
    problem_solving: number;
    cultural_alignment: number;
  };
  percentile_rank?: number;
}

export interface CandidateReport {
  report_id: string;
  candidate_id: string;
  session_id: string;
  overall_score: number;
  score_breakdown: Record<string, number>;
  percentile_rank?: number;
  strengths: string[];
  areas_for_improvement: string[];
  recommendations: string[];
}

export interface DashboardStats {
  total_candidates: number;
  completed_interviews: number;
  active_sessions: number;
  average_score: number;
  top_skills: string[];
  recent_candidates: Candidate[];
}

// API Response wrapper
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Fetch wrapper with error handling
async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    const data = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: data.error || `HTTP error ${response.status}`,
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Candidate API
export const candidatesApi = {
  // Get all candidates
  async getAll(): Promise<ApiResponse<Candidate[]>> {
    return fetchApi<Candidate[]>('/candidates');
  },

  // Get candidate by ID
  async getById(id: string): Promise<ApiResponse<Candidate>> {
    return fetchApi<Candidate>(`/candidates/${id}`);
  },

  // Create new candidate
  async create(data: Partial<Candidate>): Promise<ApiResponse<Candidate>> {
    return fetchApi<Candidate>('/candidates', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },

  // Update candidate
  async update(
    id: string,
    data: Partial<Candidate>
  ): Promise<ApiResponse<Candidate>> {
    return fetchApi<Candidate>(`/candidates/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(data),
    });
  },

  // Delete candidate
  async delete(id: string): Promise<ApiResponse<void>> {
    return fetchApi<void>(`/candidates/${id}`, {
      method: 'DELETE',
    });
  },
};

// Interview API
export const interviewApi = {
  // Create interview session
  async createSession(
    candidateId: string,
    numQuestions?: number
  ): Promise<ApiResponse<InterviewSession>> {
    return fetchApi<InterviewSession>('/interviews', {
      method: 'POST',
      body: JSON.stringify({ candidate_id: candidateId, num_questions: numQuestions }),
    });
  },

  // Get interview session
  async getSession(id: string): Promise<ApiResponse<InterviewSession>> {
    return fetchApi<InterviewSession>(`/interviews/${id}`);
  },

  // Submit response
  async submitResponse(
    sessionId: string,
    questionId: string,
    response: string
  ): Promise<ApiResponse<void>> {
    return fetchApi<void>(`/interviews/${sessionId}/responses`, {
      method: 'POST',
      body: JSON.stringify({ question_id: questionId, response }),
    });
  },

  // Complete interview
  async complete(id: string): Promise<ApiResponse<CandidateReport>> {
    return fetchApi<CandidateReport>(`/interviews/${id}/complete`, {
      method: 'POST',
    });
  },
};

// Scoring API
export const scoringApi = {
  // Get score for candidate
  async getScore(candidateId: string): Promise<ApiResponse<Score>> {
    return fetchApi<Score>(`/scoring/${candidateId}`);
  },

  // Calculate score
  async calculate(candidateId: string): Promise<ApiResponse<Score>> {
    return fetchApi<Score>(`/scoring/${candidateId}/calculate`, {
      method: 'POST',
    });
  },

  // Get top candidates
  async getTopCandidates(limit?: number): Promise<ApiResponse<Candidate[]>> {
    const query = limit ? `?limit=${limit}` : '';
    return fetchApi<Candidate[]>(`/scoring/top${query}`);
  },
};

// Dashboard API
export const dashboardApi = {
  // Get dashboard statistics
  async getStats(): Promise<ApiResponse<DashboardStats>> {
    return fetchApi<DashboardStats>('/dashboard/stats');
  },

  // Get recent activity
  async getRecentActivity(): Promise<ApiResponse<any[]>> {
    return fetchApi<any[]>('/dashboard/recent');
  },
};

// Export the API client
export default {
  candidates: candidatesApi,
  interviews: interviewApi,
  scoring: scoringApi,
  dashboard: dashboardApi,
};