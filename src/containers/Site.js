import React from 'react';
import PingTests from "../tests/PingTests";
import {Route, Routes} from "react-router-dom";
import LogIn from "../pages/LogIn";

function Site(props) {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<PingTests />} />
        <Route exact path="/login" element={<LogIn />} />

        <Route path='*' element={<div>La page demandée n'existe pas</div>} />
      </Routes>
    </>
  );
}

export default Site;