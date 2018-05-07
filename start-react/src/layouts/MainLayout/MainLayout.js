import React, { Component } from 'react';

import { Layout, Row, Col } from 'antd';


import HeaderLayout from '../../layouts/Header/HeaderLayout'
import FooterLayout from '../../layouts/Footer/FooterLayout'
import MenuLayout from '../../layouts/Menu/MenuLayout'

import RouterThird from '../../router/RouterThird'

import Loading from '../../components/Loading/Loading'

import './main.scss';
const { Content } = Layout;

class MainLayout extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Layout>
                    <Loading/>
                    <HeaderLayout />
                    <div className="menu-container">
                      <Row>
                       <Col span={3}>
                        <div className='main-left'><MenuLayout /></div>
                       </Col>
                       <Col span={21}>
                          <div className='main-right'>
                          <Content style={{ padding: '5px'}}>
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
