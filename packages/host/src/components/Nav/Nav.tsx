import React from 'react';
import { Menu } from 'antd';
import {
  UserOutlined,
  CreditCardOutlined,
  TransactionOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const Nav = (): JSX.Element => {
  const navigate = useNavigate();

  const onNavigate = (e) => {
    navigate(e.key);
  };

  return (
    <Menu
      onClick={onNavigate}
      theme="dark"
      mode="inline"
      defaultSelectedKeys={['1']}
      items={[
        {
          key: '/',
          icon: <UserOutlined />,
          label: 'Overview',
        },
        {
          key: '/cards',
          icon: <CreditCardOutlined />,
          label: 'Cards',
        },
        {
          key: '/transactions',
          icon: <TransactionOutlined />,
          label: 'Transactions',
        },
      ]}
    ></Menu>
  );
};

export default Nav;
