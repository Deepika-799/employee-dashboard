import React from 'react';
import "../styles/attendance.css";

function ProgressHistory({ progressNotes }) {
  const exportToCSV = () => {
    const headers = ['Date', 'Progress Description'];
    const csvContent = [
      headers.join(','),
      ...progressNotes.map(note => [
        note.date,
        `"${note.progressDescription}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'progress_history.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="attendance-history">
      <div className="attendance-header">
        <h2>Progress History</h2>
        <button className="export-btn" onClick={exportToCSV}>Export CSV</button>
      </div>
      {progressNotes.length === 0 ? (
        <div className="no-records">
          <p>No progress records found</p>
          <small>Add progress notes from the dashboard to track your work</small>
        </div>
      ) : (
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Progress Description</th>
            </tr>
          </thead>
          <tbody>
            {progressNotes.map((note, index) => (
              <tr key={note.id}>
                <td>{note.date}</td>
                <td>{note.progressDescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ProgressHistory;
