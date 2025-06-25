import React, { useState } from "react";

function State2() {

    //    let [name,setname]= useState("ravi")
    //    let [city,setcity]= useState("jaipur")
    //    let [email,setemail]= useState("ravi@gmail.com")


    //    let update=()=>{
    //     setname("nirmal")
    //     setcity("alwar")
    //     setemail("nirmail@gmail.com")
    //    }




    // single ------------------
    let details = {
        name: "ravi",
        email: "ravi@gmail.com",
        city: "jaipur"
    }


    let [data, setdata] = useState(details)


    let update = () => {
        setdata({...data,name: "nirmal"})
    }


    return (
        <>
            {/* <h1>State2 component</h1>
            <h1>{name}</h1>
            <h1>{city}</h1>
            <h1>{email}</h1> */}

            {/* <button onClick={update}>click here</button> */}


            <h1>{data.name}</h1>
            <h1>{data.email}</h1>
            <h1>{data.city}</h1>

            <button onClick={update}>click here</button>

        </>
    )
}


export { State2 }