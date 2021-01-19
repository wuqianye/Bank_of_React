import "./App.css"
import React, { Component } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./components/Home"
import UserProfile from "./components/UserProfile"
import LogIn from "./components/LogIn"
import Debits from "./components/Debits"
import Credits from "./components/Credits"

export class App extends Component {

    constructor() {
        super()
        this.state = {
            debits: "",
            totalDebit: 0,
            credits: "",
            totalCredit: 0,
            accountBalance: 515.88,
            currentUser: {
                userName: "bob_loblaw",
                memberSince: "08/23/99"
            }
        }
    }

    componentDidMount() {
        this.getDebits()
        this.getCredits()
    }

    getDebits() {
        fetch("https://moj-api.herokuapp.com/debits")
        .then(res => res.json())
        .then(result => {
            this.setState({debits: result})

            let debitAmount = 0
            result.forEach(entry => {debitAmount += entry.amount})
            this.setState({totalDebit: debitAmount})
        })
        .catch(err => console.log(err))
    }

    getCredits() {
        fetch("https://moj-api.herokuapp.com/credits")
        .then(res => res.json())
        .then(result => {
            this.setState({credits: result})
            
            let creditAmount = 0
            result.forEach(entry => {creditAmount += entry.amount})
            this.setState({totalCredit: creditAmount})
        })
        .catch(err => console.log(err))
    }

    mockLogIn = (logInInfo) => {
        const newUser = {...this.state.currentUser}
        newUser.userName = logInInfo.userName
        this.setState({currentUser: newUser})
    }

    render() {

        const HomeComponent = () => (<Home totalCredit={this.state.totalCredit} totalDebit={this.state.totalDebit} accountBalance={this.state.accountBalance}/>)
        const UserProfileComponent = () => (<UserProfile accountBalance={this.state.accountBalance} userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />)
        const LogInComponent = () => (<LogIn accountBalance={this.state.accountBalance} user={this.state.currentUser} mockLogIn={this.mockLogIn} {...this.props} />)
        const DebitsComponent = () => (<Debits data={this.state.debits} accountBalance={this.state.accountBalance} />)
        const CreditComponent = () => (<Credits accountBalance={this.state.accountBalance} />)

        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={HomeComponent} />
                    <Route exact path="/userProfile" render={UserProfileComponent} />
                    <Route exact path="/login" render={LogInComponent} />
                    <Route exact path="/debits" render={DebitsComponent} />
                    <Route exact path="/credits" render={CreditComponent} />
                </Switch>
            </Router>
        )
    }
}

export default App;
