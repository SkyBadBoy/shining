import React, { Component } from 'react';
import { Button } from 'antd';
import RouterChild from '../../router/RouterSecond'

class ChildRoute extends Component {
  render() {
    return (
        <RouterChild />
    );
  }
}

export default ChildRoute;
