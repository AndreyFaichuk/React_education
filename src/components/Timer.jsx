import React, {useState} from "react";
import parseTime from "../helpers/parseTime";


const Timer = ({
    setData,
    setIsReg,
    data,
    addUser
}) => {
    const [time, setTime] = useState(0)
    const [timerID, setTimerID] = useState(null)
    const [isStart, setIsStart] = useState(false)


    const handleStart = () => {
        const id = setInterval(() => {
            setTime(time => time + 1)
        }, 1000)
        setTimerID(id)
        setIsStart(true)
    }

    const handleStop = () => {
        clearInterval(timerID)
        setIsStart(false)
    }

    const handleReset = () => {
        setTime(0)
        clearInterval(timerID)
        setIsStart(false)
    }

    const handleCancel = () => {
        handleStop()
        setIsReg(true)
        setData({
            name: '',
            surname: '',
            time: '',
            id: null,
        })
    }

    const handleSave = () => {
        handleStop()
        setIsReg(true)
        addUser({
            ...data,
            time,
        })
        setData(() => {
            return{
                name: '',
                surname: '',
                time: 0,
                id: null,
            }
        })
    }

    return(
        <div className="Registration_timer">
            <h3>Participant</h3>
            <div className="InputsRegistration_timer">
                <div>
                    <h4>ID: {data.id}</h4>
                    <h4>Participant: {data.name} {data.surname}</h4>
                </div>
                <div>
                    <h1>{parseTime(time)}</h1>
                    <button type="button" disabled={isStart} onClick={handleStart} >Start</button>
                    <button type="button" onClick={handleStop}>Stop</button>
                    <button type="button" onClick={handleReset}>Reset</button>
                </div>
            </div>
            <div className="timer_buttons">
                <button type="button" onClick={handleCancel}>Cancel</button>
                <button type="button" onClick={handleSave}>Save</button>
            </div>
        </div>
    )
}

export default Timer
