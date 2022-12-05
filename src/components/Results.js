import React from "react";
import "./Results.css";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import BarChart from "./BarChart";
import {  defaults } from "react-chartjs-2";
 //defaults.global.defaultFontFamily = "Arial";
function Results({ contractAddress, Ballot,electionName }) {
  const final1 = [];
  const [testGraphData, setTestGraphData] = useState([]);
  const labels = testGraphData.map((data) => data[0]);
  const values = testGraphData.map((data) => data[1]);
  var max;
  let myWinner;
 

  console.log(labels);
  console.log(values);
  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "votes",
        data: values,
        backgroundColor: ["gold "],
        borderColor: "black",
        borderWidth: 1,
        style: "bold",
      },
    ],
  };

  function findWinner(arr){
   max = arr[0];
    for(var i=0;i<arr.length;i++){
      if(arr[i]> max) max = arr[i];
    }
    const index =values.indexOf(max);
    const lastIndex = values.lastIndexOf(max);
    if(index == lastIndex){
    const myResult = labels[index];
    myWinner=myResult;
    }else{
    myWinner= "Its a tie !"
    }
  
    return max;
  }
  findWinner(values);

  

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

  return (
    <div  data-testid="results" className="main-container">
      <div className="sub-container">
        <div className="results-header">
          <h2>RESULTS</h2>
        </div>
        <h2>{electionName}</h2>
        <div style={{ width: 700 }} className="table-holder">
          <BarChart ChartData={graphData} options={{fontSize:20}}/>
        </div>
        <h2 className="winner">Winner is: {myWinner}</h2>
      </div>
    </div>
  );
}
export default Results;
