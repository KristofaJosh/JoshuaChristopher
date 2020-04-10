import React, {Suspense, lazy} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Body, Footer} from './Compositions/templates/index';
import NavBar from "./Components/organism/navbar";
import FooterDiv from "./Components/organism/footerdiv";
import StyleProvider from "./Contexts/styleContext/styleProvider";
import './App.css';
// import API from 'axios';


const All = lazy(() => import('./Components/allelement'));
const About = lazy(() => import('./Compositions/pages/about'));
const Works = lazy(() => import('./Compositions/pages/jobs'));
const Contacts = lazy(() => import('./Compositions/pages/contact'));
const Home = React.lazy(() => import('./Compositions/pages/home'));


function App() {

    return (
        <>

            <StyleProvider>
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
                                           component={Home}/>
                                    <Route path="/" component={Home}/>
                                </Switch>
                            </Suspense>
                        </BrowserRouter>
                    </Body>
                    <Footer>
                        <FooterDiv/>
                    </Footer>
            </StyleProvider>

        </>
    );
}

export default App;


