import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import LoginFormPage from "../containers/LoginPage/LoginPage";
import IndexPage from "../containers/IndexPage/IndexPage";

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={ LoginFormPage } />
                    <Route path="/index" component={ IndexPage } />
                </Switch>
            </BrowserRouter>
        );
    }
}
export default Router;