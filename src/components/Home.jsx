import React, { Component } from "react"
import NavBar from "./NavBar"

export class Home extends Component {
    render() {
        return (
            <div>
                <NavBar accountBalance={this.props.accountBalance} />
                <h1>Home</h1>

                
            </div>
        )
    }
}

export default Home
