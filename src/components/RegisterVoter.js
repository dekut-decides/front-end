import React from "react";
import "./RegisterVoter.css";
import { useState, useEffect } from "react";
import axios from "axios";

import { ethers } from "ethers";





function RegisterVoter({contractAddress,Ballot}) {
  const [registered, setRegistered] = useState(false);
  const [registeredAddress, setRegisteredAddress] = useState("");

  const url = "http://localhost:8000/RegisterVoter/?page=1&limit=4";
  const [fetchedData, setFetchedData] = useState([]);
  const [inputAddress, setInputAddress] = useState("");

  useEffect(() => {
    axios.get(url).then((response) => {
      setFetchedData(response.data);
      console.log(response.data);
    });
  }, [url]);

  async function registerVoter(value) {
    if (!value) return;
    if (!typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, Ballot.abi, signer);
      const transaction = await contract.authorize(value);
      await transaction.wait();
    }
  }

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
  
function Display({address ,id}){
  
  return (
    <div className="display-holder">
      <p className="address">{address}</p>
      <button value={address}  className="register-voter-button address-button" onClick={(event)=>handleSubmit(event,address,id)}>Register</button>
    </div>
  )
}
  async function handleSubmit(event,address,id) {
    event.preventDefault();
    try {
      console.log(address);
      await registerVoter(address);
      setRegisteredAddress(address);
      console.log("successfully registered");
      setRegistered(true);
      let url = `https://voting-dapp-api.onrender.com/RegisterVoter?voterID=${id}`
      axios.delete(url).then((response) => {
      console.log(response.data);
    });
     
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div data-testid="registerVoter" className="register-voter-container">
      <div className="register-voter-form-container">
        <div className="header-container">
          <h2>REGISTER VOTERS</h2>
        </div>
        <div className="registerVoterAligner">
          <div className="list-voters">
            {fetchedData.map((data,index) => {
             return <Display key={index} address={data.address} id={data._id}/>
            })}
          </div>
          <form
            className="registerVoterForm"
            onSubmit={(event) => handleSubmit(event)}
          >
            {registered ? (
              <h3>{registeredAddress} registered successfully</h3>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterVoter;
