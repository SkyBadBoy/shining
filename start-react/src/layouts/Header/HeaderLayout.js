import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Icon } from 'antd';
const { Header } = Layout;
const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
    </Menu>
);
class HeaderLayout extends Component {
    render() {
        return (
            <Header style={{ position: 'fixed', width: '100%' }}>
                <div style={{ float: 'right' }}>
                    <Dropdown overlay={menu} >
                        <a className="ant-dropdown-link" href="#">
                            王拉拉 <Icon type="down" />
                        </a>
                    </Dropdown>
                    <a href="#" style={{ marginLeft: '20px' }}>退出</a>
                </div>
            </Header>
        )
    }
}
export default HeaderLayout