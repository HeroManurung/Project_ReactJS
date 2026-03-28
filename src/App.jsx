import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroProfile from './HeroProfile';
import NezaProfile from './NezaProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<p>Ini halaman utama kelompok. Buka /hero-manurung untuk lihat profilku.</p>} />

        
        <Route path="/hero-manurung" element={<HeroProfile />} />
        <Route path="/neza-frischa" element={<NezaProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;