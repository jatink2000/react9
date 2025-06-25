import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Usenavigate() {
    let [data, setdata] = useState({})
    let go=useNavigate()

    let inputvalue = (e) => {
        setdata(
            { ...data, [e.target.name]: e.target.value }
        )
    }


    let login = () => {
        let users = JSON.parse(localStorage.getItem("users"))

        if (data.email == users.email && data.password == users.password) {
            alert("login")
            go("/",{state:users})
        }

        else {
            alert("invalid details")
        }
    }

    return (
        <>
            <h1>Usenavigate component</h1>
            <input type="email" placeholder=" enter your email" name="email" onChange={inputvalue} />
            <input type="password" placeholder=" enter your password" name="password" onChange={inputvalue} />
            <button onClick={login}>login</button>
        </>
    )
}

export { Usenavigate }