import React, { useEffect, useState } from 'react';
import { Button, Card, List, Modal, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getCardDetails } from '@modules/cards/store/features/cards/slice';
import { AppDispatch } from '@modules/cards/store/store';
import { userCardsDetailsSelector } from '@modules/cards/store/features/cards/selectors';
import { USER_ROLE, onChangeUserRole } from 'shared';

export const CardDetail = () => {
  const dispatch: AppDispatch = useDispatch();
  const cardDetails = useSelector(userCardsDetailsSelector);
  const [role, setRole] = useState(USER_ROLE);

  useEffect(() => {
    const load = async () => {
      await dispatch(getCardDetails('1'));
    };
    load();
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showEditModal = () => {
    setIsModalVisible(true);
  };

  const handleEdit = () => {
    setIsModalVisible(false);
  };

  const handleDelete = () => {
    notification.open({
      message: 'Card delete',
      description: 'Card delete success.',
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
  };

  useEffect(() => {
    onChangeUserRole(setRole);
  }, []);

  if (!cardDetails) {
    return <div>loading...</div>;
  }

  const getActions = () => {
    switch (role) {
      case 'ADMIN':
        return [
          <Button key="edit" type="primary" onClick={showEditModal}>
            Edit
          </Button>,
          <Button key="delete" type="dashed" onClick={handleDelete}>
            Delete
          </Button>,
        ];
      default:
        return [];
    }
  };

  return (
    <>
      <Card
        actions={getActions()}
        title={`Card Details - ${cardDetails.cardHolderName}`}
      >
        <p>PAN: {cardDetails.pan}</p>
        <p>Expiry: {cardDetails.expiry}</p>
        <p>Card Type: {cardDetails.cardType}</p>
        <p>Issuing Bank: {cardDetails.issuingBank}</p>
        <p>Credit Limit: {cardDetails.creditLimit}</p>
        <p>Available Balance: {cardDetails.availableBalance}</p>
        <List
          header={<div>Recent Transactions</div>}
          bordered
          dataSource={cardDetails.recentTransactions}
          renderItem={(item) => (
            <List.Item>
              {/*@ts-ignore*/}
              {item.date} - {item.amount} {item.currency} - {item.description}
            </List.Item>
          )}
        />
      </Card>
      <Modal
        title="Edit transactions"
        visible={isModalVisible}
        onOk={handleEdit}
        onCancel={() => setIsModalVisible(false)}
      >
        <p>Form edit card</p>
      </Modal>
    </>
  );
};
