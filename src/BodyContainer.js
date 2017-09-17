import React, { Component } from 'react';
import {Link} from 'react-router';
import $ from 'jquery-ajax';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import MyTextsContainer from './MyTextsContainer';
import ShowOneContainer from './ShowOneContainer';
import MyAccountContainer from './MyAccountContainer';

let domainName = 'https://frozen-mesa-86739.herokuapp.com' || 'http://localhost:3001';

class BodyContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      isSignUpShowing: false,
      isLogInShowing: false,
      username: "",
      password: "",
      passwordConfirm: "",
      logInUsername: "",
      logInPassword: ""
    }
  }

  // SIGN UP, LOG IN, LOG OUT METHODS
  toggleSignUp = () => {
    this.setState({ isSignUpShowing: !this.state.isSignUpShowing });
  }
  toggleLogIn = () => {
    this.setState({ isLogInShowing: !this.state.isLogInShowing });
  }
  onInputChangeUsername = (event) => {
    this.setState({username: event.target.value});
  }
  onInputChangePassword = (event) => {
    this.setState({password: event.target.value});
  }
  onInputChangePasswordConfirm = (event) => {
    this.setState({passwordConfirm: event.target.value});
  }
  handleSignUpSubmit = (event) => {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: domainName + "/signup",
      data: {
        username: this.state.username,
        password: this.state.password
      }
    }).then((res) => {
      console.log(res);
      this.toggleSignUp();
      this.setState({
        username: "",
        password: "",
        passwordConfirm: ""
      });
    }, (err) => {
      console.log("ERROR CREATING USER");
      this.setState({
        username: "",
        password: "",
        passwordConfirm: ""
      });
    });
  }

  logInUsernameChange = (event) => {
    this.setState({logInUsername: event.target.value});
  }
  logInPasswordChange = (event) => {
    this.setState({logInPassword: event.target.value})
  }

  render(){
    return(
      <div className="container">
        <Home
          isSignUpShowing={this.state.isSignUpShowing}
          toggleSignUp={this.toggleSignUp}
          onInputChangeUsername={this.onInputChangeUsername}
          onInputChangePassword={this.onInputChangePassword}
          onInputChangePasswordConfirm={this.onInputChangePasswordConfirm}
          handleSignUpSubmit={this.handleSignUpSubmit}
          username={this.props.username}
          password={this.props.password}
          passwordConfirm={this.props.passwordConfirm}

          isLogInShowing={this.state.isLogInShowing}
          toggleLogIn={this.toggleLogIn}
          logInUsernameChange={this.logInUsernameChange}
          logInPasswordChange={this.logInPasswordChange}
          logInUsername={this.state.logInUsername}
          logInPassword={this.state.logInPassword}

        />
        <Header/>
        <MyTextsContainer/>
        <ShowOneContainer/>
        <MyAccountContainer/>
        <Footer/>
      </div>
    );
  }
}
export default BodyContainer;
