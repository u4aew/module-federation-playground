import React from 'react';
import MainLayout from '@host/layouts/MainLayout/MainLayout';
import { Cols, ColsItem, AppWrapper } from "./Main.style";

export const Main = () => (
  <MainLayout title='Weekly sumup' desc='Get summary of your weekly online transactions here.'>
    <React.Suspense fallback="Loading...">
      <Cols>
        <ColsItem>
          <AppWrapper>
              Overview
          </AppWrapper>
        </ColsItem>
        <ColsItem>
        </ColsItem>
      </Cols>
    </React.Suspense>
  </MainLayout>
)
