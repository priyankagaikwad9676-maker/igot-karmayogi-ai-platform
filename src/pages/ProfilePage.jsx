import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  User, 
  Mail, 
  Building2, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Calendar, 
  Edit3, 
  Sparkles, 
  CheckCircle2,
  Lock,
  Download
} from 'lucide-react';
import Badge from '../components/common/Badge';
import Modal from '../components/common/Modal';

export const ProfilePage = () => {
  const { currentUser, currentRole, competencies, updateProfile } = useAuth();
  
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [name, setName] = useState(currentUser.name);
  const [designation, setDesignation] = useState(currentUser.designation);
  const [department, setDepartment] = useState(currentUser.department);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateProfile({ name, designation, department });
    setIsEditModalOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-fadeIn pb-12">
      
      {/* Profile Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-card relative overflow-hidden">
        
        {/* Top Gradient Banner */}
        <div className="h-32 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 relative">
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <Badge variant="purple" size="sm">
              <ShieldCheck className="w-3 h-3 text-amber-300" />
              Verified Govt Official
            </Badge>
          </div>
        </div>

        {/* Profile Avatar & Info Row */}
        <div className="relative flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 -mt-14 mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end gap-4">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-24 h-24 rounded-3xl object-cover ring-4 ring-white shadow-xl"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">{currentUser.name}</h1>
                <Badge variant="primary" size="sm" className="capitalize">{currentRole}</Badge>
              </div>
              <p className="text-xs font-semibold text-indigo-700">{currentUser.designation}</p>
              <p className="text-xs text-slate-500">{currentUser.department}</p>
            </div>
          </div>

          <button
            onClick={() => setIsEditModalOpen(true)}
            className="px-4 py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 self-start sm:self-auto"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Profile</span>
          </button>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-100 text-xs">
          <div className="space-y-1">
            <span className="text-slate-400 font-medium">Government Email:</span>
            <p className="font-bold text-slate-800">{currentUser.email}</p>
          </div>
          <div className="space-y-1">
            <span className="text-slate-400 font-medium">Cadre Service:</span>
            <p className="font-bold text-slate-800">{currentUser.cadre || 'General Central Service'}</p>
          </div>
          <div className="space-y-1">
            <span className="text-slate-400 font-medium">Civil Employee ID:</span>
            <p className="font-mono font-bold text-indigo-700">{currentUser.employeeId || 'GOI-88421'}</p>
          </div>
          <div className="space-y-1">
            <span className="text-slate-400 font-medium">Onboarding Date:</span>
            <p className="font-bold text-slate-800">{currentUser.joinedDate || '12 May 2022'}</p>
          </div>
        </div>

      </div>

      {/* Competency & Badges Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Competencies Acquired */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-bold text-sm text-slate-900">FRAC Competencies Endorsed</h3>
            <span className="text-xs text-indigo-600 font-bold">CBC Verified</span>
          </div>

          <div className="space-y-3">
            {competencies.slice(0, 5).map((comp) => (
              <div key={comp.id} className="p-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-800">{comp.name}</h4>
                  <span className="text-[10px] text-slate-400">{comp.type} Competency</span>
                </div>
                <div className="text-right">
                  <span className="font-bold text-emerald-700">{comp.score}% Score</span>
                  <p className="text-[10px] text-slate-500">Level {comp.currentLevel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Badges */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-bold text-sm text-slate-900">DigiLocker Digital Badges</h3>
            <span className="text-xs text-amber-600 font-bold">5 Issued</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            {[
              { name: "Public Procurement (GeM & GFR 2017)", code: "KY-GFR-8821", level: "Advanced" },
              { name: "RTI Act & Administrative Ethics", code: "KY-RTI-4412", level: "Expert" },
              { name: "CPGRAMS Citizen Centricity", code: "KY-CPG-9912", level: "Master" },
              { name: "Digital Public Infrastructure Core", code: "KY-DPI-7711", level: "Intermediate" }
            ].map((b, i) => (
              <div key={i} className="p-3.5 rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 space-y-2">
                <div className="flex items-center justify-between">
                  <Award className="w-5 h-5 text-indigo-600" />
                  <Badge variant="purple" size="sm">{b.level}</Badge>
                </div>
                <h4 className="font-bold text-slate-800 leading-snug">{b.name}</h4>
                <p className="font-mono text-[10px] text-slate-400">{b.code}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Edit Profile Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        title="Edit Civil Service Profile Information"
        maxWidth="max-w-md"
      >
        <form onSubmit={handleEditSubmit} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-700 block mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Designation</label>
            <input
              type="text"
              required
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Ministry / Department</label>
            <input
              type="text"
              required
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsEditModalOpen(false)}
              className="px-4 py-2 border border-slate-200 rounded-xl font-semibold text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md"
            >
              Save Profile
            </button>
          </div>
        </form>
      </Modal>

    </div>
  );
};

export default ProfilePage;
