import React, { Component } from "react"
import NavBar from "./NavBar"

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

        const sorted = this.state.debits.sort((a, b) => {return b.date - a.date})

        this.setState({debits: sorted})
    }

    render() {
        console.log(this.state.debits)
        return (
            <div>
                <NavBar accountBalance={this.props.accountBalance} />
                <h1>Debits</h1>
                
                <div>
                    {this.state.debits.map(entry => {
                        return (
                            <div key={entry.id}>
                                <h6>{entry.description}</h6>
                                <h5>{entry.amount}</h5>
                                <p>{entry.date}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Debits
