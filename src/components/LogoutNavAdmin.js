import "./logoutNavAdmin.css";

const LogoutNavAdmin = () => {
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location = "/";
    // window.location.reload();
  };
  return (
    <div data-testid="logoutNavAdmin" className="main-container">
      <nav className="nav-bar-admin">
        <h1>DEKUT DECIDES</h1>
        <button className="logout-btn-admin" onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};
export default LogoutNavAdmin;
