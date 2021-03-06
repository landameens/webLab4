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
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'

const initialState = {
    formState: {
        x: null,
        y: null,
        r: 1,
    },
    dots: [],
}

const theme = createMuiTheme({
    breakpoints: {
        values: {
            xs: 854,
            sm: 900,
            lg: 1260,
        },
    },
})

const store = configureStore(initialState)

function App() {
    return (
        <SnackbarProvider maxSnack={2}>
            <Provider store={store}>
                <Router history={history}>
                    <Switch>
                        <Route exact path={ROOT}>
                            <MuiThemeProvider theme={theme}>
                                <SignInPage />
                            </MuiThemeProvider>
                        </Route>
                        <Route path={SIGN_UP}>
                            <MuiThemeProvider theme={theme}>
                                <SignUpPage />
                            </MuiThemeProvider>
                        </Route>
                        <Route path={MAIN}>
                            <MuiThemeProvider theme={theme}>
                                <MainPage />
                            </MuiThemeProvider>
                        </Route>
                        <Redirect to={ROOT} />
                    </Switch>
                </Router>
            </Provider>
        </SnackbarProvider>
    )
}

export default App
