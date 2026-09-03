import React, { createContext, useContext, useState } from 'react';
import { USERS, COURSES, FRAC_COMPETENCIES, ASSESSMENTS, IGOT_SYNC_STATUS } from '../data/mockData';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentRole, setCurrentRole] = useState('learner');
  const [currentUser, setCurrentUser] = useState(USERS.learner);
  const [courses, setCourses] = useState(COURSES);
  const [competencies, setCompetencies] = useState(FRAC_COMPETENCIES);
  const [assessments, setAssessments] = useState(ASSESSMENTS);
  const [syncStatus, setSyncStatus] = useState(IGOT_SYNC_STATUS);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncLogs, setSyncLogs] = useState(IGOT_SYNC_STATUS.recentSyncLogs);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState(['crs-ai-01', 'crs-gem-02', 'crs-dpi-03', 'crs-ethics-06']);
  const [assignedTrainings, setAssignedTrainings] = useState([
    {
      id: "asgn-01",
      courseId: "crs-cyber-04",
      courseTitle: "Cyber Security Guidelines & DPDP Act Compliance in e-Governance",
      learnerCount: 42,
      deadline: "30 Sep 2026",
      assignedDate: "01 Sep 2026",
      assignedBy: "Dr. Priya Nair (DoPT)"
    }
  ]);
  const [notification, setNotification] = useState(null);

  const switchRole = (role) => {
    if (USERS[role]) {
      setCurrentRole(role);
      setCurrentUser(USERS[role]);
      showNotification(`Switched to ${role.toUpperCase()} mode (${USERS[role].name})`);
    }
  };

  const login = (email, password, role) => {
    const selectedRole = role || 'learner';
    setCurrentRole(selectedRole);
    setCurrentUser(USERS[selectedRole]);
    showNotification(`Welcome back, ${USERS[selectedRole].name}!`);
    return true;
  };

  const enrollCourse = (courseId) => {
    if (!enrolledCourseIds.includes(courseId)) {
      setEnrolledCourseIds(prev => [...prev, courseId]);
      setCourses(prev => prev.map(c => c.id === courseId ? { ...c, isEnrolled: true, progress: 0 } : c));
      showNotification("Enrolled in course successfully!");
    }
  };

  const updateCourseProgress = (courseId, progress) => {
    setCourses(prev => prev.map(c => c.id === courseId ? { ...c, progress } : c));
  };

  const recordAssessmentResult = (assessmentId, score) => {
    setAssessments(prev => prev.map(a => {
      if (a.id === assessmentId) {
        return {
          ...a,
          status: 'Completed',
          lastScore: score,
          completedAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
        };
      }
      return a;
    }));

    if (assessmentId === 'asm-ai-gov') {
      setCompetencies(prev => prev.map(comp => {
        if (comp.id === 'comp-6') {
          return { ...comp, score: Math.min(100, comp.score + 25), currentLevel: 4 };
        }
        return comp;
      }));
    }

    showNotification(`Assessment submitted! Score: ${score}%`);
  };

  const assignCourseToLearners = (courseId, learnerIds, deadline) => {
    const course = courses.find(c => c.id === courseId);
    const newAssignment = {
      id: "asgn-" + Date.now(),
      courseId,
      courseTitle: course ? course.title : "Mandatory Training Program",
      learnerCount: learnerIds.length,
      deadline: deadline || "15 Oct 2026",
      assignedDate: "Today",
      assignedBy: currentUser.name,
    };
    setAssignedTrainings([newAssignment, ...assignedTrainings]);
    showNotification(`Assigned training to ${learnerIds.length} civil service officials!`);
  };

  const triggerManualSync = () => {
    setIsSyncing(true);
    const newLog = {
      timestamp: new Date().toLocaleTimeString(),
      event: "Manual full delta sync initiated by " + currentUser.name,
      status: "IN_PROGRESS"
    };
    setSyncLogs(prev => [newLog, ...prev]);

    setTimeout(() => {
      setIsSyncing(false);
      const successLog = {
        timestamp: new Date().toLocaleTimeString(),
        event: "Manual Sync Successful: 450 courses & 1.4M cadre profiles synchronized",
        status: "SUCCESS"
      };
      setSyncLogs(prev => [successLog, ...prev]);
      showNotification("iGOT Karmayogi Connector synchronization completed!");
    }, 2000);
  };

  const showNotification = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 4000);
  };

  const updateProfile = (updatedFields) => {
    setCurrentUser(prev => ({ ...prev, ...updatedFields }));
    showNotification("Profile updated successfully!");
  };

  return (
    <AuthContext.Provider value={{
      currentRole,
      currentUser,
      switchRole,
      login,
      courses,
      enrolledCourseIds,
      enrollCourse,
      updateCourseProgress,
      competencies,
      assessments,
      recordAssessmentResult,
      assignedTrainings,
      assignCourseToLearners,
      syncStatus,
      isSyncing,
      syncLogs,
      triggerManualSync,
      notification,
      showNotification,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
