import "./Logout.css";
import {  useNavigate } from "react-router-dom";

const LogoutNav = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    
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
