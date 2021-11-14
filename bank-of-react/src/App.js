import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './Login'
import Credits from './components/Credits'
import Debits from './components/Debits'

class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'joe_schmo',
        memberSince: '07/23/96',
      },
      credits: [],
      debits: []
    }
  }

  async componentDidMount () {
    // const debitResponse = await fetch ('https://moj-api.herokuapp.com/debits')  
    // const debitJson = await debitResponse.json()

    // const creditResponse = await fetch ('https://moj-api.herokuapp.com/credits')  
    // const creditJson = await creditResponse.json()

    // Contact https://moj-api.herokuapp.com/debits
    const debits = await (await fetch('https://moj-api.herokuapp.com/debits')).json()
    const credits = await (await fetch('https://moj-api.herokuapp.com/credits')).json()

    console.log(credits)
    console.log(debits)

    // Save info in state    
    let accountBalance = this.calculateAccountBalance(credits, debits)

    this.setState({accountBalance, debits, credits})
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }
  
  calculateAccountBalance = (credits, debits) => {
    return credits.reduce((carry, credit) => carry + credit.amount,0) - debits.reduce((carry, debit) => carry + debit.amount,0)
  }

  addCredit = (credit) => {
    const credits = this.state.credits
    credits.push(credit)

    let accountBalance = this.calculateAccountBalance(credits, this.state.debits)
    this.setState({accountBalance, credits})
  }

  addDebit = (debit) => {
    const debits = this.state.debits
    debits.push(debit)

    let accountBalance = this.calculateAccountBalance(this.state.credits, debits)
    this.setState({accountBalance, debits})
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (<UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />)
    
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    
    const CreditComponent = () => (<Credits credits={this.state.credits} addCredit={this.addCredit} />)
    const DebitComponent = () => (<Debits debits={this.state.debits} addDebit={this.addDebit} />)

    return (
        <Router>
          <Switch>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={UserProfileComponent}/>
            <Route exact path="/login" render={LogInComponent}/>
            <Route exact path="/credits" render={CreditComponent}/>
            <Route exact path="/debits" render={DebitComponent}/>
          </Switch>
        </Router>
    );
  }
}

export default App;