import React,{useEffect}from "react";
import "./VoterLandingPage.css";
import { Link, Outlet } from "react-router-dom";
import LogoutNav from "./LogoutNav";
import jwtDecode from "jwt-decode";

function VoterLandingPage({contractState}) {
//  useEffect(()=>{
//             const voterCredentials = localStorage.getItem("token");
//       if(voterCredentials){
//         let tokenExpiration = jwtDecode(voterCredentials).exp;
//         console.log(tokenEpiration);
//         let dateNow = new Date();

//         if(tokenExpiration < dateNow.getTime()/1000){
//             window.location = "/VoterLandingPage";
//         }else{
//               window.location = "/VoterLogin";
//         }
//       }else{
//            window.location = "/VoterLogin";
//       }
//       },[])
  return (
    <div>
      <LogoutNav />
      <div className="voter-landingPageMain-container">
        <div className="voter-landingPageSub-container1">
          <Link to="/VoterLandingPage/Information">
            <div className="final-div">
              <img
                src="/images/clipboard.png"
                width="80px"
                height="80px"
                alt="oops"
              />
              <p>INFORMATION</p>
            </div>
          </Link>
          <Link
            to={
              contractState === 1
                ? "/VoterLandingPage/Registration"
                : "/VoterLandingPage/StateHandler"
            }
          >
            <div className="final-div">
              <img
                src="/images/tick.png"
                width="80px"
                height="80px"
                alt="oops"
              />
              <p>REGISTER</p>
            </div>
          </Link>
          <Link
            to={
              contractState === 2
                ? "/VoterLandingPage/VotingArea"
                : "/VoterLandingPage/StateHandler"
            }
          >
            <div className="final-div">
              <img
                src="/images/voting-box.png"
                width="80px"
                height="80px"
                alt="oops"
              />
              <p>VOTING AREA</p>
            </div>
          </Link>

          <Link
            to={
              contractState === 3
                ? "/VoterLandingPage/Results"
                : "/VoterLandingPage/StateHandler"
            }
          >
            <div className="final-div">
              <img
                src="/images/analysis.png"
                width="80px"
                height="80px"
                alt="oops"
              />
              <p>RESULTS</p>
            </div>
          </Link>
        </div>
        <div className="voter-landingPageSub-container2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default VoterLandingPage;
