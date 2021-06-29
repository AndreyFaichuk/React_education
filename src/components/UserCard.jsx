import React from "react"
import '../App.css'
import parseTime from "../helpers/parseTime";


const UserCard = ({
     data,
     deleteParticipant
}) => {

    return(
        <div className="CardOfUser">
            <h3>ID: {data.id}</h3>
            <h3>Name: {data.name} {data.surname}</h3>
            <h3>Time: {parseTime(data.time)}</h3>
            <button type="button" onClick={() => deleteParticipant(data.id)}>Delete</button>
        </div>
    )
}

export default UserCard