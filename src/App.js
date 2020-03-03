import React, {Suspense, lazy, useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {Body, Footer} from './Compositions/templates/index';
import NavBar from "./Components/organism/navbar";

import './App.css';
import FooterDiv from "./Components/organism/footerdiv";
import API from 'axios'

const All = lazy(() => import('./Components/allelement'));
const About = lazy(() => import('./Compositions/pages/about'));
const Works = lazy(() => import('./Compositions/pages/jobs'));
const Contacts = lazy(() => import('./Compositions/pages/contact'));
const Home = React.lazy(() => import('./Compositions/pages/home'));


function App() {
    const [mode, setMode] = useState('dark');
    const [data, setData] = useState(['']);


    function changeMode() {
        mode === 'light' ? setMode('dark') : setMode('light')
    }

    useEffect(()=>{
        API.get('https://rickandmortyapi.com/api/character/')
            .then(res=>{
                // console.log(res.data.results);
                setData(res.data.results)
            }).catch(err=>{console.log(err)})
    }, []);


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
                                    <Route path="/works" component={(props) => <Works {...props} api2={data}/>}/>
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


