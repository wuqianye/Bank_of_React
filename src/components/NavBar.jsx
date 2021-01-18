import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

export class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/">Bank of React</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/userProfile">User Profile</Nav.Link>
                        <Nav.Link href="/login">LogIn</Nav.Link>
                        <Nav.Link href="/debits">Debits</Nav.Link>
                        <Nav.Link href="/credits">Credits</Nav.Link>
                    </Nav>
                    <Navbar.Text>
                        Account Balance: ${this.props.accountBalance}
                    </Navbar.Text>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
