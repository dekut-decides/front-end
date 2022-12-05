import React, { useEffect } from "react";
import "./Information.css";

function Information() {
  return (
    <div data-testid="information">
      <div className="information-mainContainer">
        <div className="information-subContainer">
          <div className="information-header">
            <h2>INFORMATION</h2>
          </div>
          <h2>Welcome</h2>
          <h4>
            These are some few guidelines for the voter.The voting process is
            divided into three phases ,all of which are regulated by the admin.
            voters have to participate in accordance to the ongoing phase
          </h4>
          <h2>1.Voter registration</h2>
          <ul>
            <li>
              <h4>
                To cast a vote, the voter first needs to register themselves
              </h4>
            </li>
            <h4>
              <li>The voter can only register during the registration phase</li>
            </h4>
            <li>
              <h4>
                During registration, the voter is required to enter their
                <br></br>registration number and the metamask wallet address
                they
                <br></br>
                will use to vote
              </h4>
            </li>
          </ul>
          <h2>2.Voting phase</h2>
          <h2>3.Results phase</h2>
        </div>
      </div>
    </div>
  );
}
export default Information;
