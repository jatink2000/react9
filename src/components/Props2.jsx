import React from "react";

function Props2(props){
   
    return(
        <>
            <h1>Props2 component</h1>
            <h1>my name is {props.mydetails.name}</h1>
            <h1>my name is {props.mydetails.city}</h1>
        </>
    )
}

export{Props2}