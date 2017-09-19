import React, { Component } from 'react';
import './styles.css'

class OrigFullText extends Component {
  render(){
    return(
      <div className="col m6 card">
        <div className="text-header">
          <h4>{this.props.currentOrigText.title}</h4>
          <div className="left">
            <h5>By {this.props.currentOrigText.author}</h5>
          </div>
          <button className="translateit-btn waves-effect waves-light btn right" type="button" name="button"><i className="material-icons">edit</i></button>
        </div>
        <div className="full-text left">
          {this.props.currentOrigText.body}
        </div>
      </div>
    );
  }
}
export default OrigFullText;
