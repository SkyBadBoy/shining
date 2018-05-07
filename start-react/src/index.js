import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, createStore  } from 'react-redux'

import './reset.css'
import Router from './router/Router';
import $http from './service/index'

import registerServiceWorker from './registerServiceWorker';
import store from './redux/index'




$http.get('Login')
    .then(res=>{
        console.log(res,'dd')
    })


ReactDOM.render(
    <Provider store={store}>
        <Router/>
    </Provider>
        ,
 document.getElementById('root'));
registerServiceWorker();
