import React from 'react'

import {
  Header,
  Wrapper,
  Body,
  Footer,
  Title,
  Caption,
  Bin,
  Cols,
  ColsItem,
  ColsTitle,
  ColsDesc
} from "./PreviewCard.style";

const PreviewCard = (): JSX.Element => {
  return <Wrapper className={'is-blue'}>
    <Header>
      <Title>
        cloudcash
      </Title>
      <Caption>
        premium account
      </Caption>
    </Header>
    <Body>
      <Bin>5789 **** **** 2847</Bin>
    </Body>
    <Footer>
      <Cols>
        <ColsItem>
          <ColsTitle>
            Card holder
          </ColsTitle>
          <ColsDesc>
            Mike Smith
          </ColsDesc>
        </ColsItem>
        <ColsItem>
          <ColsTitle>
            Expire date
          </ColsTitle>
          <ColsDesc>
            06/21
          </ColsDesc>
        </ColsItem>
      </Cols>
    </Footer>
  </Wrapper>
}

export default PreviewCard
