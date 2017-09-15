import React, { Component } from 'react';
import Header from './Header';
import MyAccountChanges from './MyAccountChanges';
import Footer from './Footer';

class MyAccountContainer extends Component {
  render(){
    return(
      <div className="container">
        <Header/>
        <MyAccountChanges/>
        <Footer/>
      </div>
    );
  }
}
export default MyAccountContainer;
