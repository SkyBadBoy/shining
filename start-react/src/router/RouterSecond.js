import React from 'react';
import { Route, Switch } from 'react-router-dom'

import LoginFormPage from "../containers/LoginPage/LoginPage";
import IndexPage from "../containers/IndexPage/IndexPage";
import NoMatch from "../containers/NoMatch/NoMatch";

class Router extends React.Component {
    render() {
        return (
          <Switch>
              <Route path="/" exact component={ LoginFormPage } />
              <Route path="/index" component={ IndexPage } />
              <Route component={ NoMatch } />
          </Switch>
        );
    }
}
export default Router;
