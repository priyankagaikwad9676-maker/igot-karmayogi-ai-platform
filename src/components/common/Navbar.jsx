import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  Bell, 
  Search, 
  User, 
  ChevronDown, 
  Sparkles, 
  LogOut, 
  Shield, 
  RefreshCw,
  CheckCircle2,
  Menu,
  X
} from 'lucide-react';
import Badge from './Badge';

export const Navbar = ({ toggleSidebar, isSidebarOpen }) => {
  const { currentRole, currentUser, switchRole, notification, isSyncing, triggerManualSync } = useAuth();
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isLandingPage = location.pathname === '/' || location.pathname === '/login';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      {/* Top micro-bar for Government branding */}
      <div className="bg-slate-900 text-slate-300 text-[11px] px-4 py-1 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-amber-400">भारत सरकार</span>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">Government of India • Capacity Building Commission</span>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={triggerManualSync}
            disabled={isSyncing}
            className="flex items-center gap-1.5 text-xs text-indigo-300 hover:text-white transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3 h-3 ${isSyncing ? 'animate-spin text-amber-400' : ''}`} />
            <span className="hidden sm:inline">{isSyncing ? 'Syncing with iGOT...' : 'iGOT Sync: Active'}</span>
          </button>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-emerald-400 font-medium hidden sm:flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Parichay SSO
          </span>
        </div>
      </div>

      {/* Main navigation header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Brand / Sidebar toggle */}
          <div className="flex items-center gap-3">
            {!isLandingPage && (
              <button
                onClick={toggleSidebar}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg lg:hidden"
                aria-label="Toggle menu"
              >
                {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            )}

            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-700 via-indigo-600 to-purple-600 flex items-center justify-center text-white font-extrabold shadow-md shadow-indigo-200 group-hover:scale-105 transition-transform">
                <span className="text-base tracking-tight">K</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-slate-900 text-base tracking-tight group-hover:text-indigo-600 transition-colors">
                    Karmayogi <span className="text-indigo-600">AI</span>
                  </span>
                  <Badge variant="purple" size="sm" className="hidden sm:inline-flex">
                    <Sparkles className="w-3 h-3 text-purple-600" />
                    iGOT
                  </Badge>
                </div>
                <span className="text-[10px] text-slate-500 font-medium tracking-wide">
                  National Competency & Learning Engine
                </span>
              </div>
            </Link>
          </div>

          {/* Quick Role Switcher (Crucial for Demo) */}
          <div className="hidden md:flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200/70">
            <span className="text-[11px] font-semibold text-slate-500 px-2 uppercase tracking-wider">Role:</span>
            {[
              { id: 'learner', label: 'Learner', path: '/learner' },
              { id: 'official', label: 'Official', path: '/official' },
              { id: 'admin', label: 'Admin', path: '/admin' }
            ].map((r) => {
              const isActive = currentRole === r.id;
              return (
                <button
                  key={r.id}
                  onClick={() => {
                    switchRole(r.id);
                    navigate(r.path);
                  }}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'bg-white text-indigo-700 shadow-sm border border-slate-200/60 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {r.label}
                </button>
              );
            })}
          </div>

          {/* Right Actions: Notifications, Search, User dropdown */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Notification button */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors relative"
                aria-label="Notifications"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-600 animate-ping"></span>
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-indigo-600"></span>
              </button>

              {/* Notification Popover */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 z-50 animate-fadeIn">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <h4 className="font-bold text-slate-800 text-sm">Notifications & Alerts</h4>
                    <span className="text-xs text-indigo-600 font-semibold cursor-pointer hover:underline">Mark all read</span>
                  </div>
                  <div className="divide-y divide-slate-100 max-h-64 overflow-y-auto mt-2">
                    <div className="py-2.5 flex gap-3 text-xs">
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">New AI Recommendation Available</p>
                        <p className="text-slate-500">"Generative AI for Governance" matches your current role profile (98% match).</p>
                        <span className="text-[10px] text-slate-400 mt-1 block">10 mins ago</span>
                      </div>
                    </div>
                    <div className="py-2.5 flex gap-3 text-xs">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                        <Shield className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">Mandatory Assessment Due</p>
                        <p className="text-slate-500">Cyber Resilience & DPDP Compliance Test scheduled by DoPT.</p>
                        <span className="text-[10px] text-slate-400 mt-1 block">2 hours ago</span>
                      </div>
                    </div>
                    <div className="py-2.5 flex gap-3 text-xs">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">iGOT Karmayogi Sync Success</p>
                        <p className="text-slate-500">Learning records synced to DigiLocker verifiable credentials repository.</p>
                        <span className="text-[10px] text-slate-400 mt-1 block">Yesterday</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* User Profile Pill */}
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 p-1 pl-2 bg-slate-50 hover:bg-slate-100 rounded-full border border-slate-200 transition-colors"
              >
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="w-8 h-8 rounded-full object-cover ring-2 ring-indigo-500/20"
                />
                <div className="hidden lg:flex flex-col text-left pr-1">
                  <span className="text-xs font-bold text-slate-800 leading-tight">{currentUser.name}</span>
                  <span className="text-[10px] text-slate-500 font-medium capitalize">{currentRole} • {currentUser.cadre ? currentUser.cadre.split(' ')[0] : 'Govt'}</span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-500 pr-1" />
              </button>

              {/* User Dropdown */}
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50 animate-fadeIn">
                  <div className="p-3 border-b border-slate-100 bg-slate-50/50 rounded-xl mb-1">
                    <p className="text-xs font-bold text-slate-800">{currentUser.name}</p>
                    <p className="text-[11px] text-slate-500 truncate">{currentUser.email}</p>
                    <p className="text-[10px] text-indigo-600 font-semibold mt-1">{currentUser.designation}</p>
                  </div>

                  <div className="space-y-1">
                    <Link
                      to="/profile"
                      onClick={() => setShowUserMenu(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <User className="w-4 h-4 text-slate-500" />
                      View Profile & Passport
                    </Link>
                    <Link
                      to="/igot-connector"
                      onClick={() => setShowUserMenu(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <RefreshCw className="w-4 h-4 text-slate-500" />
                      iGOT Connector Status
                    </Link>
                    <div className="border-t border-slate-100 my-1"></div>
                    <Link
                      to="/login"
                      onClick={() => setShowUserMenu(false)}
                      className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                    >
                      <LogOut className="w-4 h-4 text-rose-500" />
                      Switch Account / Logout
                    </Link>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

      {/* Global Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs font-medium px-4 py-3 rounded-xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-slideUp">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>{notification}</span>
        </div>
      )}
    </header>
  );
};

export default Navbar;
