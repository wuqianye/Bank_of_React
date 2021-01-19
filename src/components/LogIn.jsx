import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import NavBar from "./NavBar"

export class LogIn extends Component {

    constructor() {
        super()
        this.state = {
            user: {
                userName: "",
                password: ""
            },
            redirect: false
        }
    }

    handleChange = (e) => {
        const updatedUser = {...this.state.user}
        const inputField = e.target.name
        const inputValue = e.target.value
        updatedUser[inputField] = inputValue

        this.setState({user: updatedUser})
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.mockLogIn(this.state.user)
        
        this.setState({redirect: true})
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to="/userProfile" />)
        }
        
        return (
            <div id="login">
                <NavBar accountBalance={this.props.accountBalance} />

                <div className="container">
                    <h1>LogIn</h1>
                
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <input type="text" name="userName" onChange={this.handleChange} value={this.state.user.userName} placeholder="username" />
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                        <button id="loginbtn">Log In</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LogIn
