import React from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Award, 
  Clock, 
  HelpCircle, 
  CheckCircle2, 
  Play, 
  RotateCcw, 
  ShieldCheck, 
  BarChart2,
  FileText
} from 'lucide-react';
import Badge from '../components/common/Badge';
import { Link } from 'react-router-dom';

export const AssessmentPage = () => {
  const { assessments } = useAuth();

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-3xl space-y-2">
          <div className="flex items-center gap-2">
            <Badge variant="purple" size="sm">
              <ShieldCheck className="w-3 h-3 text-amber-300" />
              National FRAC Evaluation Grid
            </Badge>
            <span className="text-xs text-indigo-300">• Verified Civil Cadre Benchmarks</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
            Competency Assessment & Diagnostic Hub
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Validate your domain expertise, behavioral readiness, and statutory compliance. Successful completions issue verifiable DigiLocker digital badges and update your National Civil Service Competency Passport.
          </p>
        </div>
      </div>

      {/* Grid of Assessments */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {assessments.map((asm) => {
          const isCompleted = asm.status === 'Completed';

          return (
            <div
              key={asm.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between"
            >
              <div>
                
                {/* Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant={isCompleted ? 'success' : 'primary'} size="sm">
                    {asm.domain}
                  </Badge>
                  <Badge variant={isCompleted ? 'success' : 'warning'} size="sm">
                    {asm.status}
                  </Badge>
                </div>

                {/* Title */}
                <h3 className="font-bold text-base text-slate-900 mb-2 leading-snug">
                  {asm.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {asm.description}
                </p>

                {/* Target Competency & Specs */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-2.5 mb-4 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Mapped FRAC Competency:</span>
                    <span className="font-bold text-indigo-700">{asm.targetCompetency}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Duration & Format:</span>
                    <span className="font-semibold text-slate-800">{asm.duration} • {asm.totalQuestions} Multiple Choice</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Passing Threshold:</span>
                    <span className="font-semibold text-slate-800">{asm.passingScore}% minimum</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 font-medium">Difficulty Level:</span>
                    <span className="font-semibold text-slate-800">{asm.difficulty}</span>
                  </div>
                </div>

                {/* Past Result if Completed */}
                {isCompleted && asm.lastScore !== null && (
                  <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-3.5 mb-4 flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">Previous Diagnostic Score</span>
                      <span className="text-xs text-emerald-900 font-medium">Evaluated on {asm.completedAt || 'Recent'}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black text-emerald-700">{asm.lastScore}%</span>
                      {asm.lastScore >= asm.passingScore ? (
                        <p className="text-[10px] text-emerald-600 font-bold">PASSED</p>
                      ) : (
                        <p className="text-[10px] text-amber-600 font-bold">RETAKE RECOMMENDED</p>
                      )}
                    </div>
                  </div>
                )}

              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <span className="text-xs text-slate-400">
                  {isCompleted ? 'Certificate issued to DigiLocker' : 'Instant AI evaluation'}
                </span>

                <Link
                  to={`/quiz/${asm.id}`}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all shadow-sm ${
                    isCompleted
                      ? 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                      : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-200'
                  }`}
                >
                  {isCompleted ? <RotateCcw className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  <span>{isCompleted ? 'Retake Benchmark Exam' : 'Start Assessment'}</span>
                </Link>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
};

export default AssessmentPage;
