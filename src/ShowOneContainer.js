import React, { Component } from 'react';
import $ from 'jquery-ajax';
import Header from './Header';
import OrigFullText from './OrigFullText';
import TranslationFullText from './TranslationFullText';
import Videos from './Videos';
import Footer from './Footer';
let domainName = 'https://frozen-mesa-86739.herokuapp.com' || 'http://localhost:3001';

class ShowOneContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      textGroup: []
    }
  }

  loadTextGroup = () => {
    $.ajax({
      method: "GET",
      url: domainName + "/texts" + "/59ba129bcc1a1d0008df909c"
    })
    .then(
      (res) => {
      this.setState({textGroup: res});
      console.log(res);
      },
      (err) => {
        console.log("ERROR", err);
      }
    );
  }

  componentDidMount = () => {
    this.loadTextGroup();
  }

  render(){
    return(
      <div className="container">
        <Header/>
        <div className="row">
          <OrigFullText/>
          <TranslationFullText/>
        </div>
        <Videos/>
        <Footer/>
      </div>
    );
  }
}
export default ShowOneContainer;
