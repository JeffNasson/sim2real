import {Switch,Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard'
import Wizard from './components/Wizard/Wizard'
import House from './components/House/House'
import React from 'react';

export default (
    <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/wizard' component={Wizard} />
        <Route exact path='/house' component={House} />
    </Switch>
)

