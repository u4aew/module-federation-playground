import React, {useEffect} from 'react';
import CardsManager from "@modules/cards/components/CardsManager";
import {getCards} from "@modules/cards/store/features/cards/slice";
import {useDispatch, useSelector} from "react-redux";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const load = async () => {
    const fetch = await dispatch(getCards('test'));
  }

  useEffect(() => {}, [
    load()
  ])

  return <CardsManager/>;
}
export default App
