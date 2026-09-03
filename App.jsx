import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/common/Navbar';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';
import AIAssistantDrawer from './components/ai/AIAssistantDrawer';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import LearnerDashboard from './pages/LearnerDashboard';
import AIRecommendationsPage from './pages/AIRecommendationsPage';
import AssessmentPage from './pages/AssessmentPage';
import QuizPage from './pages/QuizPage';
import ProgressPage from './pages/ProgressPage';
import CourseDetailPage from './pages/CourseDetailPage';
import OfficialDashboard from './pages/OfficialDashboard';
import AdminDashboard from './pages/AdminDashboard';
import IGOTConnectorPage from './pages/IGOTConnectorPage';
import ProfilePage from './pages/ProfilePage';

export function AppContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const isPublicPage = location.pathname === '/' || location.pathname === '/login';

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-indigo-600 selection:text-white">
      
      {/* Navbar Header */}
      <Navbar 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        isSidebarOpen={isSidebarOpen} 
      />

      {/* Main Body with Sidebar Layout */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto">
        
        {/* Role-Aware Sidebar */}
        {!isPublicPage && (
          <Sidebar 
            isOpen={isSidebarOpen} 
            closeSidebar={() => setIsSidebarOpen(false)} 
          />
        )}

        {/* Dynamic Route Content */}
        <main className={`flex-1 p-4 sm:p-6 lg:p-8 ${isPublicPage ? 'w-full' : 'max-w-full overflow-x-hidden'}`}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            
            {/* Learner Routes */}
            <Route path="/learner" element={<LearnerDashboard />} />
            <Route path="/dashboard" element={<Navigate to="/learner" replace />} />
            <Route path="/recommendations" element={<AIRecommendationsPage />} />
            <Route path="/assessments" element={<AssessmentPage />} />
            <Route path="/quiz/:quizId" element={<QuizPage />} />
            <Route path="/quiz" element={<Navigate to="/assessments" replace />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/courses/:courseId" element={<CourseDetailPage />} />
            
            {/* Official Routes */}
            <Route path="/official" element={<OfficialDashboard />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminDashboard />} />
            
            {/* Ecosystem & Profile */}
            <Route path="/igot-connector" element={<IGOTConnectorPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>

      {/* Interactive AI Floating Assistant */}
      {!isPublicPage && <AIAssistantDrawer />}

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
