import './App.css'
import SignInPage from './page/SignInPage/SignInPage'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import SignUpPage from './page/SignUpPage/SignUpPage'
import MainPage from './page/MainPage/MainPage'
import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './state/configureStore'
import history from './utils/history'
import { MAIN, ROOT, SIGN_UP } from './utils/routes'
import { SnackbarProvider } from 'notistack'

const initialState = {
    formState: {
        x: null,
        y: null,
        r: null,
    },
}

const store = configureStore(initialState)

function App() {
    return (
        <SnackbarProvider maxSnack={2}>
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route exact path={ROOT}>
                            <SignInPage />
                        </Route>
                        <Route path={SIGN_UP}>
                            <SignUpPage />
                        </Route>
                        <Route path={MAIN}>
                            <MainPage />
                        </Route>
                        <Redirect to={ROOT} />
                    </Switch>
                </Router>
            </Provider>
        </SnackbarProvider>
    )
}

export default App
