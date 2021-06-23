import React, {useContext} from 'react'
import Context from "../helpers/context"


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

export default Step2