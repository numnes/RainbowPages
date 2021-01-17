import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import Search from './pages/Search';
import Enterprise from './pages/Enterprise';

export default function  Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = { Home }/>
                <Route path="/search" exact component = { Search }/>
                <Route path="/enterprise" exact component = { Enterprise }/>

            </Switch>
        </BrowserRouter>
    )
}