import React, { Component } from 'react';
import OrigFullText from './OrigFullText';

class ShowOneContainer extends Component {
  render(){
    return(
      <div className="container">
        <div className="row">
          <h1>SHOW ONE CONTAINER</h1>
          <OrigFullText/>
        </div>
      </div>
    );
  }
}
export default ShowOneContainer;
