import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Rian from './pages/Rian'
import React from 'react';
import HeroProfile from './HeroProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<p>Ini halaman utama kelompok. Buka localhost:5173/hero-manurung untuk membuka halaman profile Heri Manurung. 
          Buka localhost:5173/Rian untuk membuka halaman profile rian.</p>} />

        
        <Route path="/hero-manurung" element={<HeroProfile />} />
        <Route path="/rian" element={<Rian />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
