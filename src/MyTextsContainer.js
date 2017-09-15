import React, { Component } from 'react';

class MyTextsContainer extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col s12">
            <div className="left-align">
              <h3 className="">My Texts</h3>
              <div className="left">
                <i className="material-icons left">search</i>
                <input className="" id="search" type="search" placeholder="search my texts" required></input>
              </div>
              <a className="btn-floating btn-medium waves-effect waves-light right"><i className="material-icons">add</i></a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <p>Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.Text cards will go here.</p>
          </div>
        </div>
      </div>
    );
  }
}
export default MyTextsContainer;
