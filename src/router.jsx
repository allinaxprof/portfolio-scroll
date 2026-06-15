import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import QA from './QA';
import Intro from './Intro';
import About from './About';
import Assignment1 from './projects/Assignment1';
import Blog from './Blog';
import Resume from './blogs/Resume';
import Kuleshov from './projects/Kuleshov';
import TransWeekApp from './projects/transWeekApp';

const Main = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/QA" element={<QA />} />
    <Route exact path="/Intro" element={<Intro />} />
    <Route exact path="/About" element={<About />}></Route>
    <Route exact path="/projects/Assignment1" element={<Assignment1 />} />
    <Route exact path="/Blog" element={<Blog />} />
    <Route exact path="/Resume" element={<Resume />} />
    <Route exact path="/projects/Kuleshov" element={<Kuleshov />} />
    <Route exact path ="/projects/TransAwarenessWeek" element={<TransWeekApp />} />
  </Routes>
);

export default Main;