import React from "react";
import image from "../images/MainBefore.jpg"
import { Props2 } from "./Props2";

function About() {
    let details={
    "name":"jatin",
    "city":"jaipur"
  } 
    return (
        <>
            <h1 style={{color:"red"}}>about component</h1>
            <img src={image}/>

            <Props2 mydetails={details}/>
        </>

    )
}

export { About }