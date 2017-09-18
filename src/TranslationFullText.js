import React, { Component } from 'react';
import './styles.css'

class TranslationFullText extends Component {
  render(){

    let languageButtons = this.props.textGroup.map(text => {
      return(
        <button type="button" name="button" data-text-id={text._id} onClick={this.props.handleLangSelect}>{text.lang}</button>
      )
    })


    return(
      <div>

        <div className="col m6">
            <div className="text-header">
              <h4>{this.props.selectedTranslation.title}</h4>
              <div className="left">
                <h5>Translation by {this.props.selectedTranslation.author}</h5>
              </div>
              <button className="right" type="button" name="button"><i className="material-icons">edit</i></button>
            </div>
            <div className="full-translation-text">
              {this.props.selectedTranslation.body}
            </div>
            {languageButtons}
          </div>


        </div>

    );
  }
}
export default TranslationFullText;
