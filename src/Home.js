import React, { Component } from 'react';
import {Link} from 'react-router';
import Header from './Header';
import SignUp from './SignUp';
import LogIn from './LogIn';
import MyTextsContainer from './MyTextsContainer';
import ShowOneContainer from './ShowOneContainer';
import Footer from './Footer';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col s12">
            <h1 className="center-align">TranslateIt</h1>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <div className="center-align">
              <a onClick={this.props.toggleSignUp} className="waves-effect waves-light btn">Sign up and start translating</a>
            </div>
          </div>
        </div>

        <SignUp
          isSignUpShowing={this.props.isSignUpShowing}
          toggleSignUp={this.props.toggleSignUp}
        />

        <div className="row">
          <div className="col s12">
            <div className="center-align">
              <a onClick={this.props.toggleLogIn} className="waves-effect waves-light btn">Log in</a>
            </div>
          </div>
        </div>

        <LogIn
          isLogInShowing={this.state.isLogInShowing}
          toggleLogIn={this.props.toggleLogIn}
        />

        <div className="row">
          <div className="col s12">
            <div className="center-align">
              <Link to={"/mytexts"} className="waves-effect waves-light btn">See what humans are translating</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
