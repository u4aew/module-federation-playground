import React from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useSelector } from 'react-redux';
import { userCardsSelector } from '@modules/cards/store/features/cards/selectors';
import PreviewCard from '@modules/cards/components/PreviewCard/PreviewCard';
import { Link } from 'react-router-dom';

interface DataType {
  key: string;
  pan: string;
  name: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Cardholder',
    dataIndex: 'name',
    key: 'name',
    render: (value, record) => {
      console.log(record, 'record');
      return (
        <PreviewCard
          pan={record.pan}
          name={record.name}
        />
      );
    },
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

export const CardsList = () => {
  const cards = useSelector(userCardsSelector);

  if (!cards) {
    return <div>Loading...</div>;
  }
  return (
    <div>
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
