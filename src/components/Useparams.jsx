import React from "react";
import { useParams } from "react-router-dom";


function Useparams(){
   let data= useParams()
   console.log(data)
    return(
        <>
            <h1>Useparams component</h1>
            <h1>my name is {data.fullname}</h1>
            <h1>my email is {data.email}</h1>

        </>
    )
}

export{Useparams}