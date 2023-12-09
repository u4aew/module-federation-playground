import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from "../pages/Main";
const Transactions = lazy(() => import('../pages/Transactions'));

const Pages = () => {
  return (
      <Router basename={'/'}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/'} element={<Main/>}/>
            <Route path={'/transactions'} element={<Transactions/>}/>
          </Routes>
        </Suspense>
      </Router>
  );
}

export default Pages
