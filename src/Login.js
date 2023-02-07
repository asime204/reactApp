import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username:', this.state.username);
        console.log('Password:', this.state.password);
        this.setState({ username: '', password: '' });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </div>
                <button type="submit">Login</button>
            
            </form>
        );
    }
}