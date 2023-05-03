import React from 'react';
import {Route, Routes} from "react-router-dom";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";
import Homepage from "../pages/Homepage";

function Site(props) {
  return (
    <>
      <Routes>
        <Route exact path="/homepage" element={<Homepage />} />
        <Route exact path="/login" element={<LogIn />} />
        <Route exact path="/register" element={<Register />} />

        <Route path='*' element={<div>La page demandée n'existe pas</div>} />
      </Routes>
    </>
  );
}

export default Site;