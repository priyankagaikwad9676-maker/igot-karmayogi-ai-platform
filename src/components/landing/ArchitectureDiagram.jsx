import React, { useState } from 'react';
import { 
  Users, 
  Layers, 
  Server, 
  Database, 
  Sparkles, 
  Link2, 
  Cpu, 
  CheckCircle2, 
  ArrowDown, 
  FileText, 
  Bot, 
  Activity,
  Zap
} from 'lucide-react';
import Badge from '../common/Badge';

export const ArchitectureDiagram = () => {
  const [activeNode, setActiveNode] = useState('ai');

  const nodes = {
    user: {
      title: "USER LAYER",
      subtitle: "Officials • Learners • Platform Admin",
      details: "Role-based contextual interfaces for civil servants across central & state cadres with Single Sign-On (Parichay/iGOT)."
    },
    frontend: {
      title: "REACT FRONTEND",
      subtitle: "UI • Dashboard • Interactive Player & Quiz Engine",
      details: "Vite + React 18, Tailwind CSS, Responsive Sidebars, Recharts data visualizations and real-time telemetry."
    },
    backend: {
      title: "NODE + EXPRESS API",
      subtitle: "REST APIs • Business Logic • Orchestration Rail",
      details: "High-throughput API gateway routing learning telemetry, role permissions, and assessment evaluation."
    },
    mongo: {
      title: "MONGODB (PRIMARY DATABASE)",
      subtitle: "Users, Roles, Assessments, Courses & Quiz Results",
      details: "NoSQL document persistence storing FRAC competency models, user logs, enrolled courses, and audit histories."
    },
    ai: {
      title: "AI SERVICES (INTELLIGENCE LAYER)",
      subtitle: "LLM + RAG • Vector Database • Smart Course Recommendations",
      details: "Retrieval-Augmented Generation connecting LLMs with government circulars, vector embeddings (Milvus/FAISS), and personalized course match algorithms (98%+ precision)."
    },
    igot: {
      title: "iGOT CONNECTOR",
      subtitle: "Integration with iGOT Karmayogi Ecosystem",
      details: "Live synchronization engine for Course Catalogs, Cadre Profiles, Learning Records, and DigiLocker Verifiable Credentials."
    }
  };

  return (
    <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800 relative overflow-hidden">
      {/* Background glow lines */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">System Architecture</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            AI-Powered Learning & Competency Platform Architecture
          </h3>
        </div>
        <Badge variant="purple" size="lg" className="self-start sm:self-auto">
          <Zap className="w-4 h-4 text-purple-400" />
          Interactive Schema
        </Badge>
      </div>

      {/* Interactive Diagram Canvas */}
      <div className="py-8 max-w-3xl mx-auto flex flex-col items-center space-y-4">
        
        {/* 1. USER */}
        <div 
          onClick={() => setActiveNode('user')}
          className={`w-full max-w-md p-4 rounded-2xl border transition-all cursor-pointer ${
            activeNode === 'user' 
              ? 'bg-purple-950/80 border-purple-500 shadow-lg shadow-purple-500/20 scale-102' 
              : 'bg-slate-900/90 border-slate-700 hover:border-slate-500'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-purple-200">USER</h4>
                <p className="text-xs text-slate-400">Officials / Learners / Admin</p>
              </div>
            </div>
            <Badge variant="purple" size="sm">Role-Aware</Badge>
          </div>
        </div>

        {/* Down Arrow */}
        <ArrowDown className="w-5 h-5 text-indigo-400 animate-bounce" />

        {/* 2. REACT FRONTEND */}
        <div 
          onClick={() => setActiveNode('frontend')}
          className={`w-full max-w-lg p-4 rounded-2xl border transition-all cursor-pointer ${
            activeNode === 'frontend' 
              ? 'bg-indigo-950/80 border-indigo-500 shadow-lg shadow-indigo-500/20 scale-102' 
              : 'bg-slate-900/90 border-slate-700 hover:border-slate-500'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-indigo-200">React Frontend</h4>
                <p className="text-xs text-slate-400">UI / Dashboard / Interaction</p>
              </div>
            </div>
            <Badge variant="primary" size="sm">React 18 + Vite</Badge>
          </div>
        </div>

        {/* Down Arrow */}
        <ArrowDown className="w-5 h-5 text-indigo-400" />

        {/* 3. NODE + EXPRESS API */}
        <div 
          onClick={() => setActiveNode('backend')}
          className={`w-full max-w-lg p-4 rounded-2xl border transition-all cursor-pointer ${
            activeNode === 'backend' 
              ? 'bg-emerald-950/80 border-emerald-500 shadow-lg shadow-emerald-500/20 scale-102' 
              : 'bg-slate-900/90 border-slate-700 hover:border-slate-500'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Server className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-emerald-200">Node + Express API</h4>
                <p className="text-xs text-slate-400">REST APIs / Business Logic</p>
              </div>
            </div>
            <Badge variant="success" size="sm">Microservices</Badge>
          </div>
        </div>

        {/* Down Arrow Split */}
        <ArrowDown className="w-5 h-5 text-indigo-400" />

        {/* 4. DUAL LAYER: MongoDB & AI Services */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* MongoDB Column */}
          <div 
            onClick={() => setActiveNode('mongo')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              activeNode === 'mongo' 
                ? 'bg-amber-950/40 border-amber-500 shadow-lg shadow-amber-500/20 scale-102' 
                : 'bg-slate-900/90 border-slate-700 hover:border-slate-500'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-bold text-xs text-amber-300">MongoDB</h5>
                <p className="text-[10px] text-slate-400">Primary Database</p>
              </div>
            </div>
            <div className="space-y-1 text-[11px] text-slate-300 pl-2">
              <p className="flex items-center gap-1.5">• Users, Roles & Profiles</p>
              <p className="flex items-center gap-1.5">• Assessments & Competencies</p>
              <p className="flex items-center gap-1.5">• Courses & Recommendations</p>
              <p className="flex items-center gap-1.5">• Quizzes, Results & Progress</p>
            </div>
          </div>

          {/* AI Services Column */}
          <div 
            onClick={() => setActiveNode('ai')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              activeNode === 'ai' 
                ? 'bg-purple-950/40 border-purple-500 shadow-lg shadow-purple-500/20 scale-102' 
                : 'bg-slate-900/90 border-slate-700 hover:border-slate-500'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-bold text-xs text-purple-300">AI Services</h5>
                <p className="text-[10px] text-slate-400">Intelligence Layer</p>
              </div>
            </div>
            <div className="space-y-1 text-[11px] text-slate-300 pl-2">
              <p className="flex items-center gap-1.5 text-indigo-300 font-medium">• LLM + RAG (Understanding & Generation)</p>
              <p className="flex items-center gap-1.5">• Vector Database (Embeddings / Context)</p>
              <p className="flex items-center gap-1.5">• Learning Recommendations</p>
              <p className="text-[10px] text-purple-400 pl-3">Personalized Course Suggestions</p>
            </div>
          </div>

        </div>

        {/* Down Arrow */}
        <ArrowDown className="w-5 h-5 text-indigo-400" />

        {/* 5. iGOT CONNECTOR */}
        <div 
          onClick={() => setActiveNode('igot')}
          className={`w-full max-w-xl p-4 rounded-2xl border transition-all cursor-pointer ${
            activeNode === 'igot' 
              ? 'bg-blue-950/80 border-blue-500 shadow-lg shadow-blue-500/20 scale-102' 
              : 'bg-slate-900/90 border-slate-700 hover:border-slate-500'
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Link2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-extrabold text-sm text-blue-200">iGOT Connector</h4>
                <p className="text-xs text-slate-400">Integration with iGOT Karmayogi Ecosystem</p>
              </div>
            </div>
            <div className="text-[10px] text-slate-300 grid grid-cols-2 gap-x-3 gap-y-0.5 border-t sm:border-t-0 sm:border-l border-slate-800 pt-2 sm:pt-0 sm:pl-3">
              <span>• Fetch Courses & Trainings</span>
              <span>• Sync User Progress</span>
              <span>• SSO / User Management</span>
              <span>• Learning Records Integration</span>
            </div>
          </div>
        </div>

      </div>

      {/* Node Info Box */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 text-xs mt-4">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-bold text-indigo-400">{nodes[activeNode].title}:</span>
          <span className="text-slate-300 font-semibold">{nodes[activeNode].subtitle}</span>
        </div>
        <p className="text-slate-400">{nodes[activeNode].details}</p>
      </div>

      {/* Slogan Banner */}
      <div className="text-center pt-6 mt-6 border-t border-slate-800/80">
        <p className="text-xs sm:text-sm font-extrabold tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 uppercase">
          INNOVATE TODAY, LEAD TOMORROW
        </p>
      </div>

    </div>
  );
};

export default ArchitectureDiagram;
