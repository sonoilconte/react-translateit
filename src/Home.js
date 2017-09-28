import React, { Component } from 'react';
import {Link} from 'react-router';
import Header from './Header';
import SignUp from './SignUp';
import LogIn from './LogIn';
import MyTextsContainer from './MyTextsContainer';
import ShowOneContainer from './ShowOneContainer';
import Footer from './Footer';

class Home extends Component {

  render(){
    if(this.props.isLoggedIn){
      return null;
    }
    return(
      <div id="landing-page">
        <div className="row">
          <div className="col s12">
            <h1 className="left-align">TranslateIt</h1>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <div className="left-align">
              <a onClick={this.props.toggleSignUp} className="translateit-btn waves-effect waves-light btn">Sign up and start translating</a>
            </div>
          </div>
        </div>

        <SignUp
          isSignUpShowing={this.props.isSignUpShowing}
          toggleSignUp={this.props.toggleSignUp}
          onInputChangeUsername={this.props.onInputChangeUsername}
          onInputChangePassword={this.props.onInputChangePassword}
          onInputChangePasswordConfirm={this.props.onInputChangePasswordConfirm}
          handleSignUpSubmit={this.props.handleSignUpSubmit}
          username={this.props.username}
          password={this.props.password}
          passwordConfirm={this.props.passwordConfirm}
        />

        <div className="row">
          <div className="col s12">
            <div className="left-align">
              <a onClick={this.props.toggleLogIn} className="translateit-btn waves-effect waves-light btn">Log in</a>
            </div>
          </div>
        </div>

        <LogIn
          isLogInShowing={this.props.isLogInShowing}
          toggleLogIn={this.props.toggleLogIn}
          logInUsernameChange={this.props.logInUsernameChange}
          logInPasswordChange={this.props.logInPasswordChange}
          logInUsername={this.props.logInUsername}
          logInPassword={this.props.logInPassword}
          handleLogInSubmit={this.props.handleLogInSubmit}

        />

        <div className="row">
          <div className="col s12">
            <div className="left-align">
              <a className="translateit-btn waves-effect waves-light btn">See what humans are translating</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
