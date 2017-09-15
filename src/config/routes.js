import React from 'react'
import {Route} from 'react-router'
import Home from '../Home'
import MyTextsContainer from '../MyTextsContainer'
import ShowOneContainer from '../ShowOneContainer'


export default (
  <div>
    <Route path='/' component={Home}/>
    <Route path='/mytexts' component={MyTextsContainer}/>
    <Route path='/texts/showone' component={ShowOneContainer}/>
  </div>
);
