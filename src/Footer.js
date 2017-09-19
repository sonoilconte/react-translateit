import React, {Component} from 'react';
import {Link} from 'react-router';
import './styles.css';

class Footer extends Component {

  render(){
    return(
      <div id="footer" className="center grey">
        <div>
          &copy; 2017 TranslateIt
        </div>
        <div id="github">
          <p>Checkout the <a href="https://github.com/sonoilconte/react-translateit">frontend</a> and <a href="https://github.com/sonoilconte/translateit-api">API</a> repos on GitHub</p>
        </div>
      </div>
    );
  }
}
export default Footer;
