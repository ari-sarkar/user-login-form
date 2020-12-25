import React from 'react'

const GotoBtn= (props) => {
    return (
        <div>
           <button className="goto-button" onClick={props.goto}>{props.no}</button> 
        </div>
    )
}

export default GotoBtn
