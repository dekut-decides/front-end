import React, { useEffect } from "react";


function StateHandler({contractState}) {

  return (
    <div data-testid="stateHandler">
      {contractState == 1 ? (
        <h1>REGISTRATION PHASE IS ONGOING. KINDLY REGISTER</h1>
      ) : (
        ""
      )}

      {contractState == 2 ? (
        <h1>VOTING IS ONGOING. CLICK ON "Voting Area" TO VOTE!</h1>
      ) : (
        ""
      )}

      {contractState == 3 ? (
        <h1>
          THE ELECTION HAS ENDED. CLICK "Results" TO VIEW THE ELECTION OUTCOME
        </h1>
      ) : (
        ""
      )}
      {contractState == 0 ? <h1>NO ELECTION SCHEDULED YET!</h1> : ""}
    </div>
  );
}
export default StateHandler;
