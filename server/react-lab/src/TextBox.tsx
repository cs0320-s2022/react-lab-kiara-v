import React from "react";
import './App.css';



function TextBox(props : any) {
    const myHandler = (event: any) => {props.change(event.target.value)}

    return (
        <div>
            <label>{props.label}</label>
            <input type="text" onChange={myHandler}/>
        </div>
    );
}

export default TextBox