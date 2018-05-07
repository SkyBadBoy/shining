import React, { Component } from 'react';
import { Spin, Alert } from 'antd'
import { showPublicLoading, hidePublicLoading } from '../../redux/actions'
import {connect} from 'react-redux'

import './loading.scss'
@connect(
    state=>state,
    { showPublicLoading, hidePublicLoading }
)
class Loading extends Component {

    render() {
        let loading = null;
        loading = this.props.publicLoading
            ? <div className="loadding"><Spin tip="Loading..."></Spin></div>
            : null
        return (
            <div>
                { loading }
            </div>
        );
    }
}

export default Loading;
