import React, {useState} from "react";
import Input from "./Input";


const Registration = ({
    setIsReg,
    setData
}) => {
    const [errorInputs, setErrorInputs] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const {name, surname} = e.target.elements

        if(name.value !== '' && surname.value !== '') {
            setData(state => {
                return {
                    ...state,
                    name: name.value,
                    surname: surname.value,
                    id: new Date().getTime()
                }
            })
            setIsReg(false)
        } else {
            setErrorInputs(true)
        }
    }

    return(
        <div className="Registration">
            <h1>Registration user</h1>
            <div className="InputsRegistration">
                <form onSubmit={handleSubmit}>
                    <h4>First name:</h4>
                    <Input type="text" placeholder="Enter first name..." name="name"/>
                     <h4>Second name:</h4>
                    <Input type="text" placeholder="Enter second name..." name="surname"/>
                     <button type="submit">Register participant</button>
                    {errorInputs ? <p>Name and Surname fields must be filled</p> : ''}
                </form>
            </div>
        </div>
    )
}

export default Registration