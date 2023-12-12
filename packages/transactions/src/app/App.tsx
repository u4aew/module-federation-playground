import React, { useEffect } from 'react';
import CardsManager from "@modules/transactions/components/CardsManager";
import { getCards } from "@modules/transactions/store/features/cards/slice";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    const load = async () => {
      // @ts-ignore
      await dispatch(getCards('test'));
      const event = new Event('loadCards');
      window.dispatchEvent(event);
    }
    load();
  }, [])

  return (
      <Router>
        <Routes>
          <Route path={'/*'} element={<CardsManager/>} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
  );
}
export default App
