import React, { Component } from 'react';
import {Link} from 'react-router';
import Header from './Header';
import SignUp from './SignUp';


class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSignUpShowing: false
    }
  }

  toggleSignUp = () => {
    this.setState({isSignUpShowing: !this.state.isSignUpShowing});
  }

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
              <Link to={"/myaccount"} className="waves-effect waves-light btn">Sign up and start translating</Link>
            </div>
          </div>
        </div>

        <SignUp isSignUpShowing={this.state.isSignUpShowing}/>

        <div className="row">
          <div className="col s12">
            <div className="center-align">
              <Link to={"/myaccount"} className="waves-effect waves-light btn">Log in</Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <div className="center-align">
              <Link to={"/mytexts"} className="waves-effect waves-light btn">See what humans are translating</Link>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default Home;
