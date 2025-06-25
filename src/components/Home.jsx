import React from "react";

import groot from "../images/image3.jpg"

// css link 
import "../css/Home.css"
import { useLocation } from "react-router-dom";

function Jatin(){

   let loc= useLocation()
//    console.log(loc.state)


//    json 
//    name 
//    image 
//    price 
//    des 


// map 
// navigate => /productdetails 
// state : 


// productdetails => uselocation hook 


    return(
        <>
            <h1 className="jatin">home component</h1>
            {/* <h1>welcome {loc.state.firstname}{loc.state.lastname}</h1> */}
            <img src={groot}/>


            <img src={groot}/>


            <img src={groot}/>


            <img src={groot}/>
        </>
    )
}

export{Jatin}