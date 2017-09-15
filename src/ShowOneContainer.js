import React, { Component } from 'react';
import OrigFullText from './OrigFullText';
import TranslationFullText from './TranslationFullText';
import Videos from './Videos';

class ShowOneContainer extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <OrigFullText/>
          <TranslationFullText/>
        </div>
        <Videos/>
      </div>
    );
  }
}
export default ShowOneContainer;
