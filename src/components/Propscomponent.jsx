import React from "react";

function Propscomponent({mydetails}){
    // console.log(props)
    return(
        <>
            {/* <h1>Props component : Props is a special keyword in react . which is used to pass the data from one component to another component . but the importent part props can pass the data in uni direction ( p to c)</h1> */}


            <h1>my name is {mydetails.name}</h1>
            <h1>my city name is {mydetails.city}</h1>

            {/* <img src={props.myimage}/> */}
        </>
    )
}

export{Propscomponent}