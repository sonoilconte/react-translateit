## TranslateIt ##

Visit TranslateIt at https://glacial-brushlands-55712.herokuapp.com/
The API is at https://frozen-mesa-86739.herokuapp.com

Note: There is not yet full CRUD on the front-end. If a GA instructor would like to test, they can log-in with user: shammer, password: password. Or feel free to create an account to get a user ID, and add data with Postman. I hope to get full CRUD up and running in the near future.

## Description ##

TranslateIt is an app for people all over the world who want to share texts and translations of those texts. The text could be anything, so users are from any background, interest, or profession. Users can see their collection of texts and translations, search for other texts on the site, write new translations of their texts, or translate texts belonging to other users.
 
TranslateIt is not a machine translation service. Instead, the core value of the app is to leverage the linguistic knowledge of humans all over the internet. With upvoting, a consensus can emerge what are the best translations. Effective translation still involves a lot of subtlety, knowledge of idioms, and the ability to read between the lines. TranslateIt is the app where you can tap into those powers to gain and share understanding of all sorts of texts, in many languages.

## Technologies ##

jQuery
Passport
ReactJS
Express
node.js
MongoDB
YouTube API

## Local Installation ##

Clone this repo for the front-end.

Clone the API repo at https://github.com/sonoilconte/translateit-api

In your BASH terminal, go to the front-end directory, run `npm start`, and open `http://localhost:3000/` in your browser.

For the backend, go the the relevant directory, and run `npm install`, then `nodemon` or `node server.js`. The backend will be served at `http://localhost:3001/`.

## User Stories (these will be made more user-friendly) ##

Completed-
user can sign up for account
user can log in
user can see a list of all their texts
user can see an individual text, with translation of that text
user can see relevant YouTube videos for the text

To Do-
user can add a new text
user can add a translation of an existing text (that they own)
user can edit a text/translation
user can delete a text/translation

user can only CUD texts if they're logged in
user/visitor can read texts/translations in an index "Text-feed"
user can update password
user can delete their account (destroy user)
user can search their text/translations by keyword
user can search for texts/translations across entire site
user can upvote or downvote a translation
user cannot upvote or downvote more than once

user can run a "slideshow" of their text/translations that is played as captions (advancing each caption with a keystroke). This can be "played" while the video is running (manually).
user can save the "slideshow"- those captions (timestamps and lines of text) are associated with a user and a particular youtube video
user can save a text they like to their own account

## Bugs ##

There is currently a bug where the selected translation card sometimes disappears after clicking on a "full text" button. It should reappear if you continue clicking other "full text" links.
