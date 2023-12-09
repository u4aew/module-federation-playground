import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {userCardsSelector} from "@modules/transactions/store/features/cards/selectors";
import styles from './style.module.scss'
import PreviewCard from "@modules/transactions/components/PreviewCard/PreviewCard";

export const CardsManager = (): JSX.Element => {
    const { cards: { cards } } = useSelector(userCardsSelector);

    if (!cards) {
        return <div>loading...</div>
    }

    return <div className={styles.item}>
        {cards?.map(item => <PreviewCard key={item.id} {...item} />)}
    </div>
}
