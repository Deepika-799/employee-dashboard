import React from 'react';
import { FaTachometerAlt, FaCog, FaHistory, FaTasks, FaUser, FaChevronLeft, FaChevronRight, FaSignOutAlt, FaChartLine } from 'react-icons/fa';
import '../styles/sidebar.css';

function Sidebar({ onNavigate, currentView, isOpen, onToggle, progressNotes }) {
  return (
    <div className={`sidebar ${!isOpen ? 'closed' : ''}`}>
      <button className="sidebar-toggle" onClick={onToggle}>
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>
      <div className="logo-container">
        <img src="/logo.png" alt="Logo" className="logo" />
        {isOpen && <span className="logo-text">NextGen Life Box</span>}
      </div>

      {isOpen && (
        <div className="profile-card">
          <div className="avatar">KS</div>
          <div className="name">Kunkatla Sai Sri Naga Deepika</div>
          <div className="role">Employee</div>
        </div>
      )}



      <ul className="menu">
        <li className={currentView === 'dashboard' ? 'active' : ''} onClick={() => onNavigate('dashboard')}><FaTachometerAlt /> {isOpen && 'Dashboard'}</li>
        <li className={currentView === 'attendance-history' ? 'active' : ''} onClick={() => onNavigate('attendance-history')}><FaHistory /> {isOpen && 'Attendance History'}</li>
        <li className={currentView === 'progress-history' ? 'active' : ''} onClick={() => onNavigate('progress-history')}><FaChartLine /> {isOpen && 'Progress History'}</li>
        <li className={currentView === 'my-tasks' ? 'active' : ''} onClick={() => onNavigate('my-tasks')}><FaTasks /> {isOpen && 'My Tasks'}</li>
        <li className={currentView === 'my-profile' ? 'active' : ''} onClick={() => onNavigate('my-profile')}><FaUser /> {isOpen && 'My Profile'}</li>
        <li className={currentView === 'settings' ? 'active' : ''} onClick={() => onNavigate('settings')}><FaCog /> {isOpen && 'Settings'}</li>
        <li onClick={() => alert('Logout functionality not implemented yet')}><FaSignOutAlt /> {isOpen && 'Logout'}</li>
      </ul>
    </div>
  );
}

export default Sidebar;
