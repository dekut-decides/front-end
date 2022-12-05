import "./Logout.css";

const LogoutNav = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location = "/";
    // window.location.reload();
  };
  return (
    <div  data-testid="logoutNav" className="main-container">
      <nav className="nav-bar">
        <h1>DEKUT DECIDES</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};
export default LogoutNav;
