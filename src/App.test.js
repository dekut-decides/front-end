import { render } from "@testing-library/react";
import AddCandidate from "./components/AddCandidate";
import RegisterVoter from "./components/RegisterVoter";
import ChangeState from "./components/ChangeState";
import Information from "./components/Information";
import Registration from "./components/Registration"
import VotingArea from "./components/VotingArea";
import Results from "./components/Results";
import StateHandler from "./components/StateHandler";
import LogoutNavAdmin from "./components/LogoutNavAdmin.js";
import LogoutNav from "./components/LogoutNav.js";
import VoterSignUp from "./components/VoterSignUp";
import VoterLogin from "./components/VoterLogin.js";
import AdminLogin from "./components/AdminLogin.js";

describe("The application ",() =>{

    it("renders the add candidate component successfully",()=>{
        const {getByTestId} = render(<AddCandidate/>);
        const tester = getByTestId("addCandidate");
        expect(tester).toBeTruthy();
    })
    
    it("renders the register voter component successfully",()=>{
        const {getByTestId} = render(<RegisterVoter/>);
        const tester = getByTestId("registerVoter");
        expect(tester).toBeTruthy();
    })
    it("renders the change state component successfully",()=>{
        const {getByTestId} = render(<ChangeState/>);
        const tester= getByTestId("changeState");
        expect(tester).toBeTruthy();
    })
   it("renders the information component successfully",()=>{
        const {getByTestId} = render(<Information/>);
        const tester = getByTestId("information");
        expect(tester).toBeTruthy();
    })
    it("renders the registration component successfully",()=>{
        const {getByTestId} = render(<Registration/>);
        const tester = getByTestId("registration");
        expect(tester).toBeTruthy();
    })
    it("renders the voting area component successfully",()=>{
        const {getByTestId} = render(<VotingArea/>);
        const tester = getByTestId("votingArea");
        expect(tester).toBeTruthy();
    })
    // it("renders the results component successfully",()=>{
    //     const {getByTestId} = render(<Results/>);
    //     const tester = getByTestId("results");
    //     expect(tester).toBeTruthy();
    // })
    it("renders the state handler component successfully",()=>{
        const {getByTestId} = render(<StateHandler/>);
        const tester = getByTestId("stateHandler");
        expect(tester).toBeTruthy();
    })
    it("renders the log out nav admin component successfully",()=>{
        const {getByTestId} = render(<LogoutNavAdmin/>);
        const tester = getByTestId("logoutNavAdmin");
        expect(tester).toBeTruthy();
    })
    it("renders the log out nav component successfully",()=>{
        const {getByTestId} = render(<LogoutNav/>);
        const tester = getByTestId("logoutNav");
        expect(tester).toBeTruthy();
    })
    // it("renders the voter sign up component successfully",()=>{
    //     const {getByTestId} = render(<VoterSignUp/>);
    //     const tester = getByTestId("voterSignup");
    //     expect(tester).toBeTruthy();
    // })
    // it("renders the add voter login component successfully",()=>{
    //     const {getByTestId} = render(<VoterLogin/>);
    //     const tester = getByTestId("voterLogin");
    //     expect(tester).toBeTruthy();
    // })
    // it("renders the admin login component successfully",()=>{
    //     const {getByTestId} = render(<AdminLogin/>);
    //     const tester = getByTestId("adminLogin");
    //     expect(tester).toBeTruthy();
    // })
    
})