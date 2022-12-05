import React from "react";
import "./VoterSignUp.css";
import { Link, useNavigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import VoterLogin from "./VoterLogin";
import HomePage from "./HomePage";

function VoterSignUp() {
  const [data, setData] = useState({
    regNumber: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [myError, setMyError] = useState("");
  const [signed, setSigned] = useState(false);

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8000/VoterSignUp";
      const { data: res } = await axios.post(url, data);
      setSigned(true);
      navigate("/VoterLogin");
    } catch (error) {
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
    <div data-testid="voterSignUp">
      <div className="voter-signup-container">
        <div className="voter-signup-form-container">
          <form className="Voter-signup-form" onSubmit={(e) => handleSubmit(e)}>
            <img
              src="/images/user signup.png"
              alt="oops"
              width="80px"
              height="80px"
            />
            <div className="Voter-input-group">
              <input
                id="reg"
                type="text"
                name="regNumber"
                onChange={handleChange}
                value={data.regNumber}
                required
              />
              <label for="reg">Registration Number</label>
            </div>
            <div className="Voter-input-group">
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={data.email}
                required
              />
              <label for="email">Student email</label>
            </div>
            <div className="Voter-input-group">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={data.password}
                required
              />
              <label for="password">Password</label>
            </div>
            <button type="submit" className="voter-signup-button">
              signup
            </button>
            {signed ? <h3> account created successfully</h3> : ""}
          </form>
          <div className="redirect">
            <h1>Already have an account?</h1>
            <Link to="/">
              <button type="button" className="voter-signup-button">
                Sign in
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </div>
  );
}
export default VoterSignUp;
