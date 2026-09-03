import React from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  Server, 
  RefreshCw, 
  CheckCircle2, 
  AlertTriangle, 
  Clock, 
  Database, 
  Link2, 
  Award, 
  Users, 
  BookOpen, 
  Cpu, 
  Activity,
  Terminal,
  ShieldCheck
} from 'lucide-react';
import Badge from '../components/common/Badge';

export const IGOTConnectorPage = () => {
  const { syncStatus, isSyncing, syncLogs, triggerManualSync, currentUser } = useAuth();

  const channelIcons = {
    'BookOpen': BookOpen,
    'Users': Users,
    'Award': Award,
    'Cpu': Cpu,
    'Activity': Activity
  };

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      
      {/* Connector Header */}
      <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2">
              <Badge variant="purple" size="sm">
                <Link2 className="w-3 h-3 text-amber-300" />
                iGOT Karmayogi National Bridge
              </Badge>
              <span className="text-xs text-blue-300">• Mission Karmayogi Ecosystem</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              iGOT Karmayogi Connector & Live Telemetry
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              Synchronizes FRAC courses, cadre profile records, Parichay Single Sign-On authentications, and DigiLocker verifiable credentials in real-time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <button
              onClick={triggerManualSync}
              disabled={isSyncing}
              className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
              <span>{isSyncing ? 'Synchronizing Ecosystem...' : 'Trigger Full Manual Sync'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Connection State Bar */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-card grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
        <div className="space-y-1">
          <span className="text-slate-500 block">Master Connection Status</span>
          <div className="flex items-center gap-1.5 font-bold text-emerald-600 text-sm">
            <CheckCircle2 className="w-4 h-4" />
            <span>✓ Connected (iGOT v2.4)</span>
          </div>
        </div>
        <div className="space-y-1">
          <span className="text-slate-500 block">Ecosystem Health</span>
          <span className="font-bold text-slate-900 text-sm">{syncStatus.overallHealth} (Optimal)</span>
        </div>
        <div className="space-y-1">
          <span className="text-slate-500 block">Last Full Synchronization</span>
          <span className="font-bold text-slate-900 text-sm">{syncStatus.lastFullSync}</span>
        </div>
        <div className="space-y-1">
          <span className="text-slate-500 block">Parichay SSO Gateway</span>
          <span className="font-bold text-indigo-600 text-sm">✓ Active & Authenticated</span>
        </div>
      </div>

      {/* Sync Channels Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-base text-slate-900">Synchronized Ecosystem Channels</h3>
          <span className="text-xs text-slate-500 font-medium">5 Microservice Pipelines</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {syncStatus.syncChannels.map((ch) => {
            const Icon = channelIcons[ch.icon] || Server;
            const isSynced = ch.status === 'Synced';
            const isSyncingChan = ch.status === 'Syncing';

            return (
              <div
                key={ch.id}
                className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-card flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <Badge variant={isSynced ? 'success' : isSyncingChan ? 'primary' : 'warning'} size="sm">
                      {isSynced ? '✓ Synced' : isSyncingChan ? '⟳ In Progress' : '⚠ Pending'}
                    </Badge>
                  </div>

                  <h4 className="font-bold text-sm text-slate-900 leading-snug">{ch.name}</h4>
                  <p className="text-[11px] text-slate-500 mt-1">{ch.source}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100 text-xs">
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Synchronized:</span>
                    <strong className="text-slate-900">{ch.syncedRecords.toLocaleString()} / {ch.totalRecords.toLocaleString()}</strong>
                  </div>
                  <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-indigo-600 h-full rounded-full"
                      style={{ width: `${(ch.syncedRecords / ch.totalRecords) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                    <span>Pending: {ch.pendingRecords}</span>
                    <span>Updated: {ch.lastUpdated}</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Live Sync Audit Logs Console */}
      <div className="bg-slate-950 rounded-3xl p-6 shadow-2xl border border-slate-800 text-white space-y-4">
        
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <h3 className="font-bold text-sm text-white font-mono">Live Ecosystem Sync Logs (iGOT Telemetry)</h3>
          </div>
          <span className="text-[10px] text-slate-400 font-mono">Channel: TLSv1.3 Encrypted</span>
        </div>

        <div className="space-y-2 max-h-64 overflow-y-auto font-mono text-xs text-slate-300">
          {syncLogs.map((log, idx) => (
            <div key={idx} className="flex items-start gap-3 py-1 border-b border-slate-900/60">
              <span className="text-slate-500 shrink-0">[{log.timestamp}]</span>
              <span className={`font-bold shrink-0 ${
                log.status === 'SUCCESS' ? 'text-emerald-400' : 'text-amber-400 animate-pulse'
              }`}>
                [{log.status}]
              </span>
              <span className="text-slate-300 leading-relaxed">{log.event}</span>
            </div>
          ))}
        </div>

        <div className="pt-2 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-400">
          <span>Connected Endpoint: https://api.igotkarmayogi.gov.in/v2/delta</span>
          <span className="text-emerald-400">● 0 Sync Errors in 24h</span>
        </div>

      </div>

    </div>
  );
};

export default IGOTConnectorPage;
