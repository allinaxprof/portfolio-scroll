import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import QA from './QA';
import Intro from './Intro';
import About from './About';

const Main = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/QA" element={<QA />} />
    <Route path="/Intro" element={<Intro />} />
    <Route path="/About" element={<About />}></Route>
  </Routes>
);

export default Main;