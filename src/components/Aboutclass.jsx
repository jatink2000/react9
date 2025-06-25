import React, { Component } from 'react'

import myimage from "../images/image3.jpg"

class Aboutclass extends Component {
  render() {
        let groot=746;
    return (
      <>
        <h1>Aboutclass component</h1>

        <img src={myimage}/>

        {groot}
      </>
    )
  }
}
export {Aboutclass}
