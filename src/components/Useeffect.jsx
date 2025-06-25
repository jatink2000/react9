import React, { useEffect, useState } from 'react'

function Useeffect() {

    let [conut, setcount] = useState('0')


    let update = () => {
        setcount(++conut)
    }

    let [conut1, setcount1] = useState('10')


    let update1 = () => {
        setcount1(--conut1)
    }

    useEffect(() => {
        groot()
    }, [conut1])



    let groot = () => {
        console.log("hello")
    }

    return (
        <div>
            <h1>{conut}</h1>
            <button onClick={update}>click here</button>
            <h1>{conut1}</h1>
            <button onClick={update1}>click here</button>


        </div>
    )
}

export default Useeffect
