import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

// 1. IMPORT KOMPONEN HOME KAMU
import Home from './Home'; 

import Rian from './pages/Rian';
import HeroProfile from './HeroProfile';
import OktoviaProfile from './OktoviaProfile';
import NezaProfile from './NezaProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        {/* 2. GANTI <p> DENGAN <Home /> */}
        <Route path="/" element={<Home />} />

        {/* 3. PASTIKAN PATH DI SINI SAMA DENGAN LINK DI HOME.JSX */}
        <Route path="/hero-manurung" element={<HeroProfile />} />
        <Route path="/rian" element={<Rian />} />
        <Route path="/oktovia-nababan" element={<OktoviaProfile />} />
        <Route path="/neza-frischa" element={<NezaProfile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;