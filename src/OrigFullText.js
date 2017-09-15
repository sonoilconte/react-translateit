import React, { Component } from 'react';
import './styles.css'

class OrigFullText extends Component {
  render(){
    return(
      <div className="col m6">
        <div className="text-header">
          <h4>Original Lang Title</h4>
          <div className="left">
            <h5>By William Shakespeare</h5>
          </div>
          <button className="right" type="button" name="button"><i className="material-icons">edit</i></button>
        </div>
        <div className="full-text left">
          To be, or not to be: that is the question: <br/>
        Whether ’tis nobler in the mind to suffer<br/>
      The slings and arrows of outrageous fortune,<br/>
    Or to take arms against a sea of troubles,<br/>
  And by opposing end them? To die: to sleep;<br/>
No more; and, by a sleep to say we end<br/>
            The heart-ache and the thousand natural shocks<br/>
          That flesh is heir to, ’tis a consummation<br/>
        Devoutly to be wish’d. To die, to sleep;<br/>
      To sleep: perchance to dream: ay, there’s the rub;<br/>
    For in that sleep of death what dreams may come<br/>
  When we have shuffled off this mortal coil,<br/>
Must give us pause. There’s the respect<br/>
            That makes calamity of so long life;<br/>
          For who would bear the whips and scorns of time,<br/>
        The oppressor’s wrong, the proud man’s contumely,<br/>
      The pangs of dispriz’d love, the law’s delay,<br/>
    The insolence of office, and the spurns<br/>
  That patient merit of the unworthy takes,<br/>
When he himself might his quietus make<br/>
            With a bare bodkin? who would fardels bear,<br/>
          To grunt and sweat under a weary life,<br/>
        But that the dread of something after death,<br/>
      The undiscover’d country from whose bourn<br/>
    No traveller returns, puzzles the will,<br/>
  And makes us rather bear those ills we have<br/>
Than fly to others that we know not of?<br/>
            Thus conscience does make cowards of us all;<br/>
          And thus the native hue of resolution<br/>
        Is sicklied o’er with the pale cast of thought,<br/>
      And enterprises of great pith and moment<br/>
    With this regard their currents turn awry,<br/>
  And lose the name of action. Soft you now!<br/>
The fair Ophelia! Nymph, in thy orisons<br/>
            Be all my sins remember’d.<br/>
        </div>
      </div>
    );
  }
}
export default OrigFullText;
