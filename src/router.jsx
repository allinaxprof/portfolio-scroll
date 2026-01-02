import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import QA from './QA';

const Main = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/QA" element={<QA />} />
  </Routes>
);

export default Main;