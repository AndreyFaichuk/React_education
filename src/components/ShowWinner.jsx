import React, {useEffect, useState} from "react";

const ShowWinner = ({
    handleShowWinner,
    count
}) => {
    const [dis, setDis] = useState(true)

    useEffect(() => {
        count >= 1 ? setDis(false): setDis(true)
    })


    return(
        <>
            <h1>Total participant: {count}</h1>
            <button type="button" onClick={handleShowWinner} disabled={dis}>Show winner</button>
        </>
)
}


export default ShowWinner