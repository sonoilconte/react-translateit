import React, { Component } from 'react';
import $ from 'jquery-ajax';
import Header from './Header';
import OrigFullText from './OrigFullText';
import TranslationFullText from './TranslationFullText';
import Videos from './Videos';
import Footer from './Footer';

class ShowOneContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.isLoggedIn === false) {
      return null;
    }
    return(
      <div>
        <div className="row">
          <OrigFullText currentOrigText={this.props.currentOrigText}
          />
          <TranslationFullText
            currentOrigText={this.props.currentOrigText}
            selectedTranslation={this.props.selectedTranslation}
            handleLangSelect={this.props.handleLangSelect}
            textGroup={this.props.textGroup}
          />
        </div>
        <Videos videos={this.props.videos}/>
        <hr/>
      </div>
    );
  }
}
export default ShowOneContainer;
