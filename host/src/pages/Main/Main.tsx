import React from 'react';

import MainLayout from '@host/layouts/MainLayout/MainLayout';
import ErrorBoundary from "@host/ErrorBoundary";

import { Cols, ColsItem } from "./Main.style";

const Cards = React.lazy(() => import("remote-modules/Cards"));

export const Main = () => (
  <MainLayout title='Weekly sumup' desc='Get summary of your weekly online transactions here.'>
    <React.Suspense fallback="Loading...">
      <Cols>
        <ColsItem>
          <ErrorBoundary>
            <Cards/>
          </ErrorBoundary>
        </ColsItem>
        <ColsItem>
        </ColsItem>
      </Cols>
    </React.Suspense>
  </MainLayout>
)
