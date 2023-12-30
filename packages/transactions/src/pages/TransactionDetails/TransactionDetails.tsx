import React, { useEffect, useState } from 'react';
import { getTransactionDetails } from '@modules/transactions/store/features/transactions/slice';
import { AppDispatch } from '@modules/transactions/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Descriptions, Button, Modal, notification } from 'antd';
import { userTransactionDetailsSelector } from '@modules/transactions/store/features/transactions/selectors';
import {
  EnumRole,
  onChangeUserRole,
  stopListeningToUserRoleChange,
  USER_ROLE,
} from 'shared';

export const TransactionDetails = () => {
  const dispatch: AppDispatch = useDispatch();
  const transaction = useSelector(userTransactionDetailsSelector);
  const [role, setRole] = useState(USER_ROLE);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showEditModal = () => {
    setIsModalVisible(true);
  };

  const handleEdit = () => {
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

  const getActions = () => {
    switch (role) {
      case EnumRole.admin:
        return [
          <Button key="edit" type="primary" onClick={showEditModal}>
            Edit
          </Button>,
          <Button key="delete" type="dashed" onClick={handleDelete}>
            Delete
          </Button>,
        ];
      case EnumRole.manager:
        return [
          <Button key="edit" type="primary" onClick={showEditModal}>
            Edit
          </Button>,
        ];
      default:
        return [];
    }
  };

  useEffect(() => {
    const load = async () => {
      await dispatch(getTransactionDetails('1'));
    };
    load();
    onChangeUserRole(setRole);
    return stopListeningToUserRoleChange;
  }, []);

  if (!transaction) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Card actions={getActions()} title="Transaction Details">
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
        <p>
          <b>*For demonstration events from the host, change the user role.</b>
        </p>
      </Card>
      <Modal
        title="Edit transactions"
        open={isModalVisible}
        onOk={handleEdit}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>Form edit transactions</p>
      </Modal>
    </>
  );
};
