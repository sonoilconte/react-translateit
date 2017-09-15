import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import Home from './Home';
import routes from './config/routes.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router routes={routes} history={browserHistory}/>, document.getElementById('root')
);
registerServiceWorker();
