import React, { Component } from "react"
import NavBar from "./NavBar"

export class Home extends Component {
    render() {
        return (
            <div id="home">
                <NavBar accountBalance={this.props.accountBalance} />

                <div className="container">
                    <h1>Home</h1>
                    <h5>Credit: {this.props.totalCredit}</h5>
                    <h5>Debit: {this.props.totalDebit}</h5>
                    <h5>Account Balance: {this.props.accountBalance}</h5>
                </div>                                
            </div>
        )
    }
}

export default Home
