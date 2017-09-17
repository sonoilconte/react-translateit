import React, { Component } from 'react';
import $ from 'jquery-ajax';
import Header from './Header';
import TextCard from './TextCard';
import Footer from './Footer';
let domainName = 'https://frozen-mesa-86739.herokuapp.com' || 'http://localhost:3001';

class MyTextsContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      myTexts: []
    }
  }

  loadMyTexts = () => {
    $.ajax({
      method: "GET",
      url: domainName + "/users" + "/59ba129bcc1a1d0008df9099" + "/texts"
    })
    .then((res) => { this.setState({myTexts: res}); console.log(res);},
      (err) => { console.log("ERROR", err); }
    );
  }

  componentDidMount = () => {
    this.loadMyTexts();
  }

  render(){
    let textCards = this.state.myTexts.map(text => {
      return(
        <TextCard text={text}/>
      )
    });
    return(
      <div className="container">
        <Header/>
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
          {textCards}
        </div>
        <Footer/>
      </div>
    );
  }
}
export default MyTextsContainer;
