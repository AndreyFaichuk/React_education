import React, {useContext} from 'react'
import Context from "../helpers/context"
import '../App.css'

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

export default Step4