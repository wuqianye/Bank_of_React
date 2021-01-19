import React, { Component } from "react"
import NavBar from "./NavBar"

export class UserProfile extends Component {
    render() {
        return (
            <div id="userProfile">
                <NavBar accountBalance={this.props.accountBalance} />

                <div className="container">
                    <h1>User Profile</h1>

                    <div>Username: {this.props.userName}</div>
                    <div>Member Since: {this.props.memberSince}</div>
                </div>                
            </div>
        )
    }
}

export default UserProfile
