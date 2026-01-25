import React from 'react';
import "../styles/attendance.css";

function AttendanceHistory() {
  const attendanceData = [
    { date: 'Jan 23, 2026', checkIn: '10:40 AM', checkOut: '-', hoursWorked: '-', status: 'Active' },
    { date: 'Jan 21, 2026', checkIn: '10:07 AM', checkOut: '11:47 AM', hoursWorked: '1.6h', status: 'Completed' },
    { date: 'Jan 20, 2026', checkIn: '10:19 AM', checkOut: '02:21 PM', hoursWorked: '4.0h', status: 'Completed' },
    { date: 'Jan 19, 2026', checkIn: '09:59 AM', checkOut: '12:45 PM', hoursWorked: '2.8h', status: 'Completed' },
    { date: 'Jan 06, 2026', checkIn: '09:09 AM', checkOut: '11:10 AM', hoursWorked: '2.0h', status: 'Completed' },
  ];

  const exportToCSV = () => {
    const headers = ['Date', 'Check-in', 'Check-out', 'Hours Worked', 'Status'];
    const csvContent = [
      headers.join(','),
      ...attendanceData.map(row => [
        row.date,
        row.checkIn,
        row.checkOut,
        row.hoursWorked,
        row.status
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'attendance_history.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="attendance-history">
      <div className="attendance-header">
        <h2>Attendance History</h2>
        <button className="export-btn" onClick={exportToCSV}>Export CSV</button>
      </div>
      <table className="attendance-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Check-in</th>
            <th>Check-out</th>
            <th>Hours Worked</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.checkIn}</td>
              <td>{entry.checkOut}</td>
              <td>{entry.hoursWorked}</td>
              <td><span className={`status-btn ${entry.status.toLowerCase()}`}>{entry.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttendanceHistory;
