import React from "react";
import parseTime from "../helpers/parseTime";

const ShowWinnerInfo = ({
    winner
}) => {
    return(
        <>
            <h1>The winner</h1>
            <h4>ID: {winner.id}</h4>
            <h4>Name: {winner.name} {winner.surname}</h4>
            <h4>Time: {parseTime(winner.time)}</h4>
        </>
    )
}

export default ShowWinnerInfo