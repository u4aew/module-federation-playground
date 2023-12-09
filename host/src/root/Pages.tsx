import React, { Suspense, useEffect, useState, FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from "../pages/Main";
const Transactions = React.lazy(() => import("remote-modules-transactions/Transactions"));
const Cards = React.lazy(() => import("remote-modules/Cards"));
const Pages = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/cards/*'} element={<Cards />} />
                    <Route path={'/transactions/*'} element={<Transactions />} />
                </Routes>
            </Suspense>
        </Router>
    );
}
export default Pages;
