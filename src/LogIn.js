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
                <input type="text" name="username" value="" required></input>
                <label for="password">Password</label>
                <input type="password" name="password" value="" required></input>
                <button type="submit" className="btn waves-effect waves-light" name="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default LogIn;
