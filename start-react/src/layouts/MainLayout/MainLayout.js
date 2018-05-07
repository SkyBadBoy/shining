import React, { Component } from 'react';

import { Layout, Row, Col } from 'antd';

import { Route } from 'react-router-dom'

import HeaderLayout from '../../layouts/Header/HeaderLayout'
import FooterLayout from '../../layouts/Footer/FooterLayout'
import MenuLayout from '../../layouts/Menu/MenuLayout'

import RouterThird from '../../router/RouterThird'

import './main.scss';
const { Content } = Layout;

class MainLayout extends Component {
    render() {
        return (
            <Layout>
               <HeaderLayout />
                    <div className="menu-container">
                      <Row>
                       <Col span={3}>
                        <div className='main-left'><MenuLayout /></div>
                       </Col>
                       <Col span={21}>
                          <div className='main-right'>
                          <Content style={{ padding: '5   px'}}>
                              <RouterThird/>
                          </Content>
                            <FooterLayout/>
                          </div>
                       </Col>
                     </Row>
                    </div>
            </Layout>
        )
    }
}
export default MainLayout
