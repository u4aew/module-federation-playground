import React from "react";
import CardsManager from "@modules/cards/components/CardsManager";
import {Outlet, Route, Routes} from 'react-router-dom';

const CardList = () => {
    return <div>
        <CardsManager/>
        <Outlet/>
    </div>
}

export default CardList
