import React, { Component } from 'react';
import Header from './Header';
import MyAccountChanges from './MyAccountChanges';
import Footer from './Footer';

class MyAccountContainer extends Component {
  render(){
    // if (this.props.isLoggedIn === false){
    //   return null;
    // }
    return(
      <div>
        <MyAccountChanges/>
      </div>
    );
  }
}
export default MyAccountContainer;
