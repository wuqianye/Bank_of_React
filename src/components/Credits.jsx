import React, { Component } from "react"
import NavBar from "./NavBar"
import DisplayCards from "./DisplayCards"

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
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="credits">
                <NavBar accountBalance={this.props.accountBalance} />
                
                <div className="container">
                    <h1>Credits</h1>
                    <DisplayCards data={this.state.credits} />
                </div>
            </div>
        )
    }
}

export default Credits
