import React from 'react';
import { Route, Switch } from 'react-router-dom'

import NoMatch from "../containers/NoMatch/NoMatch";
const Demo1 = () => {
    return (
        <div>
            demo1
        </div>
    );
}

const Demo2 = () => {
    return (
        <div>
            demo2
        </div>
    );
}
class RouterThird extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/index/1" component={Demo1}/>
                    <Route path="/index/2" component={Demo2}/>
                    <Route component={ NoMatch } />
                </Switch>
            </div>
        );
    }
}
export default RouterThird;
