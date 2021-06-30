import React from 'react';

function BtnComponent({
    start,
    stop,
    reset,
    status,
    wait,
}) {
    return (
        <div>
            {(status === 0) ?
                <button className="stopwatch-btn green" onClick={start}>Start</button> : ""
            }
            {(status === 1) ?
                <div>
                    <button className="stopwatch-btn red" onClick={stop}>Stop</button>
                    <button className="stopwatch-btn yellow" onClick={reset}>Reset</button>
                    <button className="stopwatch-btn orange" onDoubleClick={wait}>Wait</button>
                </div> : ""
            }
            {(status === 2) ?
                <div>
                    <button className="stopwatch-btn green" onClick={start}>Start</button>
                    <button className="stopwatch-btn yellow" onClick={reset}>Reset</button>
                </div> : ""
            }

        </div>
    );
}

export default BtnComponent;