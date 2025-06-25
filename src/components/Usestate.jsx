import React, { useState } from "react";

function Usestate(){

   let [count,setcount]= useState("0")
   
   

    // let count=0

    let increment=()=>{
        if(count<10){
            setcount(++count)
        }
        else{
            setcount(0)
        }
    }

    let decrement=()=>{
        if(count>0){
            setcount(--count)
        }
        else{
            setcount(10)
        }
    }
    return(
        <>
            <h1>Usestate hook</h1>

            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>

        </>
    )
}

export{Usestate}