import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Root from '../Root';
import BodyContainer from '../BodyContainer';
import Home from '../Home';
import MyTextsContainer from '../MyTextsContainer';
import ShowOneContainer from '../ShowOneContainer';
import MyAccountContainer from '../MyAccountContainer';
import AllTextsContainer from '../AllTextsContainer';
import Header from '../Header';

export default (
  <div>
    <Route path='/' component={Home}/>
      <IndexRoute component={Home}/>
      <Route path='/everything' component={BodyContainer}/>
      <Route path='/myaccount' component={MyAccountContainer}/>
      <Route path='/header' component={Header}/>
    <Route/>

  </div>
);

// <Route path='/texts' component={AllTextsContainer}/>
// <Route path='/mytexts' component={MyTextsContainer}/>
// <Route path='/fulltext' component={ShowOneContainer}/>
