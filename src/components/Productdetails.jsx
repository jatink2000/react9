import React from 'react'
import { useLocation } from 'react-router-dom'

function Productdetails() {
    let loc = useLocation()
    return (
        <div>
            <h1>Productdetails</h1>
            <img src={loc.state.image} />

        </div>
    )
}

export default Productdetails
