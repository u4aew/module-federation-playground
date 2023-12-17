import React from 'react';
import { Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useSelector } from 'react-redux';
import { userTransactionsSelector } from '@modules/transactions/store/features/transactions/selectors';
import { Link } from 'react-router-dom';

interface DataType {
  key: string;
  date: string;
  sum: string;
  currency: string;
  name: string;
  pan: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Sum',
    dataIndex: 'sum',
    key: 'sum',
  },
  {
    title: 'Currency',
    dataIndex: 'currency',
    key: 'currency',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <Link to={`/transactions/${record.key}`}>Details</Link>
      </Space>
    ),
  },
];

export const TransactionsList = () => {
  const transactions = useSelector(userTransactionsSelector);

  if (!transactions) {
    return <div>Loading...</div>;
  }

  const dataSource = transactions.map(({ id, date, sum, currency }) => ({
    key: id.toString(),
    date,
    sum,
    currency,
  }));

  return (
    <div>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};
