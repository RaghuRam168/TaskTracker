import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button onClick={props.onClick} className={`btn ${props.className}`} style={{background:props.color}}>{props.text}</button>
        </div>
    )
}

export default Button