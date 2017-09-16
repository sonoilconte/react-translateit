import React, { Component } from 'react';
import $ from 'jquery-ajax';
let domainName = 'https://frozen-mesa-86739.herokuapp.com' || 'http://localhost:3001';

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

  handleSignUpSubmit = (event) => {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: domainName + "/users",
      data: {
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      }
    }).then((res) => {
      console.log(res);
      this.setState({
        email: "",
        username: "",
        password: "",
        passwordConfirm: ""
      });
    }, (err) => {
      console.log("ERROR CREATING USER");
      this.setState({
        email: "",
        username: "",
        password: "",
        passwordConfirm: ""
      });
    });
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
                <input onChange={event => this.onInputChangeUsername(event)} value={this.state.username} type="text" name="username" required></input>
                <label for="password">Password</label>
                <input onChange={event => this.onInputChangePassword(event)} value={this.state.password} type="password" name="password" required></input>
                <label for="password-confirm">Confirm Password</label>
                <input onChange={event => this.onInputChangePasswordConfirm(event)} value={this.state.passwordConfirm} type="password" name="password-confirm" required></input>
                <button onClick={this.handleSignUpSubmit} type="submit" className="btn waves-effect waves-light" name="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SignUp;
