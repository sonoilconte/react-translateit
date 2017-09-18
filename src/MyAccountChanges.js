import React, {Component} from 'react'

class MyAccountChanges extends Component {
  render(){
    return(
      <div className="row">
        <div className="col m9">
          <h2>My Account</h2>
          <div className="card">
            <div className="card-content">
              <form className="" action="index.html" method="post">
                <label for="email">Email</label>
                <input type="text" name="username" placeholder="existing@email.com" required></input>
                <button type="submit" className="btn waves-effect waves-light" name="submit">Update</button>
              </form>
              <form className="" action="index.html" method="post">
                <label for="password">Password</label>
                <input type="password" name="password" required></input>
                <label for="password-confirm">Confirm Password</label>
                <input type="password" name="password-confirm" required></input>
                <button type="submit" className="btn waves-effect waves-light" name="submit">Update</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default MyAccountChanges;
