import React, {useState, useContext} from 'react'
import Context from "../helpers/context"
import check from "../helpers/checkEmail"

let valid

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

export default Step1
