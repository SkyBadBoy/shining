import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import ChildRoute from "../containers/ChildRoute/ChildRoute";

class Router extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <ChildRoute />
            </BrowserRouter>
        );
    }
}
export default Router;
