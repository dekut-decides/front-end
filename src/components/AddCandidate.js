import React from "react";
import "./AddCandidate.css";
import { useState } from "react";

import { ethers } from "ethers";

function AddCandidate({contractAddress,Ballot}) {
  const [inputName, setInputName] = useState("");
  const [added, setAdded] = useState(false);

  async function addCandidate(value) {
    if (!value) return;
    if (!typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, Ballot.abi, signer);
      const transaction = await contract.addCandidate(value);
      await transaction.wait();
    }
  }

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const name = inputName.toString();
      await addCandidate(name);
      setInputName(name);
      setAdded(true);
      console.log(`${name} added successfully`);
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="add-candidate-container">
      <div className="add-candidate-form-container">
        <div className="add-candidate-header-container">
          <h2>ADD CANDIDATE</h2>
        </div>
        <form data-testid="addCandidate" className="form1" onSubmit={(event) => handleSubmit(event)}>
          <div>
            <label className="registration-label" htmlFor="candidate">
              candidate name
            </label>
            <input
              className="add-candidate-input"
              type="text"
              name="candidate"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            ></input>
          </div>
          <button className="add-candidate-button">Add</button>
          {added ? <h3>{inputName} Added successfully</h3> : ""}
        </form>
      </div>
    </div>
  );
}

export default AddCandidate;
