import React, { Component } from 'react';
import OrigFullText from './OrigFullText';
import TranslationFullText from './TranslationFullText';

class ShowOneContainer extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <OrigFullText/>
          <TranslationFullText/>
        </div>
      </div>
    );
  }
}
export default ShowOneContainer;
