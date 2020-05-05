import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Welcome from './Welcome';
import Home from './Home';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Welcome} />
                <Route path="/home" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}