import React from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useSelector } from 'react-redux';
import { userCardsSelector } from '@modules/cards/store/features/cards/selectors';
import { Link } from 'react-router-dom';

interface DataType {
  key: string;
  pan: string;
  name: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Pan',
    dataIndex: 'pan',
    key: 'pan',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (value) => (
      <Space size="middle">
        <Link to={`/cards/${value.key}`}>Details</Link>
      </Space>
    ),
  },
];

const CardsList = () => {
  const { cards } = useSelector(userCardsSelector);

  if (!cards) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      Hello Hello Hello
      <Table
        columns={columns}
        dataSource={cards.map(({ id, name, pan }) => ({
          key: id,
          name,
          pan,
        }))}
      />
    </div>
  );
};

export default CardsList;
