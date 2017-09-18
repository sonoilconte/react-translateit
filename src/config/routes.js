import React from 'react'
import {Route} from 'react-router'
import BodyContainer from '../BodyContainer'
import Home from '../Home'
import MyTextsContainer from '../MyTextsContainer'
import ShowOneContainer from '../ShowOneContainer'
import MyAccountContainer from '../MyAccountContainer'


export default (
  <div>
    <Route path='/' component={BodyContainer}>
      <Route path='/mytexts' component={MyTextsContainer}/>
      <Route path='/texts/fulltext' component={ShowOneContainer}/>
      <Route path='/myaccount' component={MyAccountContainer}/>
    </Route>
  </div>
);
