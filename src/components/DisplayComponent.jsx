import React from 'react';
import parseTime from "../helper/parseTime";

function DisplayComponent({ time }) {
    return (
        <div>
           <h1>{parseTime(time)}</h1>
        </div>
    );
}

export default DisplayComponent;