import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Main } from "../pages/Main";

const Pages = () => {
  return <Router basename={'/'}>
    <Routes>
      <Route path={'/'} element={<Main/>}/>
    </Routes>
  </Router>
}

export default Pages
