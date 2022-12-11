import "./logoutNavAdmin.css";
import {  useNavigate } from "react-router-dom";

const LogoutNavAdmin = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/");
    
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
