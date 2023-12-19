import React, { useEffect, useState } from 'react';
import { getTransactionDetails } from '@modules/transactions/store/features/transactions/slice';
import { AppDispatch } from '@modules/transactions/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Descriptions, Button, Modal, notification } from 'antd';
import { userTransactionDetailsSelector } from '@modules/transactions/store/features/transactions/selectors';

export const TransactionDetails = () => {
  const dispatch: AppDispatch = useDispatch();
  const transaction = useSelector(userTransactionDetailsSelector);
  useEffect(() => {
    const load = async () => {
      await dispatch(getTransactionDetails('1'));
    };
    load();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showEditModal = () => {
    setIsModalVisible(true);
  };

  const handleEdit = () => {
    console.log('Submit edit');
    setIsModalVisible(false);
  };

  const handleDelete = () => {
    notification.open({
      message: 'Transaction delete',
      description: 'Transaction delete success.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  if (!transaction) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Card
        actions={[
          <Button key="edit" type="primary" onClick={showEditModal}>
            Edit
          </Button>,
          <Button key="delete" type="dashed" onClick={handleDelete}>
            Delete
          </Button>,
        ]}
        title="Transaction Details"
      >
        <Descriptions column={1}>
          <Descriptions.Item label="Transaction ID">
            {transaction.transactionId}
          </Descriptions.Item>
          <Descriptions.Item label="Date">{transaction.date}</Descriptions.Item>
          <Descriptions.Item label="Sum">{`${transaction.sum} ${transaction.currency}`}</Descriptions.Item>
          <Descriptions.Item label="Recipient Name">
            {transaction.recipientName}
          </Descriptions.Item>
          <Descriptions.Item label="Recipient Account">
            {transaction.recipientAccount}
          </Descriptions.Item>
          <Descriptions.Item label="Sender Name">
            {transaction.senderName}
          </Descriptions.Item>
          <Descriptions.Item label="Sender Account">
            {transaction.senderAccount}
          </Descriptions.Item>
          <Descriptions.Item label="Transaction Type">
            {transaction.transactionType}
          </Descriptions.Item>
          <Descriptions.Item label="Description">
            {transaction.description}
          </Descriptions.Item>
          <Descriptions.Item label="Status">
            {transaction.status}
          </Descriptions.Item>
        </Descriptions>
      </Card>
      <Modal
        title="Edit transactions"
        visible={isModalVisible}
        onOk={handleEdit}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>Form edit transactions</p>
      </Modal>
    </>
  );
};
