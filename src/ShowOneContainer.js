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
      // currentOrigText: {},
      // textGroup: [],
      // selectedTranslation: {}
    }
  }

  // loadCurrentOrigText = () => {
  //   $.ajax({
  //     method: "GET",
  //     url: domainName + "/texts/" + this.props.currentTextId
  //   })
  //   .then(
  //     (res) => {
  //     this.setState({currentOrigText: res});
  //     console.log("Getting current original text object", res);
  //     },
  //     (err) => {
  //       console.log("ERROR Getting current original text object", err);
  //     }
  //   );
  // }

  loadTextGroup = () => {
    $.ajax({
      method: "GET",
      url: domainName + "/textgroup/" + this.props.currentTextId
    })
    .then(
      (res) => {
      this.setState({textGroup: res, selectedTranslation: res[0]});
      console.log("TEXT GROUP", res);
      },
      (err) => {
        console.log("ERROR GETTING TEXT GROUP", err);
      }
    );
  }

  // componentWillReceiveProps = (nextProps) => {
  //   if ((this.props.currentTextId !== "") && (this.props.currentTextId !== nextProps.currentTextId)){
  //     this.loadCurrentOrigText();
  //     this.loadTextGroup();
  //   }
  // }

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
    if (this.props.isLoggedIn === false){
      return null;
    }
    return(
      <div>
        <div className="row">
          <OrigFullText currentOrigText={this.props.currentOrigText}
          />
          <TranslationFullText

          />
        </div>
        <Videos/>
        <hr/>
      </div>
    );
  }
}
export default ShowOneContainer;
