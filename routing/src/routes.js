import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Route1 from './Route1';
import Route2 from './Route2';

export default(
  <Switch>
    <Route component={Route1} path='/Route1'/>
    <Route component={Route2} path='/Route2'/>
    <Route component={Home} exact path='/'/>
  </Switch>
)