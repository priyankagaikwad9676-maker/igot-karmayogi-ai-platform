import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  LayoutDashboard,
  Sparkles,
  BookOpen,
  Award,
  TrendingUp,
  Users,
  ShieldAlert,
  Server,
  UserCheck,
  CheckCircle2,
  FileText,
  Compass,
  Zap,
  HelpCircle
} from 'lucide-react';
import Badge from './Badge';

export const Sidebar = ({ isOpen, closeSidebar }) => {
  const { currentRole, currentUser } = useAuth();
  const location = useLocation();

  const isLanding = location.pathname === '/' || location.pathname === '/login';
  if (isLanding) return null;

  const navItems = [
    // Learner routes
    { to: '/learner', label: 'Learner Dashboard', icon: LayoutDashboard, roles: ['learner', 'official', 'admin'], highlight: false },
    { to: '/recommendations', label: 'AI Recommendations', icon: Sparkles, roles: ['learner', 'official', 'admin'], highlight: true },
    { to: '/courses/crs-ai-01', label: 'Course Catalog & Player', icon: BookOpen, roles: ['learner', 'official', 'admin'], highlight: false },
    { to: '/assessments', label: 'Assessment Hub', icon: Award, roles: ['learner', 'official', 'admin'], highlight: false },
    { to: '/progress', label: 'Competency Passport', icon: TrendingUp, roles: ['learner', 'official', 'admin'], highlight: false },

    // Official routes
    { to: '/official', label: 'Officials Hub & Roster', icon: Users, roles: ['official', 'admin'], highlight: false },

    // Admin routes
    { to: '/admin', label: 'Admin Command Center', icon: ShieldAlert, roles: ['admin'], highlight: false },
    { to: '/igot-connector', label: 'iGOT Ecosystem Sync', icon: Server, roles: ['learner', 'official', 'admin'], highlight: false },
    
    // Common
    { to: '/profile', label: 'Profile & Credentials', icon: UserCheck, roles: ['learner', 'official', 'admin'], highlight: false },
  ];

  const filteredItems = navItems.filter(item => item.roles.includes(currentRole));

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div 
          onClick={closeSidebar}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs z-30 lg:hidden"
        />
      )}

      <aside className={`
        fixed lg:sticky top-0 lg:top-[97px] left-0 h-screen lg:h-[calc(100vh-97px)] w-64 bg-white border-r border-slate-200/80 z-40 transition-transform duration-300 ease-in-out flex flex-col justify-between p-4
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        
        {/* Navigation list */}
        <div className="space-y-6 overflow-y-auto">
          
          {/* User badge pill */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-3.5 text-white shadow-md">
            <div className="flex items-center gap-3 mb-2">
              <img src={currentUser.avatar} alt={currentUser.name} className="w-10 h-10 rounded-xl object-cover ring-2 ring-indigo-400/50" />
              <div className="overflow-hidden">
                <p className="text-xs font-bold truncate text-white">{currentUser.name}</p>
                <p className="text-[10px] text-indigo-300 truncate capitalize">{currentRole} Mode</p>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px]">
              <span className="text-slate-400">Department</span>
              <span className="font-semibold text-slate-200 truncate max-w-[120px]">{currentUser.department ? currentUser.department.split(' ')[0] : 'DoPT'}</span>
            </div>
          </div>

          {/* Navigation group */}
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 mb-2">
              Platform Modules
            </div>
            <nav className="space-y-1">
              {filteredItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={closeSidebar}
                    className={({ isActive }) => `
                      flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all group
                      ${isActive 
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100 font-bold' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                      }
                    `}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                      <span>{item.label}</span>
                    </div>
                    {item.highlight && (
                      <span className="text-[9px] bg-amber-400 text-slate-900 font-extrabold px-1.5 py-0.5 rounded uppercase">
                        AI
                      </span>
                    )}
                  </NavLink>
                );
              })}
            </nav>
          </div>

        </div>

        {/* Sidebar Footer / iGOT status card */}
        <div className="pt-4 border-t border-slate-100">
          <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/70">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-bold text-slate-700">iGOT Karmayogi Link</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            </div>
            <p className="text-[10px] text-slate-500 mb-2">Real-time sync active (FRAC Matrix v4)</p>
            <NavLink
              to="/igot-connector"
              className="text-[10px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1"
            >
              <span>View Sync Health</span>
              <span>→</span>
            </NavLink>
          </div>
        </div>

      </aside>
    </>
  );
};

export default Sidebar;
