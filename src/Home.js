import React, { Component } from 'react';
import Header from './Header'

class Home extends Component {
  render(){
    return(
      <div className="container">
        <Header/>
        <div className="row">
          <div className="col s12">
            <h1 className="center-align">TranslateIt</h1>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <div className="center-align">
              <a href="#" className="waves-effect waves-light btn">Sign up and start translating</a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <div className="center-align">
              <a href="#" className="waves-effect waves-light btn">Log in</a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <div className="center-align">
              <a href="#" className="waves-effect waves-light btn">See what humans are translating</a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default Home;
