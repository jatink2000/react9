import React, { useState } from "react";



function Signup(){


   let [data,setdata]=useState({})

    //    inputvalue access -----
   let inputvalue=(e)=>{
    setdata(
        {...data,[e.target.name]:e.target.value}
    )
   }


    //    localStorage save ---------
    let submit=()=>{
        localStorage.setItem("users",JSON.stringify(data))
    }



    // login  task -------
    // inputdata access => usestate hook 
    // localStorage get =>getitem 
    // if(inputdata.email==getdata.email && inputdata.password==getdata.password){
    //     alert("login")
    // }
    // else{
    //     alert("invalid details")
    // }

    return(
        <>
            <h1>Signup component</h1>

            <label>First name</label>
            <input type="text" placeholder="enter your first name" name="firstname" onChange={inputvalue}/>
            <label>last name</label>
            <input type="text" placeholder="enter your last name" name="lastname" onChange={inputvalue}/>
            <label>email</label>
            <input type="email" placeholder="enter your email" name="email" onChange={inputvalue}/>
            <label>password</label>
            <input type="password" placeholder="enter your password" name="password" onChange={inputvalue}/>
            <button onClick={submit}>click here</button>
        </>
    )
}
export default Signup