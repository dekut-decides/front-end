import React from "react";
import "./HomePage.css";
import { Link, Route, Routes } from "react-router-dom";
import VoterLogin from "./VoterLogin";
import VoterSignUp from "./VoterSignUp";
import AdminLogin from "./AdminLogin";

function HomePage() {
  return (
    <div>
      <div className="home-page-container-main">
        <div className="home-page-sub-container">
          <div className="image-holder">
            <p className="homepage-title">
              DEKUT <br></br>DECIDES
            </p>
          </div>
          <div className="home-page-buttons">
            <Link to="/AdminLogin">
              <button type="button" className="home-page-button admin-button">
                Admin
              </button>
            </Link>
            <VoterLogin/>
            {/* <img
              src="/images/get started.png"
              alt="oops"
              width="200px"
              height="200px"
              className="homepage-rocket"
            /> */}
            {/* <Link to="/VoterSignUp">
              <button type="button" className="home-page-button voter-button">
                GET STARTED
              </button>
            </Link> */}
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/VoterSignUp" exact element={<VoterSignUp />} />
        <Route path="/AdminLogin" exact element={<AdminLogin />} />
        <Route path="/VoterLogin" exact element={<VoterLogin />} />
      </Routes>
    </div>
  );
}
export default HomePage;
