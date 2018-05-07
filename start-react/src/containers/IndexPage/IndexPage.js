import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import MainLayout from '../../layouts/MainLayout/MainLayout'
import List from '../../components/Index/List/List'

const { Header, Content, Footer } = Layout;


class IndexPage extends Component {
    render() {
        return (
            <MainLayout>
                <List/>
            </MainLayout>
        )
    }
}
export default IndexPage
