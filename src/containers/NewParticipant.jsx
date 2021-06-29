import React, {useState} from "react"
import Registration from "../components/Registration"
import Timer from "../components/Timer"
import {connect} from "react-redux";

const RegistrationForm = ({addUser}) => {
    const [isReg, setIsReg] = useState(true)
    const [data, setData] = useState({
        name: '',
        surname: '',
        time: '',
        id: null,
    })

    return(
        <>
            {isReg ?
                <Registration
                    setData = {setData}
                    setIsReg = {setIsReg}
                /> :
                <Timer
                    data = {data}
                    setData = {setData}
                    setIsReg = {setIsReg}
                    addUser = {addUser}
                />
            }
        </>

    )
}


const mapDispatchToProps = dispatch => {
        return{
            addUser: (data) => dispatch({type: "ADD_PART", payload: data})
        }
}
export default connect(null, mapDispatchToProps)(RegistrationForm)