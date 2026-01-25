import React, { useState } from 'react';
import '../styles/workprogress.css';

function WorkProgress() {
  const [progressNote, setProgressNote] = useState('');

  return (
    <div className="work-progress">
      <div className="work-progress-header">
        <span className="header-icon">📄</span>
        <h3>Work Progress</h3>
      </div>

      <div className="progress-note">
        <label htmlFor="progress-note">What did you work on today?</label>
        <textarea
          id="progress-note"
          value={progressNote}
          onChange={(e) => setProgressNote(e.target.value)}
          placeholder="Describe your work progress..."
          rows="5"
        />
        <button className="add-progress-btn">Add Progress Note</button>
      </div>
    </div>
  );
}

export default WorkProgress;
