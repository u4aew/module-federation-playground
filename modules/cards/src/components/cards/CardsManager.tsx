import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Body, Footer, Header, Main, Title, Side } from "./CardsManager.style";
import PreviewCard from "@modules/cards/components/PreviewCard/PreviewCard";
import {userCardsSelector} from "@modules/cards/store/features/cards/selectors";

export const CardsManager = (): JSX.Element => {
  const cards = useSelector(userCardsSelector);

  console.log(cards)

  return <Wrapper>
    <Header>
      <Title>
        Cards
      </Title>
    </Header>
    <Body>
      <Main>
        <PreviewCard/>
      </Main>
      <Side></Side>
    </Body>
    <Footer></Footer>
  </Wrapper>
}
