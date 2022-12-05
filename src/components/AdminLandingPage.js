import React,{useCallback, useEffect, useState} from "react";
import "./AdminLandingPage.css";
import { Link, Outlet } from "react-router-dom";
import LogoutNavAdmin from "./LogoutNavAdmin";
import jwtDecode from "jwt-decode";
function AdminLandingPage() {
//       const dateNow = new Date();
//       const presentTime = Math.floor( (dateNow.getTime()/1000));
//       const number = 1;
//    const setLocation = ()=>{
//           const voterCredentials = localStorage.getItem("adminToken");
//       if(voterCredentials){
//         let tokenExpiration = jwtDecode(voterCredentials).exp;
//         console.log(tokenExpiration);
//       //
//       //
//         console.log(presentTime);
//          if(tokenExpiration > presentTime){
//             window.location = "/AdminLandingPage";
//         }else{
//               window.location = "/AdminLogin";
//         }
//       }else{
//            window.location = "/AdminLogin";
//       }
//     };
 
//     function print(){
//       console.log('once');
//     }
//  useEffect(()=>{
 
//     //setLocation();
//       },[number])
  return (
    <div >
      <LogoutNavAdmin />
      <div  className="admin-landingPageMain-container">
        <div className="admin-landingPageSub-container1">
          <Link to="/AdminLandingPage/AdminInformation">
            <div className="final">
              <img
                src="/images/clipboard.png"
                alt="oops"
                width="80px"
                height="80px"
              />
              <p>INSTRUCTIONS</p>
            </div>
          </Link>
          <Link to="/AdminLandingPage/AddCandidate">
            <div className="final">
              <img
                src="/images/add-user.png"
                alt="oops"
                width="80px"
                height="80px"
              />
              <p>ADD CANDIDATES</p>
            </div>
          </Link>
          <Link to="/AdminLandingPage/RegisterVoter">
            <div className="final">
              <img
                src="/images/user.png"
                alt="oops"
                width="80px"
                height="80px"
              />
              <p>REGISTER VOTERS</p>
            </div>
          </Link>

          <Link to="/AdminLandingPage/ChangeState">
            <div className="final">
              <img
                src="/images/change-state.png"
                alt="oops"
                width="80px"
                height="80px"
              />
              <p>CHANGE STATE</p>
            </div>
          </Link>
        </div>
        <div className="admin-landingPageSub-container2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminLandingPage;
