import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  ShieldAlert, 
  Users, 
  BookOpen, 
  Award, 
  Server, 
  Plus, 
  Search, 
  Edit3, 
  Trash2, 
  CheckCircle2, 
  XCircle, 
  Cpu,
  RefreshCw,
  Activity
} from 'lucide-react';
import Badge from '../components/common/Badge';
import Modal from '../components/common/Modal';
import { ADMIN_PLATFORM_METRICS } from '../data/mockData';

export const AdminDashboard = () => {
  const { currentUser, courses } = useAuth();

  const [activeTab, setActiveTab] = useState('users'); // 'users', 'courses', 'integrations'
  const [userList, setUserList] = useState(ADMIN_PLATFORM_METRICS.userManagement);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState('learner');
  const [newUserDept, setNewUserDept] = useState('Ministry of Finance');

  const filteredUsers = userList.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: "u-" + Date.now(),
      name: newUserName,
      email: newUserEmail,
      role: newUserRole,
      department: newUserDept,
      status: "Active",
      joined: "Today"
    };
    setUserList([newUser, ...userList]);
    setIsAddUserModalOpen(false);
    setNewUserName('');
    setNewUserEmail('');
  };

  const handleToggleStatus = (id) => {
    setUserList(prev => prev.map(u => {
      if (u.id === id) {
        return { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' };
      }
      return u;
    }));
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      
      {/* Admin Command Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge variant="purple" size="sm">
                <ShieldAlert className="w-3 h-3 text-amber-300" />
                National Platform Administration
              </Badge>
              <span className="text-xs text-indigo-300">• Capacity Building Commission</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Platform Master Admin & System Hub
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Manage nationwide civil service users, oversee course catalog metadata, monitor vector embedding nodes, and inspect microservice sync rails.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3.5 rounded-2xl border border-white/15 shrink-0">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></span>
            <div className="text-xs">
              <p className="font-bold text-white">System Health: 99.98%</p>
              <p className="text-slate-300 text-[10px]">All 5 API Rails Nominal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Top 4 Platform Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
          <span className="text-xs font-semibold text-slate-500 block mb-1">Total Registered Users</span>
          <p className="text-2xl font-black text-slate-900">1,428,500</p>
          <p className="text-[11px] text-emerald-600 font-medium mt-1">64,210 Active Today</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
          <span className="text-xs font-semibold text-slate-500 block mb-1">FRAC Course Catalog</span>
          <p className="text-2xl font-black text-slate-900">{ADMIN_PLATFORM_METRICS.overview.totalCourses}</p>
          <p className="text-[11px] text-indigo-600 font-medium mt-1">128 Active Assessments</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
          <span className="text-xs font-semibold text-slate-500 block mb-1">National Completion %</span>
          <p className="text-2xl font-black text-slate-900">{ADMIN_PLATFORM_METRICS.overview.completionRate}</p>
          <p className="text-[11px] text-purple-600 font-medium mt-1">Avg Diagnostic: 76.2%</p>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-card">
          <span className="text-xs font-semibold text-slate-500 block mb-1">DigiLocker Badges Issued</span>
          <p className="text-2xl font-black text-slate-900">942,300</p>
          <p className="text-[11px] text-amber-600 font-medium mt-1">Cryptographically Signed</p>
        </div>

      </div>

      {/* Admin Module Tabs */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-card space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
          <div className="flex items-center gap-2">
            {[
              { id: 'users', label: 'User Directory & Roles' },
              { id: 'courses', label: 'Course Catalog Management' },
              { id: 'integrations', label: 'API Rails & AI Nodes' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'users' && (
            <button
              onClick={() => setIsAddUserModalOpen(true)}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors flex items-center gap-1.5 self-start sm:self-auto"
            >
              <Plus className="w-4 h-4" />
              <span>Add Civil Service User</span>
            </button>
          )}
        </div>

        {/* Tab 1: User Directory */}
        {activeTab === 'users' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-4">
              <div className="relative w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search user, email, department..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <span className="text-xs text-slate-500 font-medium">{filteredUsers.length} Users Listed</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 border-b border-slate-200/80">
                    <th className="py-3 px-4 font-semibold">User Name & Email</th>
                    <th className="py-3 px-4 font-semibold">Department / Ministry</th>
                    <th className="py-3 px-4 font-semibold">System Role</th>
                    <th className="py-3 px-4 font-semibold">Account Status</th>
                    <th className="py-3 px-4 font-semibold">Registration Date</th>
                    <th className="py-3 px-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-800">
                        <p>{user.name}</p>
                        <p className="text-[11px] text-slate-400 font-normal">{user.email}</p>
                      </td>
                      <td className="py-3.5 px-4 font-medium text-slate-700">{user.department}</td>
                      <td className="py-3.5 px-4">
                        <Badge variant={user.role === 'admin' ? 'purple' : user.role === 'official' ? 'warning' : 'primary'} size="sm">
                          {user.role}
                        </Badge>
                      </td>
                      <td className="py-3.5 px-4">
                        <Badge variant={user.status === 'Active' ? 'success' : 'danger'} size="sm">
                          {user.status}
                        </Badge>
                      </td>
                      <td className="py-3.5 px-4 text-slate-500">{user.joined}</td>
                      <td className="py-3.5 px-4 text-right space-x-2">
                        <button
                          onClick={() => handleToggleStatus(user.id)}
                          className="px-2.5 py-1 text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-semibold transition-colors"
                        >
                          {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Course Management */}
        {activeTab === 'courses' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((c) => (
                <div key={c.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="purple" size="sm">{c.category}</Badge>
                      <span className="text-xs font-bold text-emerald-600">Published</span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900">{c.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{c.instructor} • {c.duration}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                    <span className="text-slate-500 font-medium">{c.enrolledCount.toLocaleString()} Enrolled</span>
                    <button 
                      onClick={() => alert("Editing course curriculum parameters...")}
                      className="text-xs font-bold text-indigo-600 hover:underline"
                    >
                      Edit Curriculum →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: API Rails & AI Nodes */}
        {activeTab === 'integrations' && (
          <div className="space-y-4">
            <div className="divide-y divide-slate-100">
              {ADMIN_PLATFORM_METRICS.systemIntegrations.map((item, idx) => (
                <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-sm text-slate-800">{item.name}</p>
                      <Badge variant="success" size="sm">✓ {item.status}</Badge>
                    </div>
                    <p className="text-slate-500 font-mono text-[11px]">{item.endpoint}</p>
                  </div>
                  <div className="flex items-center gap-4 text-slate-600 shrink-0">
                    <span>Latency: <strong className="text-indigo-600 font-mono">{item.latency}</strong></span>
                    <span>Last Sync: <strong>{item.lastSync}</strong></span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Add User Modal */}
      <Modal
        isOpen={isAddUserModalOpen}
        onClose={() => setIsAddUserModalOpen(false)}
        title="Register New Civil Service User"
        maxWidth="max-w-md"
      >
        <form onSubmit={handleAddUser} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-700 block mb-1">Full Name</label>
            <input
              type="text"
              required
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              placeholder="e.g. Smt. Gayatri Rao"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Government Email (@gov.in / @nic.in)</label>
            <input
              type="email"
              required
              value={newUserEmail}
              onChange={(e) => setNewUserEmail(e.target.value)}
              placeholder="gayatri.rao@gov.in"
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Assigned Role</label>
            <select
              value={newUserRole}
              onChange={(e) => setNewUserRole(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 font-medium"
            >
              <option value="learner">Learner (Civil Servant)</option>
              <option value="official">Official (Training / Dept Manager)</option>
              <option value="admin">Platform Admin</option>
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-700 block mb-1">Ministry / Department</label>
            <input
              type="text"
              required
              value={newUserDept}
              onChange={(e) => setNewUserDept(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsAddUserModalOpen(false)}
              className="px-4 py-2 border border-slate-200 rounded-xl font-semibold text-slate-600 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-md"
            >
              Create Account
            </button>
          </div>
        </form>
      </Modal>

    </div>
  );
};

export default AdminDashboard;
