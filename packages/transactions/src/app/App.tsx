import React, { useEffect } from 'react';
import TransactionsList from '@modules/transactions/pages/TransactionsList';
import TransactionDetails from '@modules/transactions/pages/TransactionDetails';
import { getTransactions } from '@modules/transactions/store/features/transactions/slice';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppDispatch } from '@modules/transactions/store/store';

const App = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      await dispatch(getTransactions());
    };
    load();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path={'/transactions'} element={<TransactionsList />} />
        <Route
          path={'/transactions/:transactionId'}
          element={<TransactionDetails />}
        />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};
export default App;
