import React, {useContext} from 'react'
import Context from "../helpers/context"

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

export default Step5