import './App.css'
import React, {useReducer, useState, useEffect} from 'react'
import Reducer from "./helpers/reducer"
import InitialState from "./helpers/initialState"
import Step1 from "./components/step_1"
import Step2 from "./components/step_2"
import Step3 from "./components/step_3"
import Step4 from "./components/step_4"
import Step5 from "./components/step_5"
import Context from "./helpers/context"
import check from "./helpers/checkEmail"
import ColorToggle from  "./helpers/colorToggle"

const body = document.querySelector("body")

if(localStorage.getItem('theme')){
    body.className = `${localStorage.getItem('theme')}`
}

const App = () => {
  const [state, dispatch] = useReducer(Reducer, InitialState)
  const [showSubmit, setShowSubmit] = useState(true)
  const [statuses, setStatuses] = useState('')

    const handleNextStep = () => dispatch({type: 'INC'})
    const handlePrevStep = () => dispatch({type: 'DEC'})

    let password = Object.values(state.fourthStep)[0]
    let repeatPassword = Object.values(state.fourthStep)[1]

    let name = Object.values(state.firstStep)[0]
    let surname = Object.values(state.firstStep)[1]
    let email = Object.values(state.firstStep)[2]

    let city = Object.values(state.secondStep)[0]
    let street = Object.values(state.secondStep)[1]
    let address = Object.values(state.secondStep)[2]

    useEffect(() => {
        if((password.length > 4) && (repeatPassword.length > 4) &&
            (name.length !== 0) && (surname.length !== 0) &&
            (check.test(email.trim())) && (city.length !== 0) &&
            (street.length !== 0) && (address.length !== 0)) {

            if (password === repeatPassword) {
                setShowSubmit(false)
                setStatuses(true)
                setStatuses('all_correct')
            } else {
                setShowSubmit(true)
                setStatuses('incorrect_password')
            }
        } else {
            setShowSubmit(true)
            setStatuses('empty_inputs')
        }
    }, [password, repeatPassword, name.length, surname.length, email, city.length, street.length, address.length])


    return (
        <Context.Provider value={{state, dispatch, statuses}}>
      <>
          <ColorToggle/>
          {!(state.count > 4) ?
              <div className="form-container">
                  <div className="step-page">
                      <h1>Step: {state.count}</h1>
                  </div>

                  <div className="main-content">
                      {(state.count === 1) ? <Step1/> : ""}
                      {(state.count === 2) ? <Step2/> : ""}
                      {(state.count === 3) ? <Step3/> : ""}
                      {(state.count === 4) ? <Step4/> : ""}
                  </div>

                  <div className="buttons">
                      {(state.count === 1) ? "" :
                          <button type="button" onClick={handlePrevStep}>Previous</button>}
                      {(state.count > 3) ?
                          <button type="submit" disabled={showSubmit} onClick={handleNextStep}>Submit</button> :
                          <button type="button" onClick={handleNextStep}>Next</button>}
                  </div>
              </div> : <Step5/>
          }
      </>
        </Context.Provider>
  )
}

export default App
