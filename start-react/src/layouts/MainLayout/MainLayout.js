import React, { Component } from 'react';


import { Layout, Breadcrumb } from 'antd';

import HeaderLayout from '../../layouts/Header/HeaderLayout'
import FooterLayout from '../../layouts/Footer/FooterLayout'

const { Content } = Layout;

class MainLayout extends Component {
    render() {
        return (
            <Layout>
                <HeaderLayout/>
                    <Content style={{ padding: '10px', marginTop: 64 }}>
                        {/*{ React.cloneElement(this.props.children, this.props) }*/}
                        { React.Children.only(this.props.children) }
                    </Content>
                <FooterLayout/>
            </Layout>
        )
    }
}

export default MainLayout