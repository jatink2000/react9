import React, { Component } from 'react'

 class Stateclass extends Component {
    constructor(){
      super()
       this.state={
        // name:"jatin",
        // city:"jaipur"

        count:0
       }
    }

    upadte=()=>{
      // this.setState({
      //   name:"ravi",
      //   city:"alwer"
      // })


      this.setState({
        count:this.state.count+1
      })
    }


    update2=()=>{
      this.setState({
        count:this.state.count-1
      })
    }


  render() {
    return (
      <>
        <h1>Stateclass component</h1>

        {/* <h1> my name is {this.state.name}</h1>
        <h1> my name is {this.state.city}</h1> */}


        <h1>{this.state.count}</h1>

        <button onClick={this.upadte}>click</button>
        <button onClick={this.update2}>click 2</button>

      </>
    )
  }
}

export {Stateclass}
