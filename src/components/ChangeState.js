import React from "react";
import "./ChangeState.css";
import { useState } from "react";
import { ethers } from "ethers";

function ChangeState({contractAddress,Ballot}) {
  const [success, setSuccess] = useState(false);
  const [phase, setPhase] = useState("");
  const phaseArray = ["Registration", "Voting", "Results"];

  async function setState(value) {
    if (!value) return;
    if (!typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, Ballot.abi, signer);
      switch (value) {
        case 1:
          const transaction1 = await contract.startRegistration();
          await transaction1.wait();
          break;
        case 2:
          var transaction2 = await contract.startVote();
          await transaction2.wait();
          break;
        case 3:
          var transaction3 = await contract.endElection();
          await transaction3.wait();
          break;
        default:
          break;
      }
    }
  }

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function handleResults(event) {
    event.preventDefault();
    try {
      await setState(3);
      setSuccess(true);
      setPhase(2);
      console.log("state changed successfully to results phase(3)");
    } catch (error) {
      console.log("failed to set new state");
      console.log(error);
    }
  }
  async function handleRegistration(event) {
    event.preventDefault();
    try {
      await setState(1);
      setSuccess(true);
      setPhase(0);
      console.log("state changed successfully to registration phase(1)");
    } catch (error) {
      console.log("failed to set new state");
      console.log(error);
    }
  }
  async function handleVoting(event) {
    event.preventDefault();
    try {
      await setState(2);
      setSuccess(true);
      setPhase(1);
      console.log("state changed successfully to voting phase(2)");
    } catch (error) {
      console.log("failed to set new state");
      console.log(error);
    }
  }

  return (
    <div data-testid="changeState" className="change-state-container">
      <div className="change-state-form-container">
        <div className="header-container">
          <h2>CHANGE STATE</h2>
        </div>
        <form className="changeStateForm">
          <div className="format-radio">
            <label htmlFor="zero" className="radio">
              <input
                type="radio"
                id="zero"
                className="radioInput"
                onChange={handleRegistration}
              />
              <div className="radioDiv"></div>
              REGISTRATION<br></br>PHASE
            </label>
          </div>
          <div className="format-radio">
            <label htmlFor="one" className="radio">
              <input
                type="radio"
                id="one"
                className="radioInput"
                onChange={handleVoting}
              />
              <div className="radioDiv"></div>
              VOTING PHASE
            </label>
          </div>
          <div className="format-radio">
            <label htmlFor="two" className="radio">
              <input
                type="radio"
                className="radioInput"
                id="two"
                onChange={handleResults}
              />
              <div className="radioDiv"></div>
              RESULTS PHASE
            </label>
          </div>{" "}
          {success ? (
            <h3>Election changed to {phaseArray[phase]} phase successfully</h3>
          ) : (
            ""
          )}
        </form>
      </div>
    </div>
  );
}

export default ChangeState;
