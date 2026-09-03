import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Lock, 
  Mail, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2
} from 'lucide-react';
import Badge from '../components/common/Badge';
import Modal from '../components/common/Modal';

export const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [selectedRole, setSelectedRole] = useState('learner');
  const [email, setEmail] = useState('rajesh.sharma@gov.in');
  const [password, setPassword] = useState('GovIndia@2026');
  const [isForgotModalOpen, setIsForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotSent, setForgotSent] = useState(false);

  const rolePresets = {
    learner: {
      name: "Rajesh Sharma",
      email: "rajesh.sharma@gov.in",
      designation: "Section Officer (MeitY)",
      route: "/learner"
    },
    official: {
      name: "Dr. Priya Nair",
      email: "priya.nair@dopt.gov.in",
      designation: "Director of Training (DoPT)",
      route: "/official"
    },
    admin: {
      name: "Amitabh Verma",
      email: "admin.karmayogi@gov.in",
      designation: "Chief Platform Administrator",
      route: "/admin"
    }
  };

  const handleRoleSelect = (roleKey) => {
    setSelectedRole(roleKey);
    setEmail(rolePresets[roleKey].email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, selectedRole);
    navigate(rolePresets[selectedRole].route);
  };

  const handleForgotSubmit = (e) => {
    e.preventDefault();
    setForgotSent(true);
    setTimeout(() => {
      setForgotSent(false);
      setIsForgotModalOpen(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      
      <div className="max-w-md w-full bg-white rounded-3xl shadow-elevated border border-slate-200/80 overflow-hidden animate-fadeIn">
        
        {/* Card Header */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 p-6 text-white text-center relative">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-black text-xl mx-auto mb-3 shadow-lg shadow-indigo-500/30">
            K
          </div>
          <h2 className="text-xl font-bold text-white">Sign In to Karmayogi AI</h2>
          <p className="text-xs text-slate-300 mt-1">National Learning & Competency Portal</p>

          <div className="inline-flex items-center gap-1.5 mt-3 bg-indigo-500/20 border border-indigo-400/30 px-3 py-1 rounded-full text-[11px] text-indigo-300">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Role-Based Authentication</span>
          </div>
        </div>

        {/* Role Selection Tabs */}
        <div className="p-6 pb-2">
          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider block mb-2">
            Select Your Civil Service Role
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'learner', label: 'Learner', desc: 'Civil Servant' },
              { id: 'official', label: 'Official', desc: 'Manager / DoPT' },
              { id: 'admin', label: 'Admin', desc: 'System Lead' }
            ].map((r) => {
              const isSelected = selectedRole === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => handleRoleSelect(r.id)}
                  className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center gap-1 ${
                    isSelected 
                      ? 'bg-indigo-50 border-indigo-600 text-indigo-700 shadow-sm ring-1 ring-indigo-600' 
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span className="text-xs font-bold">{r.label}</span>
                  <span className="text-[10px] text-slate-400">{r.desc}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 pt-2 space-y-4">
          
          {/* Active Preset Pill */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between text-xs">
            <div>
              <p className="font-bold text-slate-800">{rolePresets[selectedRole].name}</p>
              <p className="text-[11px] text-slate-500">{rolePresets[selectedRole].designation}</p>
            </div>
            <Badge variant="primary" size="sm">1-Click Ready</Badge>
          </div>

          <div>
            <label className="text-xs font-semibold text-slate-700 block mb-1">Government Email / Username</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="name@gov.in"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-700">Password</label>
              <button
                type="button"
                onClick={() => setIsForgotModalOpen(true)}
                className="text-[11px] text-indigo-600 font-semibold hover:underline"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="••••••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <span>Sign In to {selectedRole.toUpperCase()} Workspace</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="text-center pt-2">
            <p className="text-[11px] text-slate-500">
              Or sign in using <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">Parichay / Jan Samarth Single Sign-On</span>
            </p>
          </div>

        </form>

      </div>

      {/* Forgot Password Modal */}
      <Modal
        isOpen={isForgotModalOpen}
        onClose={() => setIsForgotModalOpen(false)}
        title="Reset Government Account Password"
      >
        {forgotSent ? (
          <div className="text-center py-6 space-y-2">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-800 text-sm">Reset Link Sent</h4>
            <p className="text-xs text-slate-500">A secure reset token has been dispatched to {forgotEmail || email}.</p>
          </div>
        ) : (
          <form onSubmit={handleForgotSubmit} className="space-y-4">
            <p className="text-xs text-slate-600 leading-relaxed">
              Enter your registered @gov.in or @nic.in email address to receive password recovery instructions.
            </p>
            <div>
              <label className="text-xs font-semibold text-slate-700 block mb-1">Email Address</label>
              <input
                type="email"
                required
                value={forgotEmail || email}
                onChange={(e) => setForgotEmail(e.target.value)}
                className="w-full border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 bg-indigo-600 text-white font-bold text-xs rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Send Password Reset Link
            </button>
          </form>
        )}
      </Modal>

    </div>
  );
};

export default LoginPage;
