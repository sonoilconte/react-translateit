import React, { Component } from 'react';

class SignUp extends Component {
  constructor(){
    super();
    this.state = {

    }
  }

  render(){

    if(this.props.isSignUpShowing === false){
      return null;
    }

    return(
      <div className="row">
        <div className="col m6 offset-m3">
          <div className="card">
            <div className="card-content">
              <h2>Sign up</h2>
              <form className="" action="index.html" method="post">
                <label for="username">Username</label>
                <input onChange={event => this.props.onInputChangeUsername(event)} value={this.props.username} type="text" name="username" required></input>
                <label for="password">Password</label>
                <input onChange={event => this.props.onInputChangePassword(event)} value={this.props.password} type="password" name="password" required></input>
                <label for="password-confirm">Confirm Password</label>
                <input onChange={event => this.props.onInputChangePasswordConfirm(event)} value={this.props.passwordConfirm} type="password" name="password-confirm" required></input>
                <button onClick={this.props.handleSignUpSubmit} type="submit" className="btn waves-effect waves-light" name="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
