import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/home.jsx';
import Main from './components/main.jsx';
import NotFound from './components/notfound.jsx';

var routes = (
    <Route path="/" component={ Home }>
        <IndexRoute component={ Main }></IndexRoute>
        <Route path="*" component={ NotFound }></Route>
    </Route>
);

export default routes;
