import React from "react";
import Logo from "@host/components/Logo/Logo";
import Nav from "@host/components/Nav/Nav";
import InfoUser from "@host/components/InfoUser/InfoUser";

import {
  Layout,
  Side,
  SideTop,
  SideBottom,
  Main,
  Wrapper,
  Content,
  Header,
  H1,
  HeaderSide,
  HeaderMain,
  Desc,
  Inside
} from './MainLayout.style'

type Props = {
  title: string,
  desc: string,
  children: any
}


const MainLayout = ({ children, title, desc }: Props): JSX.Element => {
  return <Layout>
    <Wrapper>
      <Content>
        <Side>
          <SideTop>
            <Logo/>
          </SideTop>
          <SideBottom>
            <Nav/>
          </SideBottom>
        </Side>
        <Main>
          <Header>
            <HeaderSide>
              <H1>{title}</H1>
              <Desc>{desc}</Desc>
            </HeaderSide>
            <HeaderMain>
              <InfoUser/>
            </HeaderMain>
          </Header>
          <Inside>
            {children}
          </Inside>
        </Main>
      </Content>
    </Wrapper>
  </Layout>
}

export default MainLayout
