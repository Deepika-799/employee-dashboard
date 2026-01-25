import AttendanceCard from "./AttendanceCard";
import WorkProgress from "./WorkProgress";
import "../styles/dashboard.css";

function Dashboard({ onProgressUpdate }) {
  return (
    <div className="dashboard">
      <div className="welcome-card">
        <h2>Welcome back, Kunkatla Sai Sri Naga Deepika!</h2>
        <p>Employee ID: EMP-LBNG-2025-045</p>
        <p>Today is saturday, January 24th, 2026</p>      </div>

      <AttendanceCard />

      <WorkProgress />
    </div>
  );
}

export default Dashboard;
