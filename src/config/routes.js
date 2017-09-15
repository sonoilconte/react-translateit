import React from 'react'
import {Route} from 'react-router'
import Home from '../Home'
import MyTextsContainer from '../MyTextsContainer'
import ShowOneContainer from '../ShowOneContainer'
import MyAccountContainer from '../MyAccountContainer'


export default (
  <div>
    <Route path='/' component={Home}/>
    <Route path='/mytexts' component={MyTextsContainer}/>
    <Route path='/texts/showone' component={ShowOneContainer}/>
    <Route path='/myaccount' component={MyAccountContainer}/>
  </div>
);
