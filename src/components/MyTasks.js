import React, { useState } from 'react';
import { FaCheckSquare, FaClock, FaPlay, FaCheckCircle, FaClipboardList } from 'react-icons/fa';
import '../styles/dashboard.css';

function MyTasks() {
  const [selectedFilter, setSelectedFilter] = useState('All Tasks');

  const taskCounts = {
    assigned: 5,
    inProgress: 2,
    completed: 3
  };

  return (
    <div className="my-tasks">
      <div className="tasks-header">
        <FaCheckSquare className="header-icon" />
        <h3>My Tasks</h3>
      </div>
      <div className="task-summary-cards">
        <div className="summary-card assigned-card">
          <FaClock className="card-icon" />
          <div className="card-content">
            <span className="card-label">Assigned / Pending</span>
            <span className="card-count">{taskCounts.assigned}</span>
          </div>
        </div>
        <div className="summary-card in-progress-card">
          <FaPlay className="card-icon" />
          <div className="card-content">
            <span className="card-label">In Progress</span>
            <span className="card-count">{taskCounts.inProgress}</span>
          </div>
        </div>
        <div className="summary-card completed-card">
          <FaCheckCircle className="card-icon" />
          <div className="card-content">
            <span className="card-label">Completed</span>
            <span className="card-count">{taskCounts.completed}</span>
          </div>
        </div>
      </div>
      <div className="filter-section">
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="filter-dropdown"
        >
          <option value="All Tasks">All Tasks</option>
          <option value="Assigned">Assigned</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div className="empty-state">
        <div className="empty-card">
          <FaClipboardList className="empty-icon" />
          <p>No tasks found for the selected filter</p>
        </div>
      </div>
    </div>
  );
}

export default MyTasks;
