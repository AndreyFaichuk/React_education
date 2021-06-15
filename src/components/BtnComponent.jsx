import React, {useState} from 'react'

let getLocalStorage = JSON.parse(localStorage.getItem('timer'))

function BtnComponent(props) {
    let [time, setTime] = useState(props.timer)


    return (
        <>
        <div className="buttons">
            {(props.status === 0) ?
                <button type={"button"} onClick={props.start}
                        className="stopwatch-btn stopwatch-btn-gre">Start</button> : ""
            }
            {(props.status === 1) ?
                <button type={"button"} onClick={props.resume}
                className="stopwatch-btn stopwatch-btn-vio">Continue</button> : ""
            }
            <button type={"button"} onClick={props.stop}
                    className="stopwatch-btn stopwatch-btn-red">Stop</button>
            <button type={"button"} onClick={props.reset}
                    className="stopwatch-btn stopwatch-btn-yel">Reset</button>

            <button type="button" className="button-clearAll" onClick={props.clearHistory}>Clear history</button>
        </div>

            {
                time.map((time) =><h4 key={"todo-item-" + time.ms + time.s}>
                         {(time.h >= 10) ? time.h : "0" + time.h}
                        :{(time.m >= 10) ? time.m : "0" + time.m}
                        :{(time.s >= 10) ? time.s : "0" +  time.s}
                        :{(time.ms >= 10) ? time.ms : "0" +  time.ms}
                    </h4>)

            }




            </>
    );
}


export default BtnComponent;
