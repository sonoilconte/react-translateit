import React, {Component} from 'react';
import {Link} from 'react-router';
import './styles.css';

class Footer extends Component {

  render(){
    return(
      <footer className="grey hide-on-small-and-down">
        <div className="container">
          <div className="row">
            <div className="col s12">
              Copyright 2017 TranslateIt
              <Link to={"/mytexts"} className="right">My Texts</Link>
              <Link to={"/texts/showone"} className="right">Add a Text</Link>
              <Link to={"/mytexts"} className="right">Text-feed</Link>
              <Link to={"/myaccount"} className="right">My Account</Link>
              <Link to={"/"} className="right">Log out</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
