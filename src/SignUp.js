import React, { Component } from 'react';

class SignUp extends Component {
  constructor(){
    super();
    this.state = {
      email: "",
      username: "",
      password: "",
      passwordConfirm: ""
    }
  }

  onInputChangeEmail = (event) => {
    this.setState({email: event.target.value});
  }
  onInputChangeUsername = (event) => {
    this.setState({username: event.target.value});
  }
  onInputChangePassword = (event) => {
    this.setState({password: event.target.value});
  }
  onInputChangePasswordConfirm = (event) => {
    this.setState({passwordConfirm: event.target.value});
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
                <label for="email">Email</label>
                <input onChange={event => this.onInputChangeEmail(event)} value={this.state.email} type="text" name="email" required></input>

                <label for="username">Username</label>
                <input onChange={event => this.onInputChangeUsername(event)} type="text" name="username" required></input>

                <label for="password">Password</label>
                <input onChange={event => this.onInputChangePassword(event)} type="password" name="password" required></input>

                <label for="password-confirm">Confirm Password</label>
                <input onChange={event => this.onInputChangePasswordConfirm(event)} type="password" name="password-confirm" required></input>

                <button type="submit" className="btn waves-effect waves-light" name="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
