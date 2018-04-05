import React, { Component } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

class FooterLayout extends Component {
    render() {
        return (
            <Footer style={{ textAlign: 'center' }}>
                www.ntpush.cn ©2018 Created by nTpush
            </Footer>
        )
    }
}

export default FooterLayout