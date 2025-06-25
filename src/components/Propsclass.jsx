import React, { Component } from 'react'

export default class Propsclass extends Component {
    render() {
        return (
            <>
                <h1>Propsclass</h1>
                <h1>{this.props.name.city}</h1>

            </>
        )
    }
}
