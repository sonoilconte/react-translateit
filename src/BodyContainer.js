import React, { Component } from 'react';
import {Link} from 'react-router';
import $ from 'jquery-ajax';
import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import MyTextsContainer from './MyTextsContainer';
import ShowOneContainer from './ShowOneContainer';
import MyAccountContainer from './MyAccountContainer';

let domainName = 'https://frozen-mesa-86739.herokuapp.com' || 'http://localhost:3001';

class BodyContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      isSignUpShowing: false,
      isLogInShowing: false,
      username: "",
      password: "",
      passwordConfirm: "",
      logInUsername: "",
      logInPassword: "",
      isLoggedIn: false,
      currentUserId: "",
      currentUsername: "",
      myTexts: [],
      currentTextId: "",
      currentOrigText: {},
      textGroup: [],
      selectedTranslation: {},
      videos: []
    }
  }

  //load all orig texts for user

  loadMyTexts = () => {
    // TODO: eventually move all ajax calls to fetch
    fetch("/users/" + this.state.currentUserId + "/texts")
      .then((res) => {
        // filter out texts that are not original language
        let filteredTexts = res.filter((text) => {
          return (text.origLang === true)
        })
        this.setState({myTexts: filteredTexts});
        console.log("LOADING MY TEXTS", res);},
        (err) => { console.log("ERROR", err); }
      );
  }

  //handle text select
  handleTextSelect = (event) => {
    event.preventDefault();
    let textId = $(event.target).data("text-id");
    this.setState({ currentTextId: textId}, () => {
      this.loadCurrentOrigText();
      this.loadTextGroup();
    });
    console.log("TEXTID in state", this.state.currentTextId);
  }

  loadCurrentOrigText = () => {
    let url = domainName + "/texts/" + this.state.currentTextId;
    console.log("URL is", url);
    $.ajax({
      method: "GET",
      url: url
    })
    .then(
      (res) => {
        console.log("Getting current original text object", res);
      this.setState({currentOrigText: res}, () => {
        this.youtubeRequest();
      });
      },
      (err) => {
        console.log("ERROR Getting current original text object", err);
      }
    );
  }

  loadTextGroup = () => {
    // TODO: consider using string literals
    // let url = `${domainName}/textgroup/${this.state.currentTextId}`;
    let url = domainName + "/textgroup/" + this.state.currentTextId;
    console.log("GETTING TEXT GROUP AT ", url)
    $.ajax({
      method: "GET",
      url: url
    })
    .then(
      (res) => {
        this.setState({
          textGroup: res,
          selectedTranslation: res[0]
        });
      },
      (err) => {
        console.log("ERROR GETTING TEXT GROUP", err);
      }
    );
  }

  handleLangSelect = (event) => {
    event.preventDefault();
    console.log("HANDLE LANG SELECT");
    let textId = $(event.target).data("text-id");
    console.log("text id clicked", textId);
    let availTranslations = this.state.textGroup;
    let newSelectedTranslation = availTranslations.filter((text) => {
      return(text._id === textId);
    });
    this.setState({selectedTranslation: newSelectedTranslation[0]});
  }

  // SIGN UP, LOG IN, LOG OUT METHODS
  toggleSignUp = () => {
    this.setState({ isSignUpShowing: !this.state.isSignUpShowing });
  }
  toggleLogIn = () => {
    this.setState({ isLogInShowing: !this.state.isLogInShowing });
  }
  onInputChangeUsername = (event) => {
    this.setState({username: event.target.value});
  }
  onInputChangePassword = (event) => {
    this.setState({password: event.target.value});
  }
  onInputChangePasswordConfirm = (event) => {
    this.setState({passwordConfirm: event.target.value});
  }
  handleSignUpSubmit = (event) => {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: domainName + "/signup",
      data: {
        username: this.state.username,
        password: this.state.password
      }
    }).then((res) => {
      console.log(res);
      this.toggleSignUp();
      this.setState({
        username: "",
        password: "",
        passwordConfirm: ""
      });
    }, (err) => {
      console.log("ERROR CREATING USER");
      this.setState({
        username: "",
        password: "",
        passwordConfirm: ""
      });
    });
  }

  logInUsernameChange = (event) => {
    this.setState({logInUsername: event.target.value});
  }
  logInPasswordChange = (event) => {
    this.setState({logInPassword: event.target.value})
  }
  handleLogInSubmit = (event) => {
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: domainName + "/login",
      data: {
        username: this.state.logInUsername,
        password: this.state.logInPassword
      }
    }).then((res) => {
      console.log("LOGGING IN USER",res);
      this.toggleLogIn();
      this.setState({
        isLoggedIn: true,
        currentUserId: res._id,
        currentUsername: res.username,
        logInUsername: "",
        logInPassword: ""
      });
      // LOAD TEXTS AFTER LOGGING IN
      this.loadMyTexts();
    }, (err) => {
      console.log("ERROR LOGGING IN");
      this.setState({
        logInUsername: "",
        logInPassword: ""
      });
    });
  }
  handleLogOut = (event) => {
    event.preventDefault();
    $.ajax({
      method: "GET",
      url: domainName + "/logout"
    }).then((res) => {
      console.log("LOGGING OUT USER", res);
      this.setState({
        isLoggedIn: false,
        currentUserId: "",
        currentUsername: ""
      });
    }, (err) => {
      console.log("ERROR LOGGING OUT");
    });
  }

  youtubeRequest = () => {
    // consider adding this to your ENV enviornment variable.
    const APIKEY = "AIzaSyA27sOf2x3khyzRj6hmUMMlGJF-7qYEmQM";
    let data = `q=${this.state.currentOrigText.title}%20${this.state.currentOrigText.author}&type=video&maxResults=5&part=snippet`;
    let url = `https://www.googleapis.com/youtube/v3/search?key=${APIKEY}&${data}`;
    console.log("youtube request url ", url);
    $.ajax({
      method: "GET",
      url: url
    }).then((res) => {
      console.log("response from youtube", res);
      this.setState({
        videos: res.items
      });
      console.log("in videos state:", res.items);
    }, (err) => {
      console.log("error on request to youtube", err)
    });
  }


  render(){
    return(
      <div className="container">
        // TODO: Check out Redux
        <Home
          isSignUpShowing={this.state.isSignUpShowing}
          toggleSignUp={this.toggleSignUp}
          onInputChangeUsername={this.onInputChangeUsername}
          onInputChangePassword={this.onInputChangePassword}
          onInputChangePasswordConfirm={this.onInputChangePasswordConfirm}
          handleSignUpSubmit={this.handleSignUpSubmit}
          // TODO: see if you can put all of these into an object and pass that object literal down as a prop
          username={this.state.username}
          password={this.state.password}
          passwordConfirm={this.state.passwordConfirm}
          isLogInShowing={this.state.isLogInShowing}
          toggleLogIn={this.toggleLogIn}
          logInUsernameChange={this.logInUsernameChange}
          logInPasswordChange={this.logInPasswordChange}
          logInUsername={this.state.logInUsername}
          logInPassword={this.state.logInPassword}
          handleLogInSubmit={this.handleLogInSubmit}

          isLoggedIn={this.state.isLoggedIn}
        />
        <Header
          currentUsername={this.state.currentUsername}
          handleLogOut={this.handleLogOut}
          isLoggedIn={this.state.isLoggedIn}
        />
        <MyTextsContainer
          isLoggedIn={this.state.isLoggedIn}
          myTexts={this.state.myTexts}
          loadMyTexts={this.loadMyTexts.bind(this)}
          handleTextSelect={this.handleTextSelect.bind(this)}
        />
        <ShowOneContainer
          isLoggedIn={this.state.isLoggedIn}
          currentOrigText={this.state.currentOrigText}
          selectedTranslation={this.state.selectedTranslation}
          handleLangSelect={this.handleLangSelect}
          textGroup={this.state.textGroup}
          videos={this.state.videos}
        />
        <MyAccountContainer isLoggedIn={this.state.isLoggedIn}/>
        <Footer/>
      </div>
    );
  }
}
export default BodyContainer;
