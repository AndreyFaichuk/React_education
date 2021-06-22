import './App.css'
import React, {useReducer, useState, useEffect, useContext} from 'react'
import Pic1 from "./avatars/boy.png";
import Pic2 from "./avatars/bussiness-man.png";
import Pic3 from "./avatars/girl.png";
import Pic4 from "./avatars/girl1.png";
import Pic5 from "./avatars/girl12.png";
import Pic6 from "./avatars/graphic-designer.png";
import Pic7 from "./avatars/man.png";
import Pic8 from "./avatars/man1.png"

const body = document.querySelector("body")
const www = document.querySelector(".checkbox input")

if(localStorage.getItem('theme')){
    body.className = `${localStorage.getItem('theme')}`
}

const Context = React.createContext(null)

let check = /^([\w\-\.\_])+\@([A-Za-z])+\.([a-z]{2,4})$/

let valid

const initialState = {
  count: 1,
  firstStep: {
      name: '',
      surname: '',
      email: '',
  },
  secondStep: {
      city: '',
      street: '',
      address: '',
  },
  thirdStep: {
      photoURL: 'https://info-4all.ru/images/69625e0cb05afcde2c8d3861e23853db.png',
  },
  fourthStep: {
    password: '',
    repeatPassword: '',
  }
}

const reducer = (state, action) => {
  switch (action.type){
    case 'INC':
      const newCountInc = state.count > 4 ? state.count : state.count + 1
      return {...state, count: newCountInc}
    case 'DEC':
      const newCountDec = state.count < 2 ? state.count : state.count - 1
      return {...state, count: newCountDec}
    case 'F_STEP':
      return {
          ...state,
          firstStep: {
              ...state.firstStep,
              ...action.payload,
          }
      }
    case 'S_STEP':
      return {
          ...state,
          secondStep: {
              ...state.secondStep,
              ...action.payload,
          }
      }
    case 'T_STEP':
       return {
              ...state,
              thirdStep: {
                  ...state.thirdStep,
                  ...action.payload,
          }
       }
    case 'FO_STEP':
       return {
              ...state,
           fourthStep: {
                  ...state.fourthStep,
                  ...action.payload,
          }
        }
    default:
      return state
  }
}


const Step1 = () => {
    const [showEmailError, setShowEmailError] = useState(false)
    const [showEmail, setShowEmail] = useState(false)
    const {state, dispatch} = useContext(Context)

    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch({type: 'F_STEP', payload: {[name]: value}})

            valid = check.test(state.firstStep.email.trim())
            if (valid) {
                setShowEmailError(false)
                setShowEmail(true)
            } else {
                setShowEmailError(true)
                setShowEmail(false)
            }
    }


  return(

      <div className="inputsStep1">
        <div>
          <h4>Name</h4>
            <input value={state.firstStep.name} type="text" name="name" onChange={handleChange}/>
        </div>

        <div>
          <h4>Surname</h4>
          <input value={state.firstStep.surname} type="text"  name="surname" onChange={handleChange}/>
        </div>

        <div className="email">
          <h4>Email</h4>
            {showEmailError === true ?  <span className="errorEmail">email is not correct</span> : ""}
            {showEmail === true ?  <span className="correctEmail">email is correct</span> : ""}
          <input value={state.firstStep.email} type="text" name="email" onChange={handleChange}/>
        </div>
      </div>

  )
}

const Step2 = () => {
    const {state, dispatch} = useContext(Context)

    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch({type: 'S_STEP', payload: {[name]: value}})
    }

    return(
        <div className="inputsStep1">
            <div>
                <h4>City</h4>
                <input value={state.secondStep.city} name="city" type="text" onChange={handleChange}/>
            </div>

            <div>
                <h4>Street</h4>
                <input value={state.secondStep.street} name="street" type="text" onChange={handleChange}/>
            </div>

            <div>
                <h4>Address</h4>
                <input value={state.secondStep.address} name="address" type="text" onChange={handleChange}/>
            </div>
        </div>
    )
}

const Step3 = () => {
    const {state, dispatch} = useContext(Context)
    const [imgUrl, setImgUrl] = useState(state.thirdStep.photoURL)

    useEffect(() =>{
        return () => dispatch({type: 'T_STEP', payload: {photoURL: imgUrl}})
    })

    const handleChange = (e) => {
        const file = e.target.files[0]
        const fileReader = new FileReader()

        fileReader.onload = () => setImgUrl(fileReader.result)
        fileReader.readAsDataURL(file)
    }

    const handleChange2 = (e) => {
        setImgUrl(e.target.src)
    }
    return(
        <div className="inputsStep1">
            <img src={imgUrl} alt="avatar" id="avatar"/>
            <div className="imgUpload">
                <label htmlFor="myfile" className="chous">Upload photo</label>
                    <input type="file" id="myfile" onChange={handleChange}  className="my" accept=".jpg, .png, .jpeg" name="img"/>
            </div>
            <div className="img-wrapper">
                <img src={Pic1} onClick={handleChange2} alt="pic"/>
                <img src={Pic2} onClick={handleChange2} alt="pic"/>
                <img src={Pic3} onClick={handleChange2} alt="pic"/>
                <img src={Pic4} onClick={handleChange2} alt="pic"/>
                <img src={Pic5} onClick={handleChange2} alt="pic"/>
                <img src={Pic6} onClick={handleChange2} alt="pic"/>
                <img src={Pic7} onClick={handleChange2} alt="pic"/>
                <img src={Pic8} onClick={handleChange2} alt="pic"/>
            </div>
        </div>
    )
}

const Step4 = () => {
    const {state, dispatch, statuses} = useContext(Context)

    const handleChange = (e) => {
        const {name, value} = e.target
        dispatch({type: 'FO_STEP', payload: {[name]: value}})
    }
    return(
        <div className="inputsStep1">
            <div className="password">
                <h4>Password</h4>
                <span>*must be at least 5 characters</span>
                <input type="text" value={state.fourthStep.password} name="password" type="text" onChange={handleChange}/>
            </div>

            <div className="passwords">
                <h4>Confirm the password</h4>
                <input type="text" value={state.fourthStep.repeatPassword} name="repeatPassword" type="text" onChange={handleChange}/>
                {statuses === 'incorrect_password' ? <span className="errorPassword">different passwords. Please try again</span> : ""}
                {statuses === 'empty_inputs' ? <span className="errorPassword">all fields must be filled</span> : ""}
                {statuses === 'all_correct' ? <span className="correctPassword">press "Submit" to continue registration</span> : ""}
            </div>
        </div>
    )
}

const Step5 = () => {
    const {state} = useContext(Context)
    return(
        <div className="form-container">
            <div className="step-page-finall">
                <h1>Thanks for registration!</h1>
            </div>

            <div className="wrapper-img">
                <img src={state.thirdStep.photoURL} alt="pic"/>
            </div>

            <div className="total-info">
                <h3>Contact Information: </h3>
                <h4>Name: {state.firstStep.name}</h4>
                <h4>Surname: {state.firstStep.surname}</h4>
                <h4>Email: {state.firstStep.email}</h4>
                <h4>City: {state.secondStep.city}</h4>
                <h4>Street: {state.secondStep.street}</h4>
                <h4>Address: {state.secondStep.address}</h4>
            </div>
        </div>
    )
}

const ColorToggle = () => {

    const switchTheme = (e) => {
        if(e.target.checked){
            body.className = "dark"
            localStorage.setItem('theme', "dark")
        } else {
            body.className = ""
            localStorage.setItem('theme', "")
        }
    }

    return(
        <>
            <label className="checkbox">
                <input type="checkbox" onChange={switchTheme}/>
                <span>Switch theme</span>
            </label>
        </>
    )
}


const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [showSubmit, setShowSubmit] = useState(true)
  const [showNext, setShowNext] = useState(true)
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
    })


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
