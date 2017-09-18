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
            selectedTranslation={this.props.selectedTranslation}
            handleLangSelect={this.props.handleLangSelect}
            textGroup={this.props.textGroup}
          />
        </div>
        <Videos/>
        <hr/>
      </div>
    );
  }
}
export default ShowOneContainer;
