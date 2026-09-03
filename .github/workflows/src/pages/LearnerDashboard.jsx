import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Sparkles, 
  Flame, 
  BookOpen, 
  Award, 
  TrendingUp, 
  ArrowRight, 
  Play, 
  CheckCircle2
} from 'lucide-react';
import Badge from '../components/common/Badge';
import CompetencyRadarChart from '../components/charts/CompetencyRadarChart';
import ProgressAreaChart from '../components/charts/ProgressAreaChart';
import { LEARNER_PROGRESS_METRICS } from '../data/mockData';

export const LearnerDashboard = () => {
  const { currentUser, courses, assessments, enrolledCourseIds } = useAuth();

  const enrolledCourses = courses.filter(c => enrolledCourseIds.includes(c.id));
  const activeCourse = enrolledCourses.find(c => c.progress < 100) || enrolledCourses[0];

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-indigo-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge variant="purple" size="sm">
                <Flame className="w-3 h-3 text-amber-400" />
                {currentUser.learningStreakDays} Day Learning Streak!
              </Badge>
              <span className="text-xs text-indigo-300">• {currentUser.cadre}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Welcome back, {currentUser.name}!
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Your AI Adaptive Engine has identified 2 high-priority courses to close your <span className="text-amber-300 font-semibold">AI & Cyber Policy competency gaps</span>.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/15 shrink-0">
            <div className="text-center">
              <p className="text-2xl font-extrabold text-white">{currentUser.overallProgress}%</p>
              <p className="text-[10px] text-slate-300 uppercase tracking-wider">FRAC Score</p>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="text-center">
              <p className="text-2xl font-extrabold text-amber-300">{currentUser.totalHoursLearned}h</p>
              <p className="text-[10px] text-slate-300 uppercase tracking-wider">Hours Studied</p>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500">Learning Progress</span>
            <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">{currentUser.overallProgress}%</p>
          <div className="w-full bg-slate-100 h-2 rounded-full mt-2 overflow-hidden">
            <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${currentUser.overallProgress}%` }}></div>
          </div>
          <p className="text-[11px] text-slate-500 mt-2">+6% increase this month</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500">Competencies Achieved</span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Award className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">{currentUser.competenciesAchieved} <span className="text-xs font-normal text-slate-400">/ {currentUser.targetCompetencies} Target</span></p>
          <p className="text-[11px] text-emerald-600 font-medium mt-3">4 remaining for Next Cadre Level</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500">Active Enrollments</span>
            <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">{enrolledCourses.length}</p>
          <p className="text-[11px] text-slate-500 mt-3">2 in progress • 2 completed</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-slate-500">Verified Badges</span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>
          <p className="text-2xl font-bold text-slate-900">{currentUser.certificatesCount}</p>
          <p className="text-[11px] text-indigo-600 font-medium mt-3">Synced with DigiLocker</p>
        </div>

      </div>

      {/* Main Grid: Enrolled Courses & Competency Radar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Enrolled & Active Courses */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Current In-Progress Banner */}
          {activeCourse && (
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-card">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Badge variant="primary" size="sm">Resume Learning</Badge>
                  <span className="text-xs text-slate-500">{activeCourse.duration} total</span>
                </div>
                <span className="text-xs font-bold text-indigo-600">{activeCourse.progress}% Completed</span>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <img
                  src={activeCourse.thumbnail}
                  alt={activeCourse.title}
                  className="w-full sm:w-28 h-20 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-sm text-slate-800 leading-snug">{activeCourse.title}</h3>
                  <p className="text-xs text-slate-500 mt-1">{activeCourse.instructor}</p>
                  <div className="w-full bg-slate-100 h-2 rounded-full mt-3 overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full transition-all" style={{ width: `${activeCourse.progress}%` }}></div>
                  </div>
                </div>
                <Link
                  to={`/courses/${activeCourse.id}`}
                  className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors flex items-center gap-1.5 shrink-0"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Resume</span>
                </Link>
              </div>
            </div>
          )}

          {/* Current Enrolled Courses List */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-sm text-slate-800">My Enrolled Courses</h3>
              <Link to="/courses/crs-ai-01" className="text-xs text-indigo-600 font-bold hover:underline">
                Explore All Catalog →
              </Link>
            </div>

            <div className="space-y-3">
              {enrolledCourses.map((c) => (
                <div key={c.id} className="p-3.5 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50/40">
                  <div className="flex items-center gap-3">
                    <img src={c.thumbnail} alt={c.title} className="w-14 h-12 rounded-lg object-cover" />
                    <div>
                      <h4 className="font-bold text-xs text-slate-800">{c.title}</h4>
                      <p className="text-[11px] text-slate-500">{c.instructor} • {c.difficulty}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                    <div className="text-right">
                      <span className="text-xs font-bold text-slate-700">{c.progress}%</span>
                      <p className="text-[10px] text-slate-400">{c.progress === 100 ? 'Completed' : 'In Progress'}</p>
                    </div>
                    <Link
                      to={`/courses/${c.id}`}
                      className="px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-lg shadow-2xs"
                    >
                      {c.progress === 100 ? 'Review' : 'Continue'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Timeline Chart */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-sm text-slate-800">Study Velocity & Score Growth</h3>
                <p className="text-xs text-slate-500">Monthly learning hours vs competency diagnostic score</p>
              </div>
              <Badge variant="success" size="sm">Active Pace</Badge>
            </div>
            <ProgressAreaChart data={LEARNER_PROGRESS_METRICS.monthlyHours} />
          </div>

        </div>

        {/* Right 1 Col: Competency Radar & Upcoming Assessments */}
        <div className="space-y-6">
          
          {/* Competency Radar Card */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-card">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-sm text-slate-800">FRAC Competency Matrix</h3>
              <Badge variant="purple" size="sm">Radar</Badge>
            </div>
            <p className="text-xs text-slate-500 mb-2">Current Achieved vs Target Civil Cadre Levels</p>
            <CompetencyRadarChart data={LEARNER_PROGRESS_METRICS.competencyRadar} />
            <div className="pt-3 border-t border-slate-100 text-center">
              <Link to="/progress" className="text-xs text-indigo-600 font-bold hover:underline">
                View Full Competency Passport →
              </Link>
            </div>
          </div>

          {/* Upcoming Assessments Widget */}
          <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-card">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-sm text-slate-800">Assessments & Quizzes</h3>
              <Link to="/assessments" className="text-xs text-indigo-600 font-bold hover:underline">All</Link>
            </div>

            <div className="space-y-3">
              {assessments.slice(0, 2).map((asm) => (
                <div key={asm.id} className="p-3 rounded-xl border border-slate-100 bg-slate-50/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge variant={asm.status === 'Completed' ? 'success' : 'warning'} size="sm">
                      {asm.status}
                    </Badge>
                    <span className="text-[10px] text-slate-500">{asm.duration}</span>
                  </div>
                  <h4 className="font-bold text-xs text-slate-800 leading-snug">{asm.title}</h4>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] text-slate-500">{asm.totalQuestions} Questions</span>
                    <Link
                      to={`/quiz/${asm.id}`}
                      className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
                    >
                      {asm.status === 'Completed' ? 'Retake Exam →' : 'Start Assessment →'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Recommendation Mini Callout */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-5 border border-indigo-100">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              <span className="text-xs font-bold text-indigo-900">AI Recommendation</span>
            </div>
            <h4 className="font-bold text-xs text-slate-800">Generative AI for Governance</h4>
            <p className="text-[11px] text-slate-600 mt-1">98% match for closing your emerging tech policy gap.</p>
            <Link
              to="/recommendations"
              className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-indigo-700 hover:underline"
            >
              <span>Explore AI Recommendations</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
};

export default LearnerDashboard;
