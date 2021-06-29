import React from "react";

const Input = ({className, ...props}) => {
    return <input className={`${className || ''} input`} {...props}/>
}

export default Input