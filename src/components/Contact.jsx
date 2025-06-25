import React from "react";

import jatin from "../images/image1.jpg"

function Contact(){

    let a=76

    let mystyle={
        color:"red",
        border:"2px solid green"
    }


    return(
        <>
            <h1 style={mystyle}>Contact component</h1>


            <img src={jatin} alt="logo image"/>
            <h1 style={mystyle}>{a}</h1>
            <p>{1+1}</p>
        </>
    )
}

export{Contact}