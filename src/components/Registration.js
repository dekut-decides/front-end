import React from "react";
import "./Registration.css";
import axios from "axios";
import { useState } from "react";

function Registration() {
  // const [data, setData] = useState({
  //   regNumber: "",
  //   address: "",
  // });
  const [isReg, setIsReg] = useState(false);
  const [data, setData] = useState("");
  const [reg, setReg] = useState("");
  const [address, setAddress] = useState("");
  const [myError, setMyError] = useState("");
  // const handleChange = ({ currentTarget: input }) => {
  //   setData({ ...data, [input.name]: input.value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://voting-dapp-api.onrender.com/RegisterVoter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reg: reg,
          address: address,
        }),
      });

      const data = await response.json();
      setData(data.address);
      setIsReg(true);
      // const url = "http://localhost:8000/RegisterVoter";
      // const { data: res } = await axios.post(url, data);
      // window.location = "/";
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
    <div data-testid="registration" className="registration-container">
      <div className="registration-form-container">
        <div className="registration-header">
          <h2>REGISTRATION</h2>
        </div>
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label className="registration-label" htmlFor="reg">
              Reg no
            </label>
            <input
              className="registration-input"
              type="text"
              value={reg}
              onChange={(e) => setReg(e.target.value)}
            ></input>
          </div>
          <div>
            <label className="registration-label" htmlFor="address">
              Address
            </label>
            <input
              className="registration-input"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </div>
          <button type="submit" className="registration-button">
            Register
          </button>
          {isReg ? <h3>{data} registered successfully</h3> : ""}
        </form>
      </div>
    </div>
  );
}

export default Registration;
