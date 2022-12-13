import "./AdminInformation.css";
import React, { useEffect } from "react";

function AdminInformation() {
  return (
    <div data-testid="admin-information">
      <div className="admin-information-mainContainer">
        <div className="admin-information-subContainer">
          <div className="admin-information-header">
            <h2>INSTRUCTIONS</h2>
          </div>
          <h2>Welcome</h2>
          <h4>
           The voting process is divided into three phases.
           You as the admin control these phases.voters have to 
           participate in accordance to the ongoing phase that is
           set.Below are some of the steps you as the admin MUST 
           follow in order to execute a successful election.
          </h4>

          <ol className="orderedList">
            <li>
              <h3>
                After the smart contract is deployed, click on the add candidates section to add the election aspirants one by one
              </h3>
            </li>
            <h3>
              <li>Once all the candidates have been added,click on the change state section and select the registration phase</li>
            </h3>
            <li>
              <h3>
                Click on the register voter section and add each voter address to allow them to vote
              </h3>
            </li>
            <li>
              <h3>
                After all the voters have been registered, click on the change state section and select the voting phase
              </h3>
            </li>
            <li>
              <h3>
                To end the election, click on the change state section and select the results phase.This will display the election results to voters
              </h3>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
export default AdminInformation;
