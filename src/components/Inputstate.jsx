import React, { useState } from "react";


function Inputstate(){

    // let [name,setname]=useState("")
    // let [city,setcity]=useState("")
    // let [email,setemail]=useState("")


    // let inputvalue=(e)=>{
    //     setname(e.target.value)
    // }


    // let inputvalue1=(e)=>{
    //     setcity(e.target.value)
    // }

    // let inputvalue2=(e)=>{
    //     setemail(e.target.value)
    // }

    
   let [data,setdata]=useState({})

   let inputvalue=(e)=>{
    setdata({...data,[e.target.name]:e.target.value})
   }

    return(
        <>
            <h1>Inputstate component</h1>

            <input type="text" placeholder="enter your name" name="username" onChange={inputvalue}/>
            <p>your name is {data.username}</p>
            <input type="text" placeholder="enter your city" name="city" onChange={inputvalue}/>
            <p>your name is {data.city}</p>
            <input type="email" placeholder="enter your email" name="email" onChange={inputvalue}/>
            <p>your name is {data.email}</p>



            <input type="number" placeholder="enter your number" name="number" onChange={inputvalue}/>
            <p>your name is {data.number}</p>
        </>
    )
}


export{Inputstate}