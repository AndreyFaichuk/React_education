import './App.css'
import React from "react"
import store from "./store/index"
import UserContainer from "./containers/UserContainers";
import RegistrationForm from "./containers/NewParticipant";
import WinnerInfoComponent from "./containers/Winner";


function App() {
  return (
      <>
    <div className="App">
     <UserContainer/>

      <div className="Navigation">
        <RegistrationForm/>
        <WinnerInfoComponent/>
      </div>
    </div>
      </>
  )
}

export default App
