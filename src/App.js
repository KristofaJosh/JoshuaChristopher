import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {Body, Footer} from './Compositions/templates/index';
import NavBar from "./Components/organism/navbar";
import About from './Compositions/pages/about';
import Works from './Compositions/pages/jobs';
import Contacts from './Compositions/pages/contact';
import Home from './Compositions/pages/home';
import All from "./Components/allelement";

import './App.css';

function App() {


    return (
        <>
            <ThemeProvider theme={{mode: 'dark'}}>
            {/*<ThemeProvider theme={{mode: 'light'}}>*/}
            <Body variant={'default'}>
                <BrowserRouter>
                    <NavBar/>
                    <Switch>
                        <Route path="/all" component={All}/>
                        <Route path="/about" component={About}/>
                        <Route path="/works" component={Works}/>
                        <Route path="/contacts" component={Contacts}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/" component={Home}/>
                    </Switch>
                </BrowserRouter>
            </Body>
            <Footer>
                Footer Div
            </Footer>
            </ThemeProvider>
        </>
    );
}

export default App;
