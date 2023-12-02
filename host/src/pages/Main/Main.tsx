import React from 'react';

import MainLayout from '@host/layouts/MainLayout/MainLayout';
import ErrorBoundary from "@host/ErrorBoundary";

import { Cols, ColsItem, AppWrapper, AppName } from "./Main.style";

const Cards = React.lazy(() => import("remote-modules/Cards"));

export const Main = () => (
  <MainLayout title='Weekly sumup' desc='Get summary of your weekly online transactions here.'>
    <React.Suspense fallback="Loading...">
      <Cols>
        <ColsItem>
          <AppWrapper>
            <AppName>
              <a target="_blank" href="https://microfrontend.fancy-app.site/apps/cards/">App cards</a> - /api/cards/list
            </AppName>
            <ErrorBoundary>
              <Cards/>
            </ErrorBoundary>
          </AppWrapper>
        </ColsItem>
        <ColsItem>
        </ColsItem>
      </Cols>
    </React.Suspense>
  </MainLayout>
)
