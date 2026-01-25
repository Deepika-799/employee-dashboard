import "../styles/attendance.css";

function AttendanceCard() {
  return (
    <div className="attendance">
      <h3>Today's Attendance</h3>

      <div className="buttons">
        <button className="checkin">Check In</button>
        <button className="checkout">Check Out</button>
      </div>

      <label className="consent">
        <input type="checkbox" /> Allow activity-based time tracking
      </label>

      <div className="break-buttons">
        <button className="break">Start Break</button>
        <button className="end-break">End Break</button>
      </div>
    </div>
  );
}

export default AttendanceCard;
