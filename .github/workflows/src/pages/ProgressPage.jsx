import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  TrendingUp, 
  Award, 
  Clock, 
  BookOpen, 
  CheckCircle2, 
  Sparkles, 
  Download, 
  Share2, 
  ExternalLink,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import Badge from '../components/common/Badge';
import Modal from '../components/common/Modal';
import CompetencyRadarChart from '../components/charts/CompetencyRadarChart';
import ProgressAreaChart from '../components/charts/ProgressAreaChart';
import { LEARNER_PROGRESS_METRICS } from '../data/mockData';

export const ProgressPage = () => {
  const { currentUser, competencies, courses, enrolledCourseIds } = useAuth();
  const [selectedCert, setSelectedCert] = useState(null);

  const completedList = courses.filter(c => c.progress === 100);
  const inProgressList = courses.filter(c => enrolledCourseIds.includes(c.id) && c.progress < 100);

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="purple" size="sm">
                <ShieldCheck className="w-3 h-3 text-amber-300" />
                National Competency Passport
              </Badge>
              <span className="text-xs text-indigo-300">• Civil List Verified</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Learning Progress & Competency Matrix
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Verified record of completed civil service modules, diagnostic scores, and FRAC level progression.
            </p>
          </div>

          <button
            onClick={() => setSelectedCert(LEARNER_PROGRESS_METRICS.completedCourses[0])}
            className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg transition-colors flex items-center gap-2 shrink-0 self-start sm:self-auto"
          >
            <Download className="w-4 h-4" />
            <span>Download Master Transcript</span>
          </button>
        </div>
      </div>

      {/* Top 4 Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
          <span className="text-xs font-semibold text-slate-500 block mb-1">Total Time Invested</span>
          <p className="text-2xl font-black text-slate-900">{currentUser.totalHoursLearned} Hours</p>
          <p className="text-[11px] text-emerald-600 font-medium mt-1">Across 8 Learning Modules</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
          <span className="text-xs font-semibold text-slate-500 block mb-1">Courses Completed</span>
          <p className="text-2xl font-black text-slate-900">{completedList.length} <span className="text-xs font-normal text-slate-400">/ {enrolledCourseIds.length}</span></p>
          <p className="text-[11px] text-indigo-600 font-medium mt-1">{inProgressList.length} Currently Active</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
          <span className="text-xs font-semibold text-slate-500 block mb-1">FRAC Competencies</span>
          <p className="text-2xl font-black text-slate-900">{currentUser.competenciesAchieved} <span className="text-xs font-normal text-slate-400">/ {currentUser.targetCompetencies}</span></p>
          <p className="text-[11px] text-purple-600 font-medium mt-1">75% Target Attainment</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
          <span className="text-xs font-semibold text-slate-500 block mb-1">Verified Badges</span>
          <p className="text-2xl font-black text-slate-900">{currentUser.certificatesCount}</p>
          <p className="text-[11px] text-amber-600 font-medium mt-1">DigiLocker Pushed</p>
        </div>
      </div>

      {/* Visual Analytics Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Monthly Hours Chart */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Learning Hours & Score Velocity</h3>
              <p className="text-xs text-slate-500">Continuous progression across 6 months</p>
            </div>
            <Badge variant="primary" size="sm">Monthly</Badge>
          </div>
          <ProgressAreaChart data={LEARNER_PROGRESS_METRICS.monthlyHours} />
        </div>

        {/* Competency Radar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-slate-900">FRAC Competency Spider Plot</h3>
              <p className="text-xs text-slate-500">Achieved vs Target levels across all 3 domains</p>
            </div>
            <Badge variant="purple" size="sm">FRAC Matrix</Badge>
          </div>
          <CompetencyRadarChart data={LEARNER_PROGRESS_METRICS.competencyRadar} />
        </div>

      </div>

      {/* Full Competencies List & Verified Certificates Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Detailed Competency Table (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-bold text-sm text-slate-900">Individual Competency Breakdown</h3>
            <span className="text-xs text-slate-500">8 Evaluated Dimensions</span>
          </div>

          <div className="space-y-3">
            {competencies.map((comp) => {
              const pct = comp.score;
              return (
                <div key={comp.id} className="p-3.5 rounded-2xl border border-slate-100 bg-slate-50/50 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant={comp.type === 'Behavioral' ? 'purple' : comp.type === 'Domain' ? 'primary' : 'success'} size="sm">
                        {comp.type}
                      </Badge>
                      <h4 className="font-bold text-xs text-slate-800">{comp.name}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-slate-900">{comp.score}%</span>
                      <span className="text-[10px] text-slate-500 ml-1.5">(Lvl {comp.currentLevel}/{comp.targetLevel})</span>
                    </div>
                  </div>

                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all ${
                        pct >= 85 ? 'bg-emerald-500' : pct >= 70 ? 'bg-indigo-600' : 'bg-amber-500'
                      }`}
                      style={{ width: `${pct}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Issued Certificates List (1 col) */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-bold text-sm text-slate-900">Verified Credentials</h3>
            <span className="text-xs text-indigo-600 font-bold">DigiLocker</span>
          </div>

          <div className="space-y-3">
            {LEARNER_PROGRESS_METRICS.completedCourses.map((c) => (
              <div key={c.id} className="p-3.5 rounded-2xl border border-slate-100 bg-slate-50/50 space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="success" size="sm">Verified</Badge>
                  <span className="text-[10px] text-slate-400">{c.completedDate}</span>
                </div>
                <h4 className="font-bold text-xs text-slate-800">{c.title}</h4>
                <div className="flex items-center justify-between pt-1 text-xs">
                  <span className="text-slate-500 font-mono text-[10px]">{c.certificateId}</span>
                  <button
                    onClick={() => setSelectedCert(c)}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
                  >
                    <span>View Badge</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Certificate Preview Modal */}
      <Modal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
        title="National Digital Verified Credential"
        maxWidth="max-w-2xl"
      >
        {selectedCert && (
          <div className="space-y-6 text-center p-2">
            
            {/* Certificate Frame */}
            <div className="border-4 border-double border-indigo-900/30 rounded-3xl p-8 bg-gradient-to-br from-amber-50/40 via-white to-indigo-50/40 shadow-inner relative">
              <div className="flex items-center justify-between border-b border-indigo-900/20 pb-4 mb-6 text-xs text-slate-600 font-semibold">
                <span>GOVERNMENT OF INDIA</span>
                <span>MISSION KARMAYOGI BHARAT</span>
              </div>

              <div className="w-16 h-16 rounded-2xl bg-indigo-950 text-amber-400 flex items-center justify-center font-black text-2xl mx-auto mb-4 shadow-md">
                K
              </div>

              <h2 className="text-xl font-extrabold text-slate-900 uppercase tracking-wider mb-1">
                Certificate of Competency
              </h2>
              <p className="text-xs text-slate-500 mb-6">This is to certify that</p>

              <h3 className="text-2xl font-black text-indigo-950 mb-2 border-b-2 border-indigo-600/30 inline-block px-4 pb-1">
                {currentUser.name}
              </h3>
              <p className="text-xs text-slate-600 mb-6">
                {currentUser.designation} • {currentUser.department}
              </p>

              <p className="text-xs text-slate-700 max-w-md mx-auto leading-relaxed mb-6">
                Has successfully demonstrated proficiency and achieved benchmark score in <span className="font-bold text-slate-900">{selectedCert.title}</span>.
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-indigo-900/20 text-xs">
                <div className="text-left">
                  <p className="font-mono text-[10px] text-slate-500">ID: {selectedCert.certificateId}</p>
                  <p className="text-[10px] text-emerald-600 font-bold">✓ Cryptographically Signed</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-slate-800">Capacity Building Commission</p>
                  <p className="text-[10px] text-slate-500">New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  alert("Certificate transcript downloaded as PDF!");
                  setSelectedCert(null);
                }}
                className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Save PDF to Device</span>
              </button>
              <button
                onClick={() => setSelectedCert(null)}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        )}
      </Modal>

    </div>
  );
};

export default ProgressPage;
