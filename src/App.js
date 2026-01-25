import React, { useState } from 'react';
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import AttendanceHistory from "./components/AttendanceHistory";
import ProgressHistory from "./components/ProgressHistory";
import MyTasks from "./components/MyTasks";
import Footer from "./components/Footer";

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [progressNotes, setProgressNotes] = useState([]);

  const renderMainContent = () => {
    switch (currentView) {
      case 'settings':
        return <Settings />;
      case 'my-profile':
        return <Profile />;
      case 'attendance-history':
        return <AttendanceHistory />;
      case 'progress-history':
        return <ProgressHistory progressNotes={progressNotes} />;
      case 'my-tasks':
        return <MyTasks />;
      case 'dashboard':
      default:
        return (
          <>
            <Header />
            <Dashboard onProgressUpdate={setProgressNotes} />
          </>
        );
    }
  };

  return (
    <div className="app">
      <Sidebar onNavigate={setCurrentView} currentView={currentView} isOpen={isSidebarOpen} onToggle={() => setIsSidebarOpen(!isSidebarOpen)} progressNotes={progressNotes} />
      <div className={`main-content ${isSidebarOpen ? '' : 'sidebar-closed'}`}>
        <div className="content-area">
          {renderMainContent()}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
