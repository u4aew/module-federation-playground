import React from "react";
import { List, ListIcon, ListIconHover, ListItem, ListLink } from "./Nav.style";
import { Link } from 'react-router-dom';
import overview from './icons/overview.svg'
import overviewHover from './icons/overview-hover.svg'

import transaction from './icons/transaction.svg'
import transactionHover from './icons/transaction-hover.svg'


import cards from './icons/cards.svg'
import cardsHover from './icons/cards-hover.svg'

import invoices from './icons/invoices.svg'
import invoicesHover from './icons/invoices-hover.svg'

import goals from './icons/goals.svg'
import goalsHover from './icons/goals-hover.svg'

import settings from './icons/settings.svg'
import settingsHover from './icons/settings-hover.svg'
import styles from './style.module.scss'

const Nav = (): JSX.Element => {
  return <div>
    <List>
      <ListItem>
        <Link className={styles.link} to="/">
          <ListIcon>
            <img src={overview} alt=""/>
          </ListIcon>
          <ListIconHover>
            <img src={overviewHover} alt=""/>
          </ListIconHover>
          Overview
        </Link>
      </ListItem>
      <ListItem>
        <Link className={styles.link} to="/transactions">
          <ListIcon>
            <img src={transaction} alt=""/>
          </ListIcon>
          <ListIconHover>
            <img src={transactionHover} alt=""/>
          </ListIconHover>
          Transaction
        </Link>
      </ListItem>
      <ListItem>
        <ListLink href="#">
          <ListIcon>
            <img src={cards} alt=""/>
          </ListIcon>
          <ListIconHover>
            <img src={cardsHover} alt=""/>
          </ListIconHover>
          Cards
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink href="#">
          <ListIcon>
            <img src={invoices} alt=""/>
          </ListIcon>
          <ListIconHover>
            <img src={invoicesHover} alt=""/>
          </ListIconHover>
          Invoices
        </ListLink>
      </ListItem>
      <ListItem>
        <ListLink href="#">
          <ListIcon>
            <img src={settings} alt=""/>
          </ListIcon>
          <ListIconHover>
            <img src={settingsHover} alt=""/>
          </ListIconHover>
          Settings
        </ListLink>
      </ListItem>
    </List>
  </div>
}

export default Nav
