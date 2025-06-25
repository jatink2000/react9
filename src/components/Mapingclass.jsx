import React, { Component } from 'react'
import { Ourproduct } from '../json/Product'

class Mapingclass extends Component {
    render() {
        let a = (Ourproduct.products)
        return (
            <>
                <h1>mappingclass component</h1>


            <div className='products'>
                {a.map((item) => {
                    return (
                        <>
                            <div className='box1'>
                                <img src={item.image} />
                                <h4>{item.name}</h4>
                                <p>$ {item.price}</p>
                                <p>{item.details.description}</p>
                            </div>
                        </>
                    )
                })}
                </div>
            </>
        )
    }
}

export { Mapingclass }
