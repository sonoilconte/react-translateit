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
      currentOrigText: {},
      textGroup: [],
      selectedTranslation: {}
    }
  }

  loadCurrentOrigText = () => {
    $.ajax({
      method: "GET",
      url: domainName + "/texts" + "/59ba129bcc1a1d0008df909e"
    })
    .then(
      (res) => {
      this.setState({currentOrigText: res});
      console.log("current original text", res);
      },
      (err) => {
        console.log("ERROR", err);
      }
    );
  }

  loadTextGroup = () => {
    $.ajax({
      method: "GET",
      url: domainName + "/textgroup" + "/59ba129bcc1a1d0008df909e"
    })
    .then(
      (res) => {
      this.setState({textGroup: res, selectedTranslation: res[0]});
      console.log("TEXT GROUP", res);
      },
      (err) => {
        console.log("ERROR", err);
      }
    );
  }

  componentDidMount = () => {
    this.loadCurrentOrigText();
    this.loadTextGroup();
  }

  handleLangSelect = (event) => {
    event.preventDefault();
    let textId = $(event.target).data("text-id");
    console.log("text id clicked", textId);
    let availTranslations = this.state.textGroup;
    let newSelectedTranslation = availTranslations.filter((text) => {
      return(text._id === textId);
    });
    this.setState({selectedTranslation: newSelectedTranslation[0]});
  }

  render(){
    return(
      <div className="container">
        <Header/>

        <div className="row">
          <OrigFullText currentOrigText={this.state.currentOrigText}
          />
          <TranslationFullText
            textGroup={this.state.textGroup}
            selectedTranslation={this.state.selectedTranslation}
            handleLangSelect={this.handleLangSelect}
          />
        </div>
        <Videos/>
        <Footer/>
      </div>
    );
  }
}
export default ShowOneContainer;
