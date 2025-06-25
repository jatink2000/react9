import React, { Component } from 'react'

export default class Inputclass extends Component {
    constructor(){
        super()
        this.state={
            username:"",
            email:""
        }
    }


    update=(e)=>{
        this.setState({
            username:e.target.value
        })
    }


    update1=(e)=>{
        this.setState({
            email:e.target.value
        })
    }


    render() {
        return (
            <div>
                <h1>Inputclass component</h1>

                <input type='text' placeholder='enter name' onChange={this.update} />
                <p>{this.state.username}</p>


                <input type='email' placeholder='enter email' onChange={this.update1} />
                <p>{this.state.email}</p>

            </div>
        )
    }
}
