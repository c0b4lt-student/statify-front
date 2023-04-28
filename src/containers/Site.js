import React from 'react';
import {Route, Routes} from "react-router-dom";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";

function Site(props) {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LogIn />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/register" element={<Register />} />

        <Route path='*' element={<div>La page demandée n'existe pas</div>} />
      </Routes>
    </>
  );
}

export default Site;