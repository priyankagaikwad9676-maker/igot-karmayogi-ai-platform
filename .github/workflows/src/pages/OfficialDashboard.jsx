import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Users, 
  UserCheck, 
  TrendingUp, 
  Award, 
  BookOpen, 
  Plus, 
  Download, 
  Search, 
  Filter, 
  AlertTriangle, 
  CheckCircle2, 
  Shield, 
  FileSpreadsheet,
  Send
} from 'lucide-react';
import Badge from '../components/common/Badge';
import Modal from '../components/common/Modal';
import DepartmentBarChart from '../components/charts/DepartmentBarChart';
import { OFFICIAL_TEAM_DATA } from '../data/mockData';

export const OfficialDashboard = () => {
  const { currentUser, courses, assignCourseToLearners, assignedTrainings } = useAuth();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCadreFilter, setSelectedCadreFilter] = useState('all');
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [selectedCourseId, setSelectedCourseId] = useState('crs-cyber-04');
  const [selectedLearnerIds, setSelectedLearnerIds] = useState(['l-1', 'l-2', 'l-3', 'l-4', 'l-5', 'l-6']);
  const [assignmentDeadline, setAssignmentDeadline] = useState('2026-10-15');

  const filteredLearners = OFFICIAL_TEAM_DATA.learners.filter(l => {
    const matchesSearch = l.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          l.email.toLowerCase().includes(searchTerm.toLowerCase());
    if (selectedCadreFilter === 'all') return matchesSearch;
    return matchesSearch && l.cadre === selectedCadreFilter;
  });

  const handleAssignSubmit = (e) => {
    e.preventDefault();
    assignCourseToLearners(selectedCourseId, selectedLearnerIds, assignmentDeadline);
    setIsAssignModalOpen(false);
  };

  const handleExportReport = () => {
    alert("Department Capacity Building Audit Report exported successfully in CSV format!");
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      
      {/* Official Hub Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge variant="purple" size="sm">
                <Shield className="w-3 h-3 text-amber-300" />
                Officials & Supervisory Portal
              </Badge>
              <span className="text-xs text-indigo-300">• {currentUser.department}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Departmental Capacity & Training Dashboard
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Supervise assigned cadre officers, monitor statutory training compliance, identify team competency gaps, and dispatch mandatory learning orders.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => setIsAssignModalOpen(true)}
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-lg transition-colors flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              <span>Assign Mandatory Training</span>
            </button>
            <button
              onClick={handleExportReport}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs rounded-xl transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Export Audit Report</span>
            </button>
          </div>
        </div>
      </div>

      {/* Top Supervisory Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
          <span className="text-xs font-semibold text-slate-500 block mb-1">Assigned Civil Servants</span>
          <p className="text-2xl font-black text-slate-900">{currentUser.assignedLearnersCount} Officers</p>
          <p className="text-[11px] text-emerald-600 font-medium mt-1">Across 4 Central Cadres</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
          <span className="text-xs font-semibold text-slate-500 block mb-1">Compliance Rate</span>
          <p className="text-2xl font-black text-slate-900">{currentUser.departmentComplianceRate}%</p>
          <p className="text-[11px] text-indigo-600 font-medium mt-1">+4.2% over Q2 Target</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
          <span className="text-xs font-semibold text-slate-500 block mb-1">Active Programs</span>
          <p className="text-2xl font-black text-slate-900">{currentUser.activeTrainingPrograms}</p>
          <p className="text-[11px] text-purple-600 font-medium mt-1">FRAC Aligned Modules</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
          <span className="text-xs font-semibold text-slate-500 block mb-1">Pending Officer Reviews</span>
          <p className="text-2xl font-black text-amber-600">{currentUser.pendingApprovals}</p>
          <p className="text-[11px] text-amber-700 font-medium mt-1">Action Required</p>
        </div>

      </div>

      {/* Charts & Deficit Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Cadre Completion Chart (2 cols) */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-sm text-slate-900">Average Completion Rate by Cadre</h3>
              <p className="text-xs text-slate-500">Benchmark comparison across civil service streams</p>
            </div>
            <Badge variant="primary" size="sm">Cadre Metrics</Badge>
          </div>
          <DepartmentBarChart data={OFFICIAL_TEAM_DATA.cadreDistribution} />
        </div>

        {/* Competency Deficits Card (1 col) */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h3 className="font-bold text-sm text-slate-900">Cadre Competency Deficits</h3>
            <span className="text-xs text-rose-600 font-bold">Needs Training</span>
          </div>

          <div className="space-y-3">
            {OFFICIAL_TEAM_DATA.competencyDeficits.map((def, idx) => (
              <div key={idx} className="p-3 rounded-2xl border border-slate-100 bg-slate-50/60 space-y-1.5">
                <div className="flex items-center justify-between">
                  <Badge variant={def.priority === 'High' ? 'danger' : 'warning'} size="sm">
                    {def.priority} Deficit
                  </Badge>
                  <span className="text-xs font-bold text-rose-700">-{def.deficitPercent}% Gap</span>
                </div>
                <h4 className="font-bold text-xs text-slate-800 leading-snug">{def.competency}</h4>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Assigned Learners Table */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-4">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-slate-100">
          <div>
            <h3 className="font-bold text-base text-slate-900">Supervised Officers & Cadre Roster</h3>
            <p className="text-xs text-slate-500">Real-time progress monitoring and individual compliance records</p>
          </div>

          {/* Search & Filter */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search officer name..."
                className="bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="bg-slate-50/80 text-slate-500 border-b border-slate-200/60">
                <th className="py-3 px-4 font-semibold">Officer Name & Designation</th>
                <th className="py-3 px-4 font-semibold">Cadre</th>
                <th className="py-3 px-4 font-semibold">Overall Progress</th>
                <th className="py-3 px-4 font-semibold">Completed Modules</th>
                <th className="py-3 px-4 font-semibold">Status / Risk</th>
                <th className="py-3 px-4 font-semibold">Last Active</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredLearners.map((learner) => (
                <tr key={learner.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 px-4">
                    <p className="font-bold text-slate-900">{learner.name}</p>
                    <p className="text-[11px] text-slate-500">{learner.designation} • {learner.email}</p>
                  </td>
                  <td className="py-3.5 px-4">
                    <Badge variant="primary" size="sm">{learner.cadre}</Badge>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-800">{learner.progress}%</span>
                      <div className="w-20 bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${learner.progress}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-700">
                    {learner.completedCourses} / {learner.assignedCourses}
                  </td>
                  <td className="py-3.5 px-4">
                    <Badge variant={learner.risk === 'Low' ? 'success' : learner.risk === 'High' ? 'danger' : 'warning'} size="sm">
                      {learner.status}
                    </Badge>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    {learner.lastActive}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>

      {/* Assign Mandatory Course Modal */}
      <Modal
        isOpen={isAssignModalOpen}
        onClose={() => setIsAssignModalOpen(false)}
        title="Dispatch Mandatory Civil Service Training"
        maxWidth="max-w-xl"
      >
        <form onSubmit={handleAssignSubmit} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-700 block mb-1">Select Training Course</label>
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs text-slate-800 font-medium"
            >
              {courses.map(c => (
                <option key={c.id} value={c.id}>{c.title} ({c.duration})</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Target Cadre Officers</label>
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-1 text-slate-600">
              <p className="font-semibold text-slate-800">All 6 Supervised Central Secretariat & Technical Officers</p>
              <p className="text-[11px] text-slate-500">Automatic notification and iGOT learning record sync will be scheduled.</p>
            </div>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Mandatory Completion Deadline</label>
            <input
              type="date"
              required
              value={assignmentDeadline}
              onChange={(e) => setAssignmentDeadline(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsAssignModalOpen(false)}
              className="px-4 py-2 border border-slate-200 rounded-xl font-semibold text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Issue Mandatory Order</span>
            </button>
          </div>
        </form>
      </Modal>

    </div>
  );
};

export default OfficialDashboard;
