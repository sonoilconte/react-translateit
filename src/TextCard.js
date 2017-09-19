import React, {Component} from 'react'

class TextCard extends Component {
  render(){
    return(

      <div className="col l6 m9">
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12">
                <h4>{this.props.text.title}, by {this.props.text.author}</h4>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                {this.props.text.body}
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <a className="translateit-btn waves-effect waves-light btn" onClick={this.props.handleTextSelect} type="button" data-text-id={this.props.text._id}>Full Text</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default TextCard;
