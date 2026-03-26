import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HeroProfile from './HeroProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<p>Ini halaman utama kelompok. Buka /hero-manurung untuk lihat profilku.</p>} />

        
        <Route path="/hero-manurung" element={<HeroProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;