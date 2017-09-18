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
            <li><Link to={"/mytexts"}>My Texts</Link></li>
            <li><Link to={"/texts/showone"}>Add a new Text</Link></li>
            <li><Link to={"/mytexts"}>Text-feed</Link></li>
          </ul>
          <ul className="right hide-on-med-and-down">
            <li>Welcome, {this.props.currentUsername}</li>
            <li><Link to={"/myaccount"}>My Account</Link></li>
            <li><a onClick={this.props.handleLogOut}>Log out</a></li>
          </ul>
          <ul className="side-nav" id="mobile-menu">
            <li><Link to={"/mytexts"}>My Texts</Link></li>
            <li><Link to={"/texts/showone"}>Add a new Text</Link></li>
            <li><Link to={"/mytexts/"}>Text-feed</Link></li>
            <li><Link to={"/myaccount"}>My Account</Link></li>
            <li><Link to={"/"}>Log out</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
