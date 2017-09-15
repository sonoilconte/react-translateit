import React, { Component } from 'react';
import Header from './Header';
import OrigFullText from './OrigFullText';
import TranslationFullText from './TranslationFullText';
import Videos from './Videos';
import Footer from './Footer';

class ShowOneContainer extends Component {
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
