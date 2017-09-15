import React, { Component } from 'react';
import './styles.css'

class TranslationFullText extends Component {
  render(){
    return(
      <div className="col m6">
          <div className="text-header">
            <h4>Translations</h4>
              <button type="button" name="button">German</button>
              <button type="button" name="button">French</button>
              <button type="button" name="button">Mandarin</button>
              <button className="right" type="button" name="button"><i className="material-icons">edit</i></button>
          </div>
          <div className="full-translation-text">
            Sein oder Nichtsein, das ist hier die Frage:<br/>
          Ob’s edler im Gemüt, die Pfeil’ und Schleudern<br/>
        Des wütenden Geschicks erdulden, oder,<br/>
      Sich waffnend gegen eine See von Plagen,<br/>
    Im Widerstand zu enden. Sterben – schlafen – <br/>
  Nichts weiter! – und zu wissen, dass ein Schlaf<br/>
Das Herzweh und die tausend Stöße endet,<br/>
            Die unsers Fleisches Erbteil – ’s ist ein Ziel,<br/>
          Aufs innigste zu wünschen. Sterben – schlafen –<br/>
        Schlafen! Vielleicht auch träumen! – Ja, da liegt’s:<br/>
      Was in dem Schlaf für Träume kommen mögen,<br/>
    Wenn wir den Drang des Ird’schen abgeschüttelt,<br/>
  Das zwingt uns stillzustehn. Das ist die Rücksicht,<br/>
Die Elend lässt zu hohen Jahren kommen.<br/>
            Denn wer ertrüg der Zeiten Spott und Geißel,<br/>
          Des Mächt’gen Druck, des Stolzen Misshandlungen,<br/>
        Verschmähter Liebe Pein, des Rechtes Aufschub,<br/>
      Den Übermut der Ämter und die Schmach,<br/>
    Die Unwert schweigendem Verdienst erweist,<br/>
  Wenn er sich selbst in Ruhstand setzen könnte<br/>
Mit einer Nadel bloß? Wer trüge Lasten<br/>
            Und stöhnt’ und schwitzte unter Lebensmüh’?<br/>
          Nur dass die Furcht vor etwas nach dem Tod –<br/>
        Das unentdeckte Land, von des Bezirk<br/>
      Kein Wandrer wiederkehrt – den Willen irrt,<br/>
    Dass wir die Übel, die wir haben, lieber<br/>
  Ertragen, als zu unbekannten fliehn.<br/>
So macht Bewusstsein Feige aus uns allen;<br/>
            Der angebornen Farbe der Entschließung<br/>
          Wird des Gedankens Blässe angekränkelt;<br/>
        Und Wagestücke hohen Flugs und Werts,<br/>
      Durch diese Rücksicht aus der Bahn gelenkt,<br/>
    Verlieren so der Handlung Namen. – Still!<br/>
  Die reizende Ophelia. – Nymphe, schließ<br/>
In dein Gebet all meine Sünden ein.<br/>
          </div>
        </div>
    );
  }
}
export default TranslationFullText;
