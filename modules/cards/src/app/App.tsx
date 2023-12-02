import React, {useEffect} from 'react';
import CardsManager from "@modules/cards/components/CardsManager";
import {getCards} from "@modules/cards/store/features/cards/slice";
import {useDispatch, useSelector} from "react-redux";
import useWindowEventListener from "@modules/cards/hooks/useWindowEventListener";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  window.addEventListener('loadCards', () => {
    console.log('loadCards module')
  });
  useEffect( () => {
    const load = async () => {
      // @ts-ignore
      await dispatch(getCards('test'));
      const event = new Event('loadCards');
      window.dispatchEvent(event);
    }
    load();
  }, [])

  return <CardsManager/>;
}
export default App
