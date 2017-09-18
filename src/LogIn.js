import React, { Component } from 'react';

class LogIn extends Component {
  render(){
    if(this.props.isLogInShowing === false){
      return null;
    }
    return(
      <div className="row">
        <div className="col m6 offset-m3">
          <div className="card">
            <div className="card-content">
              <h2>Log in</h2>
              <form className="" action="index.html" method="post">
                <label for="username">Username</label>
                <input onChange={event => this.props.logInUsernameChange(event)} value={this.props.logInUsername} type="text" name="username" required></input>
                <label for="password">Password</label>
                <input onChange={event => this.props.logInPasswordChange(event)} value={this.props.logInPassword} type="password" name="password" required></input>
                <button onClick={this.props.handleLogInSubmit} type="submit" className="btn waves-effect waves-light" name="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LogIn;
