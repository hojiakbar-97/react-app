import React, {Component} from "react";

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './app.scss';
import Home from "../home";
import Nav from "../navbar";
import Php from "../php";
import Web from "../web";
import Footer from "../footer";
import About from "../about-us";
import AndroidApp from "../android";
import MobileApp from "../mobile-app";
import ReactApp from "../react-app";
import HtmlApp from "../html5-app";
import ContactUs from "../contact-us";


export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Nav />
                <Switch>
                        <Route exact path={'/'} component={Home} />
                        <Route path={'/web-development-services/react-app'} component={ReactApp} />
                        <Route path={'/web-development-services/html5-app'} component={HtmlApp} />
                        <Route path={'/web-development-services/php'} component={Php} />
                        <Route path={'/web-development-services'} component={Web} />
                        <Route path={'/mobile-app-development-services/android-apps'} component={MobileApp} />
                        <Route path={'/mobile-app-development-services'} component={AndroidApp} />
                        <Route path={'/about-us'} component={About} />
                        <Route path={'/contact'} component={ContactUs} />
                </Switch>
                <Footer />
            </BrowserRouter>
        );
    }
}