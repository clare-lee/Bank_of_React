import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import{Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
        <div class="leftIndent">
            <img src="https://picsum.photos/201" alt="bank"/>
            <h1>Bank of React</h1>

            <Link to="/userProfile">User Profile</Link>
            <br/>
            <Link to="/credits">Credits</Link>
            <br/>
            <Link to="/debits">Debits</Link>
            <br/>
            <Link to="/login">Log in</Link>
            <AccountBalance accountBalance={this.props.accountBalance}/>
        </div>
    );
  }
}

export default Home;