import React, { Component } from "react"
import NavBar from "./NavBar"
import DisplayCards from "./DisplayCards"

export class Debits extends Component {

    constructor() {
        super()
        this.state = {
            debits: []
        }
    }

    componentDidMount() {
        fetch("https://moj-api.herokuapp.com/debits")
        .then(res => res.json())
        .then(result => {this.setState({debits: result})})
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="debits">
                <NavBar accountBalance={this.props.accountBalance} />
                
                <div className="container">
                    <h1>Debits</h1>
                    <DisplayCards data={this.state.debits} />
                </div>
            </div>
        )
    }
}

export default Debits
