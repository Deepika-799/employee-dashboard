import "../styles/header.css";

function Header() {
  return (
    <div className="header">
      <div>
        <h2>Dashboard</h2>
        <p>Monday, January 19, 2026</p>
      </div>

      <div className="status">
        <span className="online-dot"></span>
        Online
      </div>
    </div>
  );
}

export default Header;
