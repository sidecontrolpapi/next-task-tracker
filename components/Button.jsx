import React from 'react'

const Button = (props) => {
    return (
        <button onClick={props.onAdd} style={{backgroundColor:props.color}} className="btn">
       { props.text}
    </button>
    )
}

export default Button
