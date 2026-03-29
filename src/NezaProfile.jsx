import React, { useState } from 'react';
// import fotoProfil from './assets/fotomu.jpg'; // Hapus komentar ini jika file fotomu sudah ada di assets
import fotoProfil from './assets/fotoprofil.png'; 
import imgHima from './assets/logohima.png';
import imgBem from './assets/logobem.png';
// Trik Profesional: Placeholder Logo. 
// Setelah kamu meng-copy kodenya, silakan ganti '/path_ke_logo_xxx.jpg' di bawah dengan import file gambarmu yang asli.
const logoHimaInovara = imgHima; // Placeholder Logo HIMA (Blue/Orange)
const logoBemRuangGemilang = imgBem; // Placeholder Logo BEM (Gold)


const NezaProfile = () => {
  const [activeSkillId, setActiveSkillId] = useState(null);

  // Data Skill
  const skillsData = [
    { id: 1, name: 'HTML, CSS & Tailwind', percentage: 75, icon: 'fa-brands fa-html5' },
    { id: 2, name: 'PHP & MySQL', percentage: 70, icon: 'fa-solid fa-code' },
    { id: 3, name: 'Java Swing & GitHub', percentage: 80, icon: 'fa-brands fa-github' },
    { id: 4, name: 'Database Design (ERD)', percentage: 80, icon: 'fa-solid fa-database' },
  ];

  const toggleSkillDetail = (id) => {
    setActiveSkillId(activeSkillId === id ? null : id);
  };

  return (
    <div className="bg-[#151622] min-h-screen text-white font-sans selection:bg-[#8238b3] selection:text-white pb-10 overflow-hidden">
   
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-16 mb-16">
        
        {/* ================= KOLOM KIRI (Header, Info & Hobbies) ================= */}
        <div className="lg:col-span-5 flex flex-col relative">
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 tracking-tight">
            Neza Frischa
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-6">
            IT Student & <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8238b3] to-[#b175e1]">Web Developer</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-sm leading-relaxed">
            Mahasiswa D3 Teknologi Informasi yang gemar mengeksplorasi pengembangan web, UI/UX, dan aktif berorganisasi.
          </p>

          {/* Foto Profil */}
          <div className="relative mb-12 w-64 h-64 md:w-80 md:h-80 self-center lg:self-start">
            <div className="absolute inset-0 bg-[#8238b3] rounded-full blur-3xl opacity-30"></div>
            <img 
              src={fotoProfil} 
              alt="Neza Frischa" 
              className="relative z-10 w-full h-full object-cover rounded-full border border-gray-700 shadow-2xl" 
            />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[radial-gradient(circle_at_center,_#8238b3_2px,_transparent_2px)] bg-[length:12px_12px] opacity-30"></div>
          </div>

          {/* Info Pribadi */}
          <div className="space-y-4 text-gray-400 mb-12 border-l-2 border-[#8238b3] pl-5">
            <p><span className="text-white font-medium w-24 inline-block">Domisili</span> : Batu, Jawa Timur</p>
            <p><span className="text-white font-medium w-24 inline-block">Prodi</span> : D3 Teknologi Informasi</p>
            <p><span className="text-white font-medium w-24 inline-block">Kampus</span> : Universitas Brawijaya</p>
          </div>

          {/* ================= HOBBIES ================= */}
          <div className="mt-4">
            <h3 className="text-2xl font-bold mb-6 text-white">Hobbies & Interests</h3>
            <div className="grid grid-cols-2 gap-5">
              
              {/* Hobby 1: Movies / Letterboxd */}
              <a href="https://letterboxd.com/arkchive" target="_blank" rel="noopener noreferrer" className="bg-[#1d1e2e] border border-gray-800 rounded-2xl p-3 flex flex-col group hover:border-[#E50914] transition-all duration-300 shadow-lg cursor-pointer">
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-3 relative bg-gray-800">
                  <img src={cinema} alt="Movies" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-[#E50914] text-white p-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <h4 className="font-bold text-white text-sm truncate">Watching Movies</h4>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-gray-500 text-xs">My Letterboxd</p>
                    <i className="fa-solid fa-film text-[#E50914] text-sm"></i>
                  </div>
                </div>
              </a>

              {/* Hobby 2: Music / Spotify */}
              <a href="https://open.spotify.com/user/rnv18adgpryhvugtznnjc8c60?si=01ff092f5532461a" target="_blank" rel="noopener noreferrer" className="bg-[#1d1e2e] border border-gray-800 rounded-2xl p-3 flex flex-col group hover:border-[#1DB954] transition-all duration-300 shadow-lg cursor-pointer">
                <div className="w-full aspect-[3/4] rounded-xl overflow-hidden mb-3 relative bg-gray-800">
                  <img src={music} alt="Music" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-[#1DB954] text-white p-2.5 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <i className="fa-solid fa-play pl-0.5 text-sm"></i>
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <h4 className="font-bold text-white text-sm truncate">Listening Music</h4>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-gray-500 text-xs">My Spotify</p>
                    <i className="fa-brands fa-spotify text-[#1DB954] text-sm"></i>
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>

        {/* ================= KOLOM KANAN (About, Edu, Skills, Org Exp) ================= */}
        <div className="lg:col-span-7 flex flex-col pt-4 lg:pt-8">
          
          {/* Section: About Me */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-6 text-white">About Me</h3>
            <p className="text-gray-400 leading-relaxed text-justify mb-8">
              Halo! Saya Neza Frischa, mahasiswa program studi D3 Teknologi Informasi di Fakultas Vokasi, Universitas Brawijaya. Saya memiliki passion dalam dunia teknologi, terutama mengeksplorasi pengembangan web menggunakan HTML, CSS, PHP, hingga perancangan basis data dan UI/UX design.
              <br/><br/>
              Sebagai mahasiswa, saya selalu berusaha menyeimbangkan akademik dan pengembangan <i>soft skill</i>. Pengalaman berorganisasi dan kolaborasi tim juga sebenarnya sudah saya pupuk sejak SMA. Saya percaya bahwa kemampuan teknis yang kuat jika dipadukan dengan kepemimpinan dari organisasi akan menciptakan inovasi digital yang berdampak luas.
            </p>
            <a href={filecv} download="cv_neza.pdf" className="inline-block bg-[#8238b3] hover:bg-[#9951c9] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-[0_4px_14px_0_rgba(130,56,179,0.4)] hover:shadow-[0_6px_20px_rgba(130,56,179,0.25)] hover:-translate-y-1">
              Download CV
            </a>
          </div>

          {/* Section: Education & Skills */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-16">
            {/* Education Timeline */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Education</h3>
              <div className="space-y-6">
                <div className="relative pl-6 border-l border-gray-700">
                  <div className="absolute w-3 h-3 bg-[#8238b3] rounded-full -left-[6.5px] top-1.5 shadow-[0_0_8px_rgba(130,56,179,0.8)]"></div>
                  <div className="text-[#8238b3] font-bold text-sm mb-1">2025 - Sekarang</div>
                  <div className="text-white font-medium text-lg leading-tight mb-1">Universitas Brawijaya</div>
                  <div className="text-gray-400 text-sm">D3 Teknologi Informasi</div>
                </div>
                <div className="relative pl-6 border-l border-gray-700">
                  <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[6.5px] top-1.5"></div>
                  <div className="text-gray-500 font-bold text-sm mb-1">2022 - 2025</div>
                  <div className="text-gray-300 font-medium text-lg leading-tight mb-1">SMAN 1 Batu</div>
                  <div className="text-gray-500 text-sm">Ilmu Pengetahuan Alam</div>
                </div>
                <div className="relative pl-6 border-l border-gray-700">
                  <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[6.5px] top-1.5"></div>
                  <div className="text-gray-500 font-bold text-sm mb-1">2019 - 2022</div>
                  <div className="text-gray-300 font-medium text-lg leading-tight">SMPN 2 Batu</div>
                </div>
                <div className="relative pl-6 border-l border-gray-700">
                  <div className="absolute w-3 h-3 bg-gray-600 rounded-full -left-[6.5px] top-1.5"></div>
                  <div className="text-gray-500 font-bold text-sm mb-1">2013 - 2019</div>
                  <div className="text-gray-300 font-medium text-lg leading-tight">SDN Punten 01</div>
                </div>
              </div>
            </div>

            {/* My Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-3 text-white">My Skills</h3>
              <p className="text-gray-500 text-sm mb-6">Klik skill untuk melihat detail kemahiran.</p>
              <div className="space-y-3">
                {skillsData.map((skill) => (
                  <div key={skill.id} className="border border-gray-800 rounded-xl bg-[#1d1e2e]/50 overflow-hidden transition-all duration-300 hover:border-gray-700">
                    <button onClick={() => toggleSkillDetail(skill.id)} className={`w-full flex items-center justify-between p-4 text-left gap-3 ${activeSkillId === skill.id ? 'bg-[#1d1e2e]' : ''}`}>
                      <div className="flex items-center gap-3">
                        <i className={`${skill.icon} text-lg w-6 text-center ${activeSkillId === skill.id ? 'text-[#a364d9]' : 'text-gray-600'}`}></i>
                        <span className={`font-medium transition-colors ${activeSkillId === skill.id ? 'text-white' : 'text-gray-300'}`}>
                          {skill.name}
                        </span>
                      </div>
                      <i className={`fa-solid fa-chevron-down text-xs text-gray-600 transition-transform duration-300 ${activeSkillId === skill.id ? 'rotate-180 text-[#a364d9]' : ''}`}></i>
                    </button>
                    <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeSkillId === skill.id ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-4 pb-5 pt-1 border-t border-gray-800/50 bg-[#1d1e2e]">
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="text-xs text-gray-500 uppercase tracking-wider font-medium">Proficiency</span>
                          <span className="text-sm font-bold text-[#a364d9]">{skill.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2.5 relative">
                          <div className="bg-gradient-to-r from-[#8238b3] to-[#b175e1] h-2.5 rounded-full shadow-[0_0_10px_rgba(130,56,179,0.5)] transition-all duration-1000 ease-out" style={{ width: activeSkillId === skill.id ? `${skill.percentage}%` : '0%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= ORGANIZATIONAL EXPERIENCE (Memenuhi Kolom Kanan) ================= */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-white">Organizational Experience</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* BEM */}
              <div className="bg-[#1d1e2e] border border-gray-800 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-[#8238b3]/30 transition-all duration-300 shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFD700] to-[#f39c12]"></div>
                
                {/* Logo BEM */}
                <div className="absolute top-6 right-6 w-14 h-14 md:w-16 md:h-16 opacity-30 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">
                  <img src={logoBemRuangGemilang} alt="Logo BEM" className="w-full h-full object-contain" />
                </div>
                
                {/* Content BEM */}
                <div className="relative z-10 pr-16"> 
                  <div className="text-gray-500 font-semibold text-xs uppercase tracking-wider mb-2">2026</div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-1">BEM Fakultas Vokasi UB</h4>
                  <p className="text-[#f39c12] font-semibold mb-6 text-xs md:text-sm tracking-wide">Kabinet Ruang Gemilang</p>
                  
                  <div className="space-y-2 text-gray-400 text-sm leading-relaxed">
                    <p><span className="font-bold text-white">• Staff Ahli Biro SETKAB</span></p>
                  </div>
                </div>
              </div>

              {/* HIMA */}
              <div className="bg-[#1d1e2e] border border-gray-800 rounded-3xl p-6 md:p-8 relative overflow-hidden group hover:border-[#8238b3]/30 transition-all duration-300 shadow-lg">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#003da5] to-[#ff7b54]"></div>
                
                {/* Logo HIMA */}
                <div className="absolute top-6 right-6 w-14 h-14 md:w-16 md:h-16 opacity-30 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-300">
                  <img src={logoHimaInovara} alt="Logo HIMA" className="w-full h-full object-contain" />
                </div>
                
                {/* Content HIMA */}
                <div className="relative z-10 pr-16">
                  <div className="text-gray-500 font-semibold text-xs uppercase tracking-wider mb-2">2026</div>
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-1">HMPSTI Vokasi UB</h4>
                  <p className="text-[#00b4d8] font-semibold mb-6 text-xs md:text-sm tracking-wide">Kabinet Inovara</p>
                  
                  <div className="space-y-2 text-gray-400 text-sm leading-relaxed">
                    <p><span className="font-bold text-white">• Staff Ahli Departemen Kora</span></p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* ================= FOOTER / LET'S TALK (Tengah Bawah) ================= */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 mt-10">
        <div className="bg-[#1d1e2e] rounded-3xl p-10 md:p-14 text-center relative overflow-hidden border border-gray-800 hover:border-gray-700 transition-colors shadow-2xl">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#8238b3] to-[#e18af5]"></div>
          
          <div className="w-16 h-16 bg-[#8238b3] rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 shadow-[0_0_20px_rgba(130,56,179,0.5)]">
            N
          </div>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">Let's Talk with Me!</h3>
          <p className="text-gray-400 mb-10 max-w-lg mx-auto text-base md:text-lg leading-relaxed">
            Saya selalu terbuka untuk berdiskusi tentang proyek kolaborasi, organisasi, atau sekadar berbagi cerita tentang film dan musik.
          </p>
          
          <div className="flex justify-center gap-6">
            <a href="https://wa.me/6281459181928" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#8238b3] hover:text-white hover:scale-110 transition-all duration-300 shadow-lg">
              <i className="fa-brands fa-whatsapp text-xl"></i>
            </a>
            <a href="https://instagram.com/ryuvenclau" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#8238b3] hover:text-white hover:scale-110 transition-all duration-300 shadow-lg">
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
            <a href="https://github.com/atlava" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#8238b3] hover:text-white hover:scale-110 transition-all duration-300 shadow-lg">
              <i className="fa-brands fa-github text-xl"></i>
            </a>
          </div>
          
          <p className="text-xs text-gray-500 mt-12">Created by Neza | All Reserved!</p>
        </div>
      </div>

    </div>
  );
};

export default NezaProfile;