import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Tambahkan ini di bagian atas
import formal from './assets/formal.jpeg'; 
import rian from './assets/rian.jpeg';
import fotoneza from './assets/fotoneza.png';
import okto from './assets/okto.jpeg'; 

const Home = () => {
  // Data Anggota Kelompok 7 (Sudah disesuaikan dengan route di App.jsx)
  const teamMembers = [
    {
      id: 1,
      name: "Hero Manurung",
      nim: "253140700111014",
      role: "Web Developer",
      link: "/hero-manurung", // Sesuai dengan Route di App.jsx
      image: formal,
      isReady: true 
    },
    {
      id: 2,
      name: "Hilmi Yusrian",
      nim: "253140700111017", // Ganti dengan NIM Rian yang asli
      role: "Backend Dev",
      link: "/rian", // Sesuai dengan Route di App.jsx
      image: rian,
      isReady: true 
    },
    {
      id: 3,
      name: "Neza Frischa",
      nim: "253140700111015",
      role: "UI/UX Designer",
      link: "/neza-frischa",
      image: fotoneza,
      isReady: true
    },
    {
      id: 4,
      name: "Oktovia Nababan",
      nim: "253140700111013", 
      role: "Frontend Dev",
      link: "/Oktovia-Nababan",
      image: okto,
      isReady: true
    }
  ];

  // State untuk melacak urutan "karakter" yang sedang di tengah
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < teamMembers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Fungsi untuk scroll mulus ke bagian carousel anggota
  const scrollToMembers = () => {
    document.getElementById('carousel-anggota').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Background utama menggunakan gradien pastel dari color palette
    <div className="min-h-screen bg-gradient-to-br from-[#DAEBE3] via-[#FDE8D3] to-[#CFD6C4] font-sans overflow-x-hidden relative">
      
      {/* ===== EFEK LIQUID BACKGROUND BLOBS ===== */}
      <div className="absolute top-0 left-10 w-96 h-96 bg-[#99CDD8] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse"></div>
      <div className="absolute top-40 right-10 w-96 h-96 bg-[#F3C3B2] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 bg-[#CFD6C4] rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* ===== SECTION 1: HERO (SELAMAT DATANG) ===== */}
      <section className="min-h-screen flex items-center justify-center p-6 relative z-10">
        <div className="bg-white/30 backdrop-blur-xl border border-white/50 p-12 md:p-20 rounded-[40px] shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] text-center max-w-4xl w-full mx-4 transition-transform duration-500 hover:scale-[1.02]">
          
          <h1 className="text-5xl md:text-7xl font-bold text-[#657166] mb-6 drop-shadow-sm font-serif leading-tight">
            SELAMAT DATANG<br />
            <span className="text-4xl md:text-6xl font-medium">di Kelompok 7</span>
          </h1>
          
          <p className="text-[#657166]/80 mb-10 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Selamat datang di halaman utama kelompok kami. Kami adalah tim yang berdedikasi untuk menciptakan antarmuka web yang tidak hanya fungsional, tetapi juga memberikan pengalaman visual yang estetis dan interaktif.
          </p>
          
          <button 
            onClick={scrollToMembers}
            className="bg-[#657166] text-white px-10 py-4 rounded-full font-bold tracking-widest hover:bg-[#4a534b] transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(101,113,102,0.5)] hover:-translate-y-1"
          >
            LIHAT ANGGOTA
          </button>
        </div>
      </section>

      {/* ===== SECTION 2: CAROUSEL CHARACTER SELECTION ===== */}
      <section id="carousel-anggota" className="min-h-screen flex flex-col items-center justify-center relative z-10 py-20 overflow-hidden">
        
        {/* Navigasi ala browser/header */}
        <div className="bg-white/40 backdrop-blur-md border border-white/50 px-8 py-3 rounded-full flex items-center gap-4 shadow-lg mb-12">
          <i className="fa-solid fa-users text-[#657166]"></i>
          <span className="font-bold text-[#657166] tracking-widest">ANGGOTA TIM</span>
        </div>

        {/* Kontainer Utama Carousel 3D */}
        <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
          
          {/* Tombol Panah Kiri */}
          <button 
            onClick={prevSlide} 
            disabled={currentIndex === 0}
            className={`absolute left-4 md:left-10 z-50 p-5 rounded-full backdrop-blur-xl border transition-all duration-300 ${
              currentIndex === 0 
                ? 'bg-white/10 border-white/20 text-[#657166]/30 cursor-not-allowed' 
                : 'bg-white/40 border-white/60 text-[#657166] hover:bg-white/60 shadow-xl hover:scale-110'
            }`}
          >
            <i className="fa-solid fa-chevron-left text-xl"></i>
          </button>

          {/* Area Kartu Anggota */}
          <div className="flex justify-center items-center w-full h-full relative perspective-1000">
            {teamMembers.map((member, idx) => {
              const offset = idx - currentIndex;
              const isCenter = offset === 0;
              
              const scale = 1 - Math.abs(offset) * 0.15;
              const translateX = offset * 280;
              const zIndex = 50 - Math.abs(offset);
              const opacity = 1 - Math.abs(offset) * 0.3;
              const blur = Math.abs(offset) > 0 ? 'blur(4px)' : 'blur(0px)';

              return (
                <div 
                  key={member.id}
                  className="absolute transition-all duration-700 ease-out flex justify-center items-center"
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    zIndex: zIndex,
                    opacity: opacity,
                    filter: blur,
                    visibility: Math.abs(offset) > 2 ? 'hidden' : 'visible' 
                  }}
                >
                  {/* Kartu Profil Anggota */}
                  <div className={`bg-white/40 backdrop-blur-2xl border border-white/60 rounded-[40px] p-8 w-[320px] h-[480px] flex flex-col items-center shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-colors duration-500 ${isCenter ? 'bg-white/50 border-white/80' : ''}`}>
                    
                    {/* Lingkaran Foto Profil */}
                    <div className="w-40 h-40 rounded-full bg-white/50 border-4 border-white mb-6 flex-shrink-0 overflow-hidden shadow-inner relative group">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-[#99CDD8]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-[#657166] mb-1 text-center">{member.name}</h3>
                    <p className="text-[#657166]/70 font-medium mb-3">{member.nim}</p>
                    
                    <span className="bg-[#CFD6C4]/50 text-[#657166] px-4 py-1.5 rounded-full text-sm font-bold mb-8 border border-[#CFD6C4]">
                      {member.role}
                    </span>
                    
                    {/* Tombol Lihat Profil (Hanya bisa diklik jika isReady = true dan sedang di tengah) */}
                    {member.isReady ? (
                      <Link 
                        to={member.link} 
                        className={`mt-auto w-full py-4 rounded-2xl font-bold text-center transition-all duration-300 ${
                          isCenter 
                            ? 'bg-[#657166] text-white hover:bg-[#4a534b] shadow-[0_10px_20px_rgba(101,113,102,0.3)] hover:-translate-y-1 cursor-pointer' 
                            : 'bg-gray-400/20 text-[#657166]/50 cursor-default pointer-events-none'
                        }`}
                        tabIndex={isCenter ? 0 : -1} 
                      >
                        Lihat Profil
                      </Link>
                    ) : (
                      <button 
                        disabled
                        className="mt-auto w-full py-4 rounded-2xl font-bold text-center transition-all duration-300 bg-gray-300 text-gray-500 cursor-not-allowed shadow-none"
                      >
                        Segera Hadir
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tombol Panah Kanan */}
          <button 
            onClick={nextSlide} 
            disabled={currentIndex === teamMembers.length - 1}
            className={`absolute right-4 md:right-10 z-50 p-5 rounded-full backdrop-blur-xl border transition-all duration-300 ${
              currentIndex === teamMembers.length - 1 
                ? 'bg-white/10 border-white/20 text-[#657166]/30 cursor-not-allowed' 
                : 'bg-white/40 border-white/60 text-[#657166] hover:bg-white/60 shadow-xl hover:scale-110'
            }`}
          >
            <i className="fa-solid fa-chevron-right text-xl"></i>
          </button>

        </div>
        
        {/* Indikator Titik-titik (Dots) di bawah */}
        <div className="flex gap-3 mt-12">
          {teamMembers.map((_, idx) => (
            <div 
              key={idx} 
              onClick={() => setCurrentIndex(idx)}
              className={`h-3 rounded-full transition-all duration-500 cursor-pointer ${
                currentIndex === idx ? 'w-10 bg-[#657166]' : 'w-3 bg-[#657166]/30 hover:bg-[#657166]/50'
              }`}
            ></div>
          ))}
        </div>

      </section>
    </div>
  );
};

export default Home;