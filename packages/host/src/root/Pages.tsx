import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from '../pages/Main';
import { MainLayout } from '@host/layouts/MainLayout';

const Cards = React.lazy(() => import('remote-modules-cards/Cards'));
const Transactions = React.lazy(
  () => import('remote-modules-transactions/Transactions'),
);

const Pages = () => {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/'} element={<Main />} />
            <Route path={'/cards/*'} element={<Cards />} />
            <Route path={'/transactions/*'} element={<Transactions />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </Router>
  );
};
export default Pages;
