import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Sparkles, 
  Search, 
  Clock, 
  CheckCircle2, 
  ArrowUpRight, 
  BookOpen
} from 'lucide-react';
import Badge from '../components/common/Badge';
import { AI_RECOMMENDATIONS } from '../data/mockData';
import { Link } from 'react-router-dom';

export const AIRecommendationsPage = () => {
  const { enrollCourse, enrolledCourseIds } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredRecommendations = AI_RECOMMENDATIONS.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.reason.toLowerCase().includes(searchTerm.toLowerCase());
    if (selectedFilter === 'all') return matchesSearch;
    if (selectedFilter === 'urgent') return matchesSearch && item.priority === 'Urgent';
    if (selectedFilter === 'statutory') return matchesSearch && item.category.includes('Statutory');
    return matchesSearch;
  });

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="purple" size="sm">
              <Sparkles className="w-3 h-3 text-amber-300 animate-spin" />
              Vector Matching Engine v4.2
            </Badge>
            <span className="text-xs text-purple-300">• FRAC Competency Gap Diagnosis</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            AI Recommended Learning Pathways
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our multi-modal vector search matches your current civil service cadre level, historical assessment results, and upcoming departmental mandates to surface personalized training programs.
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-card flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search AI recommendations or skills..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
          {[
            { id: 'all', label: 'All Recommendations' },
            { id: 'urgent', label: 'High Priority Gaps' },
            { id: 'statutory', label: 'Statutory Mandates' }
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setSelectedFilter(f.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedFilter === f.id
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

      </div>

      {/* Recommendation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredRecommendations.map((item) => {
          const isEnrolled = enrolledCourseIds.includes(item.courseId);

          return (
            <div
              key={item.courseId}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between group"
            >
              <div>
                
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-black text-indigo-600">{item.matchPercentage}%</span>
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Match</span>
                  </div>
                  <Badge variant={item.priority === 'Urgent' ? 'danger' : 'purple'} size="sm">
                    {item.category}
                  </Badge>
                </div>

                <h3 className="font-bold text-base text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug mb-2">
                  {item.title}
                </h3>

                <div className="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-3.5 mb-4 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-900">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
                    <span>AI Diagnostics Reasoning</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {item.reason}
                  </p>
                </div>

                <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 mb-4 text-xs space-y-1">
                  <span className="font-semibold text-slate-500 text-[11px] uppercase tracking-wider block">Competency Target</span>
                  <p className="font-bold text-slate-800">{item.competencyGap}</p>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {item.estimatedTime}
                  </span>
                  <span>•</span>
                  <span>{item.difficulty} Level</span>
                </div>

              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  to={`/courses/${item.courseId}`}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                >
                  <span>View Syllabus</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>

                {isEnrolled ? (
                  <Link
                    to={`/courses/${item.courseId}`}
                    className="px-4 py-2 bg-emerald-50 text-emerald-700 border border-emerald-200 font-bold text-xs rounded-xl flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Enrolled • Continue</span>
                  </Link>
                ) : (
                  <button
                    onClick={() => enrollCourse(item.courseId)}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors flex items-center gap-1.5"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Enroll Now</span>
                  </button>
                )}
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default AIRecommendationsPage;
