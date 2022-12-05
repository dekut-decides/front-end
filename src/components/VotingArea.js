import React, { useState ,useEffect} from "react";
import "./VotingArea.css";

import { ethers } from "ethers";


function VotingArea({ electionName,contractAddress,Ballot}) {

  const [hasVoted,setHasVoted] = useState(false);


  const final1 = [];
  const [testGraphData, setTestGraphData] = useState([]);
  const labels = testGraphData.map((data) => data[0]);
  const candidate1 = labels[0];
  const candidate2 = labels[1];


  useEffect(() => {
    async function fetchResults() {
      if (!typeof window.ethereum !== "undefined") {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contract = new ethers.Contract(
          contractAddress,
          Ballot.abi,
          provider
        );
        try {
          const candidates = await contract
            .getAllCandidates()
            .then((candidates) => {
              const arrayToObject = (arr = []) => {
                const res = {};
                let pair;
                for (pair of arr) {
                  const [key, value] = pair;
                  res[key] = value.toNumber();
                }
                return res;
              };
              const intermediateResults = arrayToObject(candidates);
              let arr = Object.entries(intermediateResults);
              const final = arr.map((item) => {
                const singleItem = { ...item };
                final1.push(singleItem);
                return final1.pop();
              });
              setTestGraphData(final);
            })
            .catch((error) => {
              console.log(error);
            });
        } catch (error) {
          console.log(error);
        }
      }
    }

    fetchResults();
  }, []);



  async function vote(value) {
    console.log(value);
    if (!typeof window.ethereum !== "undefined") {
      await requestAccount();
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, Ballot.abi, signer);
      const transaction = await contract.vote(value);
      await transaction.wait();
      setHasVoted(true);
   }
  }

  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function handleFirstClick(event) {
    event.preventDefault();
    try {
      await vote("0");
      console.log("success");
    } catch (error) {
      console.log("failed");
      console.log(error);
    }
  }
  async function handleSecondClick(event) {
    event.preventDefault();
    try {
      await vote("1");
      console.log("success");
    } catch (error) {
      console.log("failed");
      console.log(error);
    }
  }
  return (
    <div data-testid="votingArea" className="main-container">
      <div className="main-sub-container">
        <h1 className="election-name">{electionName}</h1>
        <div className="sub-container-holder">
          <div className="sub-container1">
            <div></div>
            <p className="candidate-name">{candidate1}</p>
            <button
              className="button"
              onClick={(event) => handleFirstClick(event)}
            >
              click here
              <br /> to vote
            </button>
          </div>

          <div className="sub-container2">
            <div></div>
            <p className="candidate-name">{candidate2}</p>
            <button
              className="button"
              onClick={(event) => handleSecondClick(event)}
            >
              click here
              <br />
              to vote
            </button>
          </div>
        </div>
      </div>
      { hasVoted ? <h2> Success </h2>: " "}
    </div>
  );
}
export default VotingArea;
