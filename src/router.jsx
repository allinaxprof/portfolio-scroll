import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import QA from './QA';
import Intro from './Intro';

const Main = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/QA" element={<QA />} />
    <Route path="/Intro" element={<Intro />} />
  </Routes>
);

export default Main;