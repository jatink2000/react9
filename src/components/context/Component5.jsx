import React, { useContext } from 'react'

import { name } from './Component1'
import { city } from './Component1'

function Component5() {
  let myname=  useContext(name)
  let mycity=  useContext(city)


  return (
    <div>
    <h1>Component5</h1>
    <h1>my name is {myname}</h1>
    <h1>my city name is {mycity}</h1>

      
    </div>
  )
}

export default Component5
