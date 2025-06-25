import React from 'react'
import { Ourproduct } from '../json/Product'
import { useNavigate } from 'react-router-dom'

function Allproduct() {
    let a = (Ourproduct.products)

   let nav= useNavigate()

   let details=(jatin)=>{
    nav("/Productdetails",{state:jatin})
   }
    return (
        <div>
            {a.map((data) => {
                return (
                    <>
                        <div className='item1' onClick={()=>details(data)}>
                            <img src={data.image} />
                            <h3>{data.name}</h3>
                            <p>$ {data.price}</p>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Allproduct ;