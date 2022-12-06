import React, { useEffect } from "react";
import "./VoterLogin.css";
import { Link, useNavigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import VoterLandingPage from "./VoterLandingPage";

function VoterLogin() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [myError, setMyError] = useState("");
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/VoterLogin";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      const voterCredentials = localStorage.getItem("token");
      if (voterCredentials) {
        window.location = "/VoterLandingPage";
      } else {
        window.location = "/VoterLogin";
      }
    } catch (error) {
      console.log(error);
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 400
      ) {
        setMyError(error.response.data.message);
        alert(myError);
      }
    }
  };
  return (



    <div data-testid="voterLogin" className="voter-login-container">
      <div className="voter-login-form-container">
        <form className="Voter-form" onSubmit={(e) => handleSubmit(e)}>

          <div className="Voter-input-group">
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
            />
            <label for="email">Email</label>
          </div>
          <div className="Voter-input-group">
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
            />
            <label for="password">password</label>
          </div>
          <button type="submit" className="voter-login-button">
            login
          </button>
        </form>
        <div className="redirect">
          <h1>Don't have an account?</h1>
          <Link to="/VoterSignUp">
            <button type="button" className="voter-login-button">
              Sign up
            </button>
          </Link>
        </div>
      </div>
      <Routes>
        <Route path="/VoterLandingPage" exact element={<VoterLandingPage />} />
      </Routes>
    </div>
  );
}

export default VoterLogin;
