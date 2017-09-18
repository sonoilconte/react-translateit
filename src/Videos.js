import React, { Component } from 'react';
import './styles.css'

class Videos extends Component {
  render(){
    return(
      <div className="row">
        <div className="col s12">
          <div className="scroller-outer">
            <div id="videos" className="scroller-inner">
              <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aEzZLXBH3rU?rel=0" frameborder="0" allowfullscreen></iframe>
              </div>
              <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aEzZLXBH3rU?rel=0" frameborder="0" allowfullscreen></iframe>
              </div>
              <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aEzZLXBH3rU?rel=0" frameborder="0" allowfullscreen></iframe>
              </div>
              <div className="video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aEzZLXBH3rU?rel=0" frameborder="0" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Videos;
