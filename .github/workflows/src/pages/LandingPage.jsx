import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Award, 
  TrendingUp, 
  BookOpen, 
  Server, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Users, 
  Cpu,
  Compass,
  FileCheck2,
  ExternalLink
} from 'lucide-react';
import Badge from '../components/common/Badge';
import ArchitectureDiagram from '../components/landing/ArchitectureDiagram';

export const LandingPage = () => {
  const featureCards = [
    {
      title: "Personalized Learning",
      icon: BookOpen,
      color: "from-blue-600 to-indigo-600",
      description: "Tailored learning journeys designed for central, state, and local civil service cadres, aligned with FRAC competency matrices.",
      points: ["Adaptive pace", "Role-mapped syllabi", "Micro-learning modules"]
    },
    {
      title: "Competency Assessment",
      icon: Award,
      color: "from-purple-600 to-indigo-600",
      description: "Standardized evaluation engine measuring Behavioral, Functional, and Domain competencies with instant diagnostic scoring.",
      points: ["FRAC alignment", "Diagnostic benchmarks", "Verifiable digital badges"]
    },
    {
      title: "AI Recommendations",
      icon: Sparkles,
      color: "from-indigo-600 to-pink-600",
      description: "Semantic vector search and RAG algorithms identifying individual skill gaps and suggesting high-impact learning interventions.",
      points: ["Vector embeddings", "Skill gap analysis", "98%+ match precision"]
    },
    {
      title: "Progress Tracking",
      icon: TrendingUp,
      color: "from-emerald-600 to-teal-600",
      description: "Real-time telemetry and competency growth radars tracking completion velocity, compliance metrics, and learning passports.",
      points: ["Competency radar plots", "Audit-ready logs", "Time investment analytics"]
    },
    {
      title: "iGOT Integration",
      icon: Server,
      color: "from-amber-600 to-orange-600",
      description: "Seamless two-way bridge with iGOT Karmayogi, Parichay Single Sign-On, and DigiLocker verifiable credentials repository.",
      points: ["Automated course sync", "Parichay SSO", "DigiLocker certificate rail"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 bg-indigo-900/60 border border-indigo-400/30 px-3.5 py-1.5 rounded-full text-indigo-300 text-xs font-semibold mb-6 shadow-inner animate-fadeIn">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-spin" />
            <span>Integrated with iGOT Karmayogi • Mission Karmayogi Bharat</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            AI-Powered Learning & <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              Competency Platform
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-base lg:text-lg mb-10 leading-relaxed">
            Empowering 1.4+ Million Civil Servants with next-generation adaptive training, 
            FRAC competency gap diagnosis, RAG-driven policy intelligence, and synchronized iGOT records.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/learner"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm rounded-xl shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2"
            >
              <span>Get Started as Learner</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/login"
              className="w-full sm:w-auto px-8 py-3.5 bg-slate-800/80 hover:bg-slate-700/80 text-white border border-slate-700 font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <span>Platform Login & Role Access</span>
            </Link>
          </div>

          {/* Stats strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-800/80">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-indigo-400">1.42M+</p>
              <p className="text-xs text-slate-400 mt-0.5">Enrolled Officials</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-purple-400">450+</p>
              <p className="text-xs text-slate-400 mt-0.5">FRAC Courses</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-emerald-400">98.4%</p>
              <p className="text-xs text-slate-400 mt-0.5">AI Match Accuracy</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-amber-400">&lt;50ms</p>
              <p className="text-xs text-slate-400 mt-0.5">iGOT Sync Latency</p>
            </div>
          </div>

        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Badge variant="primary" size="md" className="mb-3">Core Pillars</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Transforming Civil Service Capability Building
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Integrated architecture bridging capacity building commissions, ministry requirements, and individual career roadmaps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${feat.color} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2">{feat.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{feat.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  {feat.points.map((pt, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Quick Start Card */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-2xl p-6 text-white shadow-xl flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-300 flex items-center justify-center mb-4 border border-amber-400/30">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">Explore Interactive Features</h3>
              <p className="text-xs text-indigo-200 leading-relaxed mb-4">
                Test the AI recommendation engine, interactive timed quiz, or official supervisory rosters with mock data.
              </p>
            </div>
            <Link
              to="/login"
              className="w-full py-2.5 bg-white text-indigo-950 font-bold text-xs rounded-xl hover:bg-slate-100 transition-colors text-center shadow-md"
            >
              Try Quick Demo Login →
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive System Architecture Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <Badge variant="purple" size="md" className="mb-2">System Blueprint</Badge>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            End-to-End Technology Stack
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Click on any layer below to inspect component responsibilities and data flow.
          </p>
        </div>

        <ArchitectureDiagram />
      </section>

    </div>
  );
};

export default LandingPage;
