import React from 'react';
import { 
  Users, 
  FileText, 
  TrendingUp, 
  Clock, 
  CheckCircle,
  AlertCircle,
  ArrowUpRight,
  Brain,
  Target,
  Zap
} from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, color }) => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
        {change !== undefined && (
          <div className={`flex items-center mt-2 text-sm ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            <ArrowUpRight className={`w-4 h-4 mr-1 ${change < 0 ? 'rotate-90' : ''}`} />
            <span>{Math.abs(change)}% from last month</span>
          </div>
        )}
      </div>
      <div className={`p-3 rounded-lg ${color}`}>
        {icon}
      </div>
    </div>
  </div>
);

interface DashboardProps {
  stats?: {
    total_candidates?: number;
    completed_interviews?: number;
    active_sessions?: number;
    average_score?: number;
  };
}

const Dashboard: React.FC<DashboardProps> = ({ stats = {} }) => {
  const {
    total_candidates = 156,
    completed_interviews = 89,
    active_sessions = 12,
    average_score = 78.5
  } = stats;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Employer Dashboard</h1>
          <p className="text-gray-500 mt-1">Real-time analytics and candidate insights</p>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Clock className="w-4 h-4" />
          <span>Last updated: Just now</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Candidates"
          value={total_candidates}
          change={12}
          icon={<Users className="w-6 h-6 text-blue-600" />}
          color="bg-blue-50"
        />
        <StatCard
          title="Completed Interviews"
          value={completed_interviews}
          change={8}
          icon={<FileText className="w-6 h-6 text-green-600" />}
          color="bg-green-50"
        />
        <StatCard
          title="Active Sessions"
          value={active_sessions}
          icon={<Clock className="w-6 h-6 text-amber-600" />}
          color="bg-amber-50"
        />
        <StatCard
          title="Average Score"
          value={`${average_score}%`}
          change={3}
          icon={<TrendingUp className="w-6 h-6 text-purple-600" />}
          color="bg-purple-50"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Brain className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900">AI Interview Generation</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Generate context-aware interview questions using GPT-4 and Claude integration
          </p>
          <button className="w-full btn bg-blue-600 text-white hover:bg-blue-700">
            Start New Interview
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-green-50 rounded-lg">
              <Target className="w-5 h-5 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Candidate Scoring</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Multi-factor weighted scoring with behavioral analysis
          </p>
          <button className="w-full btn bg-gray-100 text-gray-700 hover:bg-gray-200">
            View Rankings
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Zap className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900">Quick Analytics</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Real-time performance dashboards and progress tracking
          </p>
          <button className="w-full btn bg-gray-100 text-gray-700 hover:bg-gray-200">
            View Analytics
          </button>
        </div>
      </div>

      {/* Recent Candidates Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Recent Candidates</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Candidate
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applied
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'Sarah Johnson', email: 'sarah.j@email.com', status: 'Completed', score: 92, applied: '2 hours ago' },
                { name: 'Michael Chen', email: 'mchen@email.com', status: 'In Progress', score: null, applied: '4 hours ago' },
                { name: 'Emily Davis', email: 'emily.d@email.com', status: 'Completed', score: 85, applied: '1 day ago' },
                { name: 'James Wilson', email: 'jwilson@email.com', status: 'Reviewed', score: 78, applied: '2 days ago' },
                { name: 'Lisa Martinez', email: 'lisa.m@email.com', status: 'Completed', score: 88, applied: '3 days ago' },
              ].map((candidate, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-medium">
                        {candidate.name.split(' ' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900">{candidate.name}</p>
                        <p className="text-sm text-gray-500">{candidate.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      candidate.status === 'Completed' ? 'bg-green-100 text-green-800' :
                      candidate.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      candidate.status === 'Reviewed' ? 'bg-purple-100 text-purple-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {candidate.status === 'Completed' && <CheckCircle className="w-3 h-3 mr-1" />}
                      {candidate.status === 'In Progress' && <Clock className="w-3 h-3 mr-1" />}
                      {candidate.status === 'Reviewed' && <AlertCircle className="w-3 h-3 mr-1" />}
                      {candidate.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {candidate.score !== null ? (
                      <span className={`text-sm font-medium ${
                        candidate.score >= 80 ? 'text-green-600' :
                        candidate.score >= 70 ? 'text-amber-600' :
                        'text-red-600'
                      }`}>
                        {candidate.score}%
                      </span>
                      ) : (
                        <span className="text-sm text-gray-400">-</span>
                      )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {candidate.applied}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;