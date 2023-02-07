import React, { Component } from 'react'

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            name: 'Aziel',
            age: 200
        }
    }

    happyBirthday = () => {
        this.setState({age: this.state.age + 5})
    }


    render = () => {
        return (
            <div>
                <h2>This is {this.state.name}'s home page</h2>
                <p>{this.state.age}</p>
                <button onClick={this.happyBirthday}>+</button>


            </div>
        )
    }
}