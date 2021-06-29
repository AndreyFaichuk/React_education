import React, {useEffect, useState} from "react"
import UserCard from "../components/UserCard"
import {connect} from "react-redux"
import Input from "../components/Input";

const UserContainer = ({
    participants,
   deleteParticipant
}) => {

    const [users, setUsers] = useState([...participants])
    const [search, setSearch] = useState('')
    const [emptyUsers, setEmptyUsers] = useState()

    useEffect(() => {
        if(users.length === 0){
            setEmptyUsers(true)
        } else {
            setEmptyUsers(false)
        }
    })

    useEffect(() => {
        const filteredUsers = participants.filter(p => {
            return p.name.toLowerCase().includes(search.toLowerCase())
        })
            setUsers(filteredUsers)
    }, [participants, search])

    const handleSearch = e => {
        const {value} = e.target
        setSearch(value)
    }


    return(
        <div className="Cards">
            <Input type="text" placeholder="Enter participant name..." onChange={handleSearch} value={search}/>
            {users.map(user => <UserCard key = {user.id} data = {user} deleteParticipant = {deleteParticipant} />)}
            {emptyUsers ? <h1>There are not users</h1> : ''}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        participants: state.participants
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteParticipant: id => dispatch({type: "REMOVE_PART", payload: id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)