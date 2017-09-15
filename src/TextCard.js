import React, {Component} from 'react'

class TextCard extends Component {
  render(){
    return(

      <div className="col l6 m9">
        <div className="card">
          <div className="card-content">
            <div className="row">
              <div className="col s12">
                <h4>Title and Author</h4>
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-text-tease-
              </div>
            </div>
            <div className="row">
              <div className="col s12">
                <button type="button" name="button">Full Text</button>
                <label for="">Translations:</label>
                <button type="button" name="button">German</button>
                <button type="button" name="button">French</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default TextCard;
