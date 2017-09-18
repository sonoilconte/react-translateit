import React, {Component} from 'react';
import {Link} from 'react-router';
import './styles.css';

class Header extends Component {

  render(){
    if (this.props.isLoggedIn === false){
      return null;
    }
    return(
      <nav>
        <div className="nav-wrapper grey">
          <a href="#" data-activates="mobile-menu" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="left hide-on-med-and-down">
            <li><a href="#">My Texts</a></li>
            <li><a href="#">Add a new Text</a></li>
            <li><a href="#">Text-feed</a></li>
          </ul>
          <ul className="right hide-on-med-and-down">
            <li>Welcome, {this.props.currentUsername}</li>
            <li><a href="#">My Account</a></li>
            <li><a onClick={this.props.handleLogOut}>Log out</a></li>
          </ul>
          <ul className="side-nav" id="mobile-menu">
            <li><a href="#">My Texts</a></li>
            <li><a href="#">Add a new Text</a></li>
            <li><a href="#">Text-feed</a></li>
            <li><a href="#">My Account</a></li>
            <li><a onClick={this.props.handleLogOut}>Log out</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
