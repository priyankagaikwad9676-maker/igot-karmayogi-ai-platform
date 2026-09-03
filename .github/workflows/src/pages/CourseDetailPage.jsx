import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Play, 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Award, 
  Sparkles, 
  FileText, 
  Download, 
  Share2, 
  ChevronRight, 
  Pause,
  RotateCcw,
  Check,
  Send
} from 'lucide-react';
import Badge from '../components/common/Badge';

export const CourseDetailPage = () => {
  const { courseId } = useParams();
  const { courses, enrollCourse, enrolledCourseIds, updateCourseProgress } = useAuth();

  const course = courses.find(c => c.id === courseId) || courses[0];
  const isEnrolled = enrolledCourseIds.includes(course.id);

  const [activeModuleIdx, setActiveModuleIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userNote, setUserNote] = useState('');
  const [savedNotes, setSavedNotes] = useState([
    "Key Principle: RAG grounds LLM inferences with Section 4 Gazette notifications and circulars.",
    "Bhashini API supports real-time translation across 22 Scheduled Indian languages."
  ]);
  const [activeTab, setActiveTab] = useState('player'); // 'player', 'notes', 'resources'

  const handleToggleModule = (idx) => {
    setActiveModuleIdx(idx);
    setIsPlaying(true);
  };

  const handleSaveNote = (e) => {
    e.preventDefault();
    if (!userNote.trim()) return;
    setSavedNotes([userNote, ...savedNotes]);
    setUserNote('');
  };

  const handleMarkCompleted = (idx) => {
    const updatedModules = [...course.modules];
    updatedModules[idx].completed = true;
    const completedCount = updatedModules.filter(m => m.completed).length;
    const newProgress = Math.round((completedCount / updatedModules.length) * 100);
    updateCourseProgress(course.id, newProgress);
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      
      {/* Course Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="purple" size="sm">{course.category}</Badge>
            <Badge variant="success" size="sm">FRAC Aligned</Badge>
            <span className="text-xs text-slate-300">• {course.duration}</span>
            <span className="text-xs text-slate-300">• {course.difficulty}</span>
          </div>

          <h1 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
            {course.title}
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {course.description}
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-300">
            <span>Instructor: <strong className="text-white">{course.instructor}</strong></span>
            <span>Enrolled: <strong className="text-white">{course.enrolledCount.toLocaleString()} Officials</strong></span>
            <span>Rating: <strong className="text-amber-300">★ {course.rating} / 5.0</strong></span>
          </div>
        </div>
      </div>

      {/* Main Grid: Player & Syllabus */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left 2 Cols: Player, Tabs, Notes, Resources */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Video / Interactive Player Simulator */}
          <div className="bg-slate-950 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
            
            {/* Player Screen */}
            <div className="relative aspect-video bg-gradient-to-tr from-slate-950 via-slate-900 to-indigo-950 flex flex-col items-center justify-center p-6 text-center text-white">
              
              <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-xs border border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Module {activeModuleIdx + 1}: {course.modules[activeModuleIdx]?.title}</span>
              </div>

              <div className="space-y-3 max-w-md">
                <div 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-16 h-16 rounded-full bg-indigo-600/90 hover:bg-indigo-500 text-white flex items-center justify-center mx-auto cursor-pointer shadow-xl hover:scale-110 transition-all ring-8 ring-indigo-500/20"
                >
                  {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 fill-current ml-1" />}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-white">
                  {isPlaying ? 'Playing High-Definition Stream' : 'Click Play to Begin Interactive Lecture'}
                </h3>
                <p className="text-xs text-slate-400">
                  Includes real-time speech translation in 22 languages powered by Digital India Bhashini.
                </p>
              </div>

              {/* Player Bottom Bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 to-transparent p-4 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <span className="text-slate-300">12:45 / {course.modules[activeModuleIdx]?.duration}</span>
                </div>
                <button
                  onClick={() => handleMarkCompleted(activeModuleIdx)}
                  className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-lg flex items-center gap-1.5 transition-colors"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Mark Module Done</span>
                </button>
              </div>

            </div>

            {/* Player Tabs: Overview, Notes, Resources */}
            <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center gap-2">
              {[
                { id: 'player', label: 'Learning Overview' },
                { id: 'notes', label: 'Civil Service Notes' },
                { id: 'resources', label: 'Government Circulars (PDF)' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                    activeTab === tab.id
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

          </div>

          {/* Tab Contents */}
          {activeTab === 'player' && (
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-4">
              <h3 className="font-bold text-base text-slate-900">Skills & Competencies Gained</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.skillsGained.map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'notes' && (
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-4">
              <h3 className="font-bold text-base text-slate-900">My Course Notes & Case References</h3>
              
              <form onSubmit={handleSaveNote} className="flex gap-2">
                <input
                  type="text"
                  value={userNote}
                  onChange={(e) => setUserNote(e.target.value)}
                  placeholder="Add note on policy clause, circular number, or rule..."
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white font-bold text-xs rounded-xl hover:bg-indigo-700 transition-colors flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Save Note</span>
                </button>
              </form>

              <div className="space-y-2 pt-2">
                {savedNotes.map((n, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 leading-relaxed">
                    {n}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-3">
              <h3 className="font-bold text-base text-slate-900">Reference Gazette & Circular Downloads</h3>
              {[
                { name: "DoPT Official Order on Generative AI Utilization (PDF)", size: "1.4 MB" },
                { name: "MeitY Guidelines on Bhashini & Multi-Lingual Bots (PDF)", size: "2.8 MB" },
                { name: "Capacity Building Commission FRAC Model Rulebook (PDF)", size: "4.1 MB" }
              ].map((res, i) => (
                <div key={i} className="p-3.5 rounded-xl border border-slate-100 flex items-center justify-between text-xs bg-slate-50/60">
                  <div className="flex items-center gap-2.5">
                    <FileText className="w-4 h-4 text-indigo-600" />
                    <div>
                      <p className="font-bold text-slate-800">{res.name}</p>
                      <span className="text-[10px] text-slate-400">{res.size}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => alert("Downloading official gazette document...")}
                    className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Right 1 Col: Course Syllabus Accordion & Progress */}
        <div className="space-y-6">
          
          {/* Progress & Enrollment Widget */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-sm text-slate-900">Course Completion</h3>
              <span className="text-sm font-black text-indigo-600">{course.progress}%</span>
            </div>

            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-indigo-600 h-full rounded-full transition-all" 
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>

            {!isEnrolled ? (
              <button
                onClick={() => enrollCourse(course.id)}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors"
              >
                Enroll in this Course
              </button>
            ) : (
              <Link
                to="/assessments"
                className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Award className="w-4 h-4" />
                <span>Take Certification Assessment</span>
              </Link>
            )}
          </div>

          {/* Module Syllabus List */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h3 className="font-bold text-sm text-slate-900">Curriculum Syllabus</h3>
              <span className="text-xs text-slate-500">{course.modules.length} Modules</span>
            </div>

            <div className="space-y-2.5">
              {course.modules.map((mod, idx) => {
                const isActive = activeModuleIdx === idx;

                return (
                  <button
                    key={mod.id}
                    onClick={() => handleToggleModule(idx)}
                    className={`w-full text-left p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 text-xs ${
                      isActive
                        ? 'bg-indigo-50/90 border-indigo-600 text-indigo-950 font-bold shadow-xs'
                        : 'bg-slate-50/50 border-slate-100 text-slate-700 hover:bg-slate-100/80'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden">
                      {mod.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : (
                        <span className="w-4 h-4 rounded-full border border-slate-300 shrink-0"></span>
                      )}
                      <span className="truncate">{mod.title}</span>
                    </div>
                    <span className="text-[10px] text-slate-400 shrink-0">{mod.duration}</span>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default CourseDetailPage;
