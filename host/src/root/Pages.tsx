import React, { Suspense, useEffect, useState, FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from "../pages/Main";
import { Layout, Menu, Button, theme } from 'antd';
import Nav from "@host/components/Nav/Nav";

const Cards = React.lazy(() => import("remote-modules-cards/Cards"));
const Transactions = React.lazy(() => import("remote-modules-transactions/Transactions"));
const { Header, Sider, Content } = Layout;


import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';


const Pages = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return <Router>
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="demo-logo-vertical" />
                <Nav />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: colorBgContainer,
                    }}
                >
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path={'/'} element={<Main/>}/>
                                <Route path={'/cards/*'} element={<Cards />} />
                                <Route path={'/transactions/*'} element={<Transactions />} />
                            </Routes>
                        </Suspense>
                </Content>
            </Layout>
        </Layout>
    </Router>
}
export default Pages;
