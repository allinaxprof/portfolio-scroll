import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import QA from './QA';
import Intro from './Intro';
import About from './About';

const Main = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/QA" element={<QA />} />
    <Route exact path="/Intro" element={<Intro />} />
    <Route exact path="/About" element={<About />}></Route>
  </Routes>
);

export default Main;