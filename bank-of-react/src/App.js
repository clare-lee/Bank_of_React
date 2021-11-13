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
    const debitResponse = await fetch ('https://moj-api.herokuapp.com/debits')  
    const debitJson = await debitResponse.json()

    this.setState({debits: debitJson})

    const creditResponse = await fetch ('https://moj-api.herokuapp.com/credits')  
    const creditJson = await creditResponse.json()

    this.setState({credits: creditJson})
  }

  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = logInInfo.userName
    this.setState({currentUser: newUser})
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>
    );
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditComponent = () => (<Credits user={this.state.currentUser} credits={this.state.credits} />)
    const DebitComponent = () => (<Debits user={this.state.currentUser} debits={this.state.debits} />)


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