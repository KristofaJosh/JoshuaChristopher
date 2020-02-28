import React, {Suspense, lazy, useState} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {Body, Footer} from './Compositions/templates/index';
import NavBar from "./Components/organism/navbar";

import './App.css';
import FooterDiv from "./Components/organism/footerdiv";


const All = lazy(() => import('./Components/allelement'));
const About = lazy(() => import('./Compositions/pages/about'));
const Works = lazy(() => import('./Compositions/pages/jobs'));
const Contacts = lazy(() => import('./Compositions/pages/contact'));
const Home = React.lazy(() => import('./Compositions/pages/home'));


function App() {
    const [mode, setMode] = useState('dark');

    function changeMode() {
        mode === 'light' ? setMode('dark') : setMode('light')
    }

    return (
        <>
            <ThemeProvider theme={{mode: mode}}>
                <Body variant={'default'}>
                    <BrowserRouter>
                            <Suspense fallback={
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            }>
                                <NavBar/>
                                <Switch>
                                    <Route path="/all" component={All}/>
                                    <Route path="/about" component={About}/>
                                    <Route path="/works" component={Works}/>
                                    <Route path="/contacts" component={Contacts}/>
                                    <Route path="/home"
                                           component={(props) => <Home {...props} changeTheme={changeMode}/>}/>
                                    <Route path="/" component={(props) => <Home {...props} changeTheme={changeMode}/>}/>
                                </Switch>
                            </Suspense>
                    </BrowserRouter>
                </Body>
                <Footer>
                    <FooterDiv/>
                </Footer>
            </ThemeProvider>
        </>
    );
}

export default App;


