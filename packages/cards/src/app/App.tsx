import React, { useEffect } from 'react';
import CardList from '@modules/cards/pages/CardsList/CardList';
import CardDetail from '@modules/cards/pages/CardDetail/CardDetail';
import { getCards } from '@modules/cards/store/features/cards/slice';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      //@ts-ignore
      await dispatch(getCards('test'));
      const event = new Event('loadCards');
      window.dispatchEvent(event);
    };
    load();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/cards" element={<CardList />} />
        <Route path="/cards/:cardId" element={<CardDetail />} />
      </Routes>
    </Router>
  );
};
export default App;
