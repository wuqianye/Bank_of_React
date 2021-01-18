import React, { Component } from "react"
import NavBar from "./NavBar"

export class Credits extends Component {

    constructor() {
        super()
        this.state = {
            credits: []
        }
    }

    componentDidMount() {
        fetch("https://moj-api.herokuapp.com/credits")
        .then(res => res.json())
        .then(result => {this.setState({credits: result})})

        const sorted = this.state.credits.sort((a, b) => {return b.date - a.date})

        this.setState({credits: sorted})
    }

    render() {
        return (
            <div>
                <NavBar accountBalance={this.props.accountBalance} />
                <h1>Credits</h1>

                <div>
                    {this.state.credits.map(entry => {
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

export default Credits
