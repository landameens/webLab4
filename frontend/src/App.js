import './App.css';
import SignInPage from './page/SignInPage/SignInPage';
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import SignUpPage from "./page/SignUpPage/SignUpPage";
import MainPage from "./page/MainPage/MainPage";
import React from "react";
import {Provider} from "react-redux";
import configureStore from "./state/configureStore";

const initialState = {
    formState: {
        x: null,
        y: null,
        r: null
    }
}

const store = configureStore(initialState)

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <SignInPage/>
                    </Route>
                    <Route path="/signUp">
                        <SignUpPage/>
                    </Route>
                    <Route path="/main">
                        <MainPage/>
                    </Route>
                    <Redirect to="/"/>
                </Switch>
            </Router></Provider>
    );
}

export default App;
