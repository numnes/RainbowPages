import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import Search from './pages/Search';
import Enterprise from './pages/Enterprise';
import Pros from './pages/Enterprise/Pros';
import Contras from './pages/Enterprise/Contra';
import Fotos from './pages/Enterprise/Foto';
import Comentar from './pages/Enterprise/Comentar';

export default function  Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component = { Home }/>
                <Route path="/search" exact component = { Search }/>
                <Route path="/enterprise" exact component = { Enterprise }/>
                <Route path="/pros" exact component = { Pros }/>
                <Route path="/contras" exact component = { Contras }/>
                <Route path="/fotos" exact component = { Fotos }/>
                <Route path="/comentar" exact component = { Comentar }/>


            </Switch>
        </BrowserRouter>
    )
}