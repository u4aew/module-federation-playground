import React from 'react';
import styles from './style.module.scss';

type Props = {
  pan: string;
  name: string;
};

const PreviewCard = ({ name, pan }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.main}>
        <div className={styles.pan}>{pan}</div>
      </div>
      <div className={styles.side}>
        <div className={styles.info}>
          <div className={styles.item}>
            <div className={styles.title}>Cardholder</div>
            <div className={styles.value}>{name}</div>
          </div>
          <div className={styles.item}>
            <div className={styles.title}>Expiry</div>
            <div className={styles.value}>99/99</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
