import React from 'react';
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';

export const CompetencyRadarChart = ({ data }) => {
  return (
    <div className="w-full h-72">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid stroke="#e2e8f0" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#475569', fontSize: 10, fontWeight: 600 }} 
          />
          <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#cbd5e1" tick={{ fontSize: 9 }} />
          <Radar 
            name="Achieved Level" 
            dataKey="achieved" 
            stroke="#4f46e5" 
            fill="#6366f1" 
            fillOpacity={0.4} 
          />
          <Radar 
            name="Target Cadre Requirement" 
            dataKey="target" 
            stroke="#f97316" 
            fill="#fb923c" 
            fillOpacity={0.15} 
          />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', borderRadius: '12px', border: 'none', color: '#fff', fontSize: '11px' }} 
          />
          <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CompetencyRadarChart;
