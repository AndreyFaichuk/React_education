import React from "react";
import {useDispatch, useSelector} from "react-redux";
import ShowWinner from "../components/ShowWinner";
import ShowWinnerInfo from "../components/WinnerInfo";


const WinnerInfoComponent = () => {
    const count = useSelector(state => state.participants.length)
    const winner = useSelector(state => state.winner)
    const dispatch = useDispatch()
    const handleShowWinner = () => {
        dispatch({type: "SHOW_WINNER"})
    }

    return(
        <div className="TotalParticipant">
            {winner ? <ShowWinnerInfo winner = {winner}/> :
                      <ShowWinner count = {count} handleShowWinner = {handleShowWinner}/>}
        </div>
    )
}

export default WinnerInfoComponent