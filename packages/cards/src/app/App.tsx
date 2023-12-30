import React, { useEffect } from 'react';
import CardsList from '@modules/cards/pages/CardsList';
import CardDetail from '@modules/cards/pages/CardDetail';
import { getCards } from '@modules/cards/store/features/cards/slice';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppDispatch } from '@modules/cards/store/store';

const App = (): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      await dispatch(getCards());
    };
    load();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/cards" element={<CardsList />} />
        <Route path="/cards/:cardId" element={<CardDetail />} />
      </Routes>
    </Router>
  );
};
export default App;
