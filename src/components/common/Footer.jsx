import React from 'react';
import { Shield, ExternalLink, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold">
                K
              </div>
              <span className="text-white font-bold text-base tracking-wide">Karmayogi AI</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              National AI-Powered Learning & Competency Acceleration Platform integrated with the iGOT Karmayogi ecosystem.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-slate-800/80 px-3 py-1.5 rounded-md border border-slate-700/60 w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>iGOT Karmayogi API: Online</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Platform Pages</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/learner" className="hover:text-indigo-400 transition-colors">Learner Dashboard</Link></li>
              <li><Link to="/recommendations" className="hover:text-indigo-400 transition-colors">AI Recommendations</Link></li>
              <li><Link to="/assessments" className="hover:text-indigo-400 transition-colors">Assessment Center</Link></li>
              <li><Link to="/progress" className="hover:text-indigo-400 transition-colors">Competency Passport</Link></li>
              <li><Link to="/courses/crs-ai-01" className="hover:text-indigo-400 transition-colors">Course Player</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">Roles & Administration</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/official" className="hover:text-indigo-400 transition-colors">Officials Dashboard</Link></li>
              <li><Link to="/admin" className="hover:text-indigo-400 transition-colors">Admin Management</Link></li>
              <li><Link to="/igot-connector" className="hover:text-indigo-400 transition-colors">iGOT Connector Hub</Link></li>
              <li><Link to="/profile" className="hover:text-indigo-400 transition-colors">User Profile & Badges</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-xs tracking-wider uppercase mb-4">National Ecosystem</h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center gap-1.5">
                <span>Mission Karmayogi Bharat</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </li>
              <li className="flex items-center gap-1.5">
                <span>Capacity Building Commission (CBC)</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </li>
              <li className="flex items-center gap-1.5">
                <span>DoPT, Govt. of India</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </li>
              <li className="flex items-center gap-1.5">
                <span>DigiLocker Credential Rail</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 Karmayogi AI Platform. Built for Digital India.</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Security Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">FRAC Competency Framework</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
