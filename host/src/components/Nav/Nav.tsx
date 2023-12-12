import React from "react";
import cards from './icons/cards.svg'
import {Menu} from "antd";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
import {useNavigate} from "react-router-dom";

const Nav = (): JSX.Element => {
    const navigate = useNavigate()

    const onNavigate = (e) => {
        navigate(e.key)
    }

    return <Menu
        onClick={onNavigate}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
            {
                key: '/',
                icon: <UserOutlined/>,
                label: 'Overview',
            },
            {
                key: '/cards',
                icon: <VideoCameraOutlined/>,
                label: 'Cards',
            },
            {
                key: '/transactions',
                icon: <UploadOutlined/>,
                label: 'Transactions',
            },
        ]}
    >
    </Menu>
}

export default Nav
