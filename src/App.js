import React, { useState } from "react";
import HomePage from "./components/HomePage";
import VoterLogin from "./components/VoterLogin";
import AdminLogin from "./components/AdminLogin";
import VoterSignUp from "./components/VoterSignUp";
import LogoutNav from "./components/LogoutNav";
import LogoutNavAdmin from "./components/LogoutNavAdmin";
import { Route, Routes } from "react-router-dom";

import VoterLandingPage from "./components/VoterLandingPage";
import AdminLandingPage from "./components/AdminLandingPage";
import RegisterVoter from "./components/RegisterVoter";
import AddCandidate from "./components/AddCandidate";
import ChangeState from "./components/ChangeState";
import Information from "./components/Information";
import Registration from "./components/Registration";
import VotingArea from "./components/VotingArea";
import Results from "./components/Results";
import StateHandler from "./components/StateHandler";
import AdminInformation from "./components/AdminInformation";
//import { use } from "chai";

import { ethers } from "ethers";
import Ballot from "./artifacts/contracts/Ballot.sol/Ballot.json";
const ballotAddress = "0xe3D947EF92e9B26f37C2D17Bc310aB05BFA20B07";

function App() {
  const user = localStorage.getItem("token");
  const admin = localStorage.getItem("adminToken");
  console.log(user);
  console.log(typeof window.ethereum);
  let [contractAddress, setContractAddress] = useState(ballotAddress);
  let [contractState, setContractState] = useState("");
  let [electionName, setElectionName] = useState("");
  async function getContractState() {
    if (!typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(ballotAddress, Ballot.abi, signer);
      const unformattedState = await contract.getState();
      const contractState1 = unformattedState.toNumber();
      setContractState(contractState1);
      console.log(contractState);
      console.log("some feedback about the election name");
      const electionName1 = await contract.getElectionName();
      setElectionName(electionName1);
      console.log(electionName);
      console.log("state fetched successfully from the smart contract");
    } else {
      setContractState(0);
      console.log(contractState);
      console.log(
        "contract state set to 0 by default..there was an issue fetching the state from the smart contract"
      );
    }
  }

  getContractState();

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  return (
    <>
      <Routes>
        
        {user && <Route path="*" element={<LogoutNav />} />}
        {admin && <Route path="*" element={<LogoutNavAdmin />} />}
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="VoterSignUp" element={<VoterSignUp />} />
        <Route path="AdminLogin" element={<AdminLogin />} />
        <Route path="VoterLogin" exact element={<VoterLogin />} />
        <Route
          path="/VoterLandingPage"
          element={<VoterLandingPage contractState={contractState} />}
        >
          {user && <Route path="*" element={<LogoutNav />} />}
          <Route path="Information" element={<Information />} />
          <Route path="Registration" element={<Registration />} />
          <Route
            path="VotingArea"
            element={
              <VotingArea
                electionName={electionName}
                contractAddress={contractAddress}
                Ballot={Ballot}
              />
            }
          />
          <Route
            path="Results"
            element={
              <Results contractAddress={contractAddress} Ballot={Ballot}  electionName={electionName} />
            }
          />
          <Route
            path="StateHandler"
            element={<StateHandler contractState={contractState} />}
          />
        </Route>
        <Route path="/AdminLandingPage" element={<AdminLandingPage />}>
          {user && <Route path="*" element={<LogoutNav />} />}
           <Route path="AdminInformation" element={<AdminInformation />} />
          <Route
            path="AddCandidate"
            element={
              <AddCandidate contractAddress={contractAddress} Ballot={Ballot} />
            }
          />
          <Route
            path="RegisterVoter"
            element={
              <RegisterVoter
                contractAddress={contractAddress}
                Ballot={Ballot}
              />
            }
          />
          <Route
            path="ChangeState"
            element={
              <ChangeState contractAddress={contractAddress} Ballot={Ballot} />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
