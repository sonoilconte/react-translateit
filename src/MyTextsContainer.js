import React, { Component } from 'react';
import $ from 'jquery-ajax';
import Header from './Header';
import TextCard from './TextCard';
import Footer from './Footer';
let domainName = 'https://frozen-mesa-86739.herokuapp.com' || 'http://localhost:3001';

class MyTextsContainer extends Component {

  render(){
    // if (this.props.isLoggedIn === false){
    //   return null;
    // }
    let textCards = this.props.myTexts.map(text => {
      return(
        <TextCard text={text} handleTextSelect={this.props.handleTextSelect}/>
      )
    });
    return(
      <div>
        <div className="row">
          <div className="col s12">
            <div className="left-align">
              <h3 className="">My Texts</h3>
              <div className="left">
                <i className="material-icons left white">search</i>
                <input className="" id="search" type="search" placeholder="search my texts" required></input>
              </div>
              <a className="translateit-btn btn-floating btn-medium waves-effect waves-light right"><i className="material-icons">add</i></a>
            </div>
          </div>
        </div>
        <div className="row">
          {textCards}
        </div>
        <hr/>
      </div>
    );
  }
}
export default MyTextsContainer;
