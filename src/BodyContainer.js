import React, { Component } from 'react';
import {Link} from 'react-router';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import MyTextsContainer from './MyTextsContainer';
import ShowOneContainer from './ShowOneContainer';
import MyAccountContainer from './MyAccountContainer';

class BodyContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      isSignUpShowing: false,
      isLogInShowing: false
    }
  }

  toggleSignUp = () => {
    this.setState({ isSignUpShowing: !this.state.isSignUpShowing });
  }
  toggleLogIn = () => {
    this.setState({ isLogInShowing: !this.state.isLogInShowing });
  }

  render(){
    return(
      <div className="container">
        <Home
          toggleSignUp={this.toggleSignUp}
          toggleLogIn={this.toggleLogIn}
          isSignUpShowing={this.state.isSignUpShowing}
          isLogInShowing={this.state.isLogInShowing}
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
