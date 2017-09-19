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

              <Link to={"/mytexts"}>My Texts</Link>
              <Link to={"/texts/fulltext"}>Add a Text</Link>
              <Link to={"/mytexts"}>Text-feed</Link>
              <Link to={"/myaccount"}>My Account</Link>
              <Link to={"/"}>Log out</Link>

            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
