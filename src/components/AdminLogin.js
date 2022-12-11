import React from "react";
import "./AdminLogin.css";
import { Navigate,useNavigate, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import AdminLandingPage from "./AdminLandingPage";

function AdminLogin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "https://voting-dapp-api.onrender.com/AdminLogin";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("adminToken", res.data);
      const adminCredentials = localStorage.getItem("adminToken");
      console.log(adminCredentials); 
    
      if (adminCredentials) {
        return <Navigate to="/AdminLandingPage" />
        // window.location = "/AdminLandingPage";
      } else {
          return <Navigate to="/AdminLogin" />
        // window.location = "/AdminLogin";
      }
    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div data-testid="adminLogin">
      <div className="admin-login-container">
        <div className="admin-login-form-container">
          <form className="Admin-login-form" onSubmit={(e) => handleSubmit(e)}>
            <img
              src="/images/admin.png"
              alt="oops"
              width="80px"
              height="80px"
            />
            <div className="Admin-input-group">
              <input
                // className="admin-login-input"
                type="text"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
              />
              <label for="email">Email</label>
            </div>
            <div className="Admin-input-group">
              <input
                //className="admin-login-input"
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
              />
              <label for="password">password</label>
            </div>
            <button type="submit" className="admin-login-button">
              login
            </button>
          </form>
          <Routes>
            <Route path="/AdminLandingPage" element={<AdminLandingPage />} />
            <Route path="/AdminLogin" element={<AdminLogin />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default AdminLogin;
