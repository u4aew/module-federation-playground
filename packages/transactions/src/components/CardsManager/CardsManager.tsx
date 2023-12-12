import React from 'react';
import { useSelector } from 'react-redux';
import { userTransactionsSelector } from '@modules/transactions/store/features/transactions/selectors';
import styles from './style.module.scss';
import PreviewCard from '@modules/transactions/components/PreviewCard/PreviewCard';

export const CardsManager = (): JSX.Element => {
  const { transactions } = useSelector(userTransactionsSelector);

  if (!transactions) {
    return <div>loading...</div>;
  }

  return (
    <div className={styles.item}>
      {transactions?.map((item) => <PreviewCard key={item.id} {...item} />)}
    </div>
  );
};
