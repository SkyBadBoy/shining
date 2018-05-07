import React, { Component } from 'react';
import { Button } from 'antd';
import MainLayout from '../../layouts/MainLayout/MainLayout'

class SubPage extends Component {
  render() {
    return (
      <MainLayout>
        <div className="App">
            <Button>SubPage</Button>
          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </MainLayout>
    );
  }
}

export default SubPage;
