import React, { Component } from 'react';
import './styles.css'

class Videos extends Component {
  render(){
    if(this.props.videos[0]){
      console.log(this.props.videos[0].id.videoId);
    }

    let videos = this.props.videos.map((item) => {
      let url = `https://www.youtube.com/embed/${item.id.videoId}`;
      return(
        <div className="video">
          <iframe width="560" height="315" src={url} frameborder="0" allowfullscreen></iframe>
        </div>
      );
    });

    return(
      <div className="row">
        <div className="col s12">
          <div className="scroller-outer">
            <div id="videos" className="scroller-inner">
              {videos}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Videos;
