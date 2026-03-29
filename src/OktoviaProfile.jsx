import React from 'react';
import fotoProfil from './assets/okto.jpeg';

function OktoviaProfile() {
  // Palet Warna Berdasarkan Gambar "Mahluk Astral Class"
  const colors = {
    darkGreen: '#0A3331',    
    emerald: '#164A47',      
    sky: '#BED9F4',          
    butter: '#FEFDD0',       
    darkSky: '#7A9EBF',      
  };

  return (
    <div className="min-h-screen py-10 px-4 font-sans relative overflow-hidden" 
         style={{ backgroundColor: colors.darkGreen, backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}>
      
      {/* Texture Overlay (Grainy Effect) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-repeat" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/asfalt-dark.png")' }}></div>

      <div className="max-w-4xl mx-auto space-y-12 relative z-10">
        
        {/* ================= NAVBAR ================= */}
        <div className="flex justify-between items-center px-8 py-3 rounded-full border border-sky/10 bg-sky/5 backdrop-blur-md">
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest" style={{ color: colors.sky }}>
            <span>Home</span>
            <span>Profile</span>
            <span>Skills</span>
          </div>
          <a
          href="https://wa.me/6283133383582" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block"
          >
          <button className="px-10 py-1.5 rounded-full border border-sky/20 text-[10px] font-bold uppercase tracking-widest hover:bg-sky/10 transition-all"
                  style={{ color: colors.sky }}
                  >
            Contact Me
          
          </button>
          </a>
        </div>

        {/* ================= HERO SECTION ================= */}
        <div className="text-center space-y-4 py-10">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none flex flex-col items-center">
            <span style={{ color: colors.sky }}>UPGRADE YOUR</span>
            <div className="flex items-center gap-4">
              <span style={{ color: colors.sky }}>SYSTEM</span>
              <div className="w-16 h-8 rounded-full border-2 flex items-center justify-center" style={{ borderColor: colors.sky }}>
                <i className="fa-solid fa-arrow-right text-xs" style={{ color: colors.sky }}></i>
              </div>
              <span style={{ color: colors.sky }}>WITH</span>
            </div>
            <span style={{ color: colors.butter }}>OKTOVIA ENJELIKA BR NABABAN</span>
          </h1>
          <div className="inline-block px-8 py-2 border rounded-full text-[16px] font-bold tracking-[0.3em] uppercase mt-8"
               style={{ backgroundColor: colors.sky + '1A', borderColor: colors.sky + '33', color: colors.sky }}>
            Web Developer Student
          </div>
        </div>

        {/* ================= PROFILE IMAGE & ABOUT ================= */}
        <div className="relative flex justify-center py-10">
          <div className="w-64 h-80 rounded-[40px] overflow-hidden shadow-2xl rotate-3 bg-emerald group hover:rotate-0 transition-all duration-500"
               style={{ borderColor: colors.emerald + '80' }}>
             <img src={fotoProfil} alt="Okto" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
          </div>
          <div className="absolute -bottom-4 right-0 md:right-10 max-w-xs p-6 rounded-3xl shadow-2xl -rotate-2"
               style={{ backgroundColor: colors.butter, color: colors.darkGreen }}>
            <h3 className="font-black uppercase text-xs mb-2 tracking-widest">About Me</h3>
            <p className="text-[11px] font-bold leading-relaxed">
              Halo! Saya Oktovia Enjelika Br Nababan, mahasiswi IT di Universitas Brawijaya. Fokus pada solusi digital fungsional & estetis. Kolaborasi dan pembelajaran berkelanjutan adalah kunci bagi saya untuk menciptakan dampak positif!
              Saya percaya bahwa kolaborasi tim dan pembelajaran berkelanjutan adalah kunci untuk menciptakan dampak positif di industri teknologi.
              Saya selalu antusias untuk mempelajari teknologi terbaru dan siap berkolaborasi untuk menciptakan inovasi digital yang bermakna!
            </p>
          </div>
        </div>

        {/* ================= DATA GRID (Journey & Identity) ================= */}
        <div className="space-y-8 pt-10">
          <div className="flex justify-between items-end border-b pb-4" style={{ borderColor: colors.sky + '1A' }}>
            <h2 className="text-4xl font-black uppercase italic" style={{ color: colors.sky }}>My Journey</h2>
            <p className="text-[10px] font-medium max-w-[200px] text-right uppercase" style={{ color: colors.sky + '66' }}>
              Pendidikan, Organisasi, dan Identitas diri.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pendidikan */}
            <div className="p-8 rounded-[40px] border space-y-4" style={{ backgroundColor: colors.emerald, borderColor: colors.sky + '0D' }}>
              <h3 className="font-black uppercase text-sm leading-tight" style={{ color: colors.sky }}>Education<br/>Background</h3>
              <div className="space-y-3">
                {[
                  { sch: 'Univ. Brawijaya', yr: '2025-Now' },
                  { sch: 'SMAN 1 Kualuh Hulu', yr: '2022-2025' },
                  { sch: 'SMPS Catholic St.Yoseph', yr:'2019-2022'},
                  { sch: 'SDN 112279 Aek Kanopan', yr: '2017-2019'},
                  { sch: 'SDN 009 Kulim Jaya', yr: '2015-2017'},
                  { sch: 'SDN 47 Pekanbaru', yr: '2013-2015'},
                  { sch: 'PAUD Permata Atika Puri Pekanbaru', yr: '2012-1013'}
                ].map((edu, i) => (
                  <div key={i} className="border-l-2 pl-3" style={{ borderColor: colors.sky + '33' }}>
                    <p className="text-[16px] font-black text-white">{edu.sch}</p>
                    <p className="text-[12px] font-bold" style={{ color: colors.sky + '99' }}>{edu.yr}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Info & Kontak (TAMBAHAN) */}
            <div className="bg-white p-8 rounded-[40px] space-y-6 shadow-xl">
              <h3 className="font-black uppercase text-sm leading-tight text-darkGreen">Contact &<br/>Identity</h3>
              <div className="space-y-3">
                <div className="space-y-1 text-[12px] font-black text-darkGreen lowercase opacity-60">
                  <p><i className="fa-solid fa-envelope text-lg w-6 text-lg"></i>oktoviaenjelikabrnababan@gmail.com</p>
                  <p><i className="fa-brands fa-whatsapp text-lg w-6 text-lg"></i> 6283133383582</p>
                  <p><i className="fa-brands fa-instagram text-lg w-6 text-lg"></i> @oktovia.enjelikaa</p>
                  <p><i className="fa-solid fa-location text-lg w-6 text-lg"></i> Malang, East Java</p>
                </div>
                <div className="w-full h-24 rounded-4xl bg-darkGreen/5 flex items-center justify-center border-dashed border-darkGreen/10">
                   <span className="text-xl font-black text-darkGreen">  Oktovia Nababan (06 Oktober 2006)</span>
                </div>
              </div>
            </div>

            {/* Organisasi & Soft Skill (TAMBAHAN) */}
            <div className="p-8 rounded-[40px] border space-y-6" style={{ backgroundColor: colors.emerald, borderColor: colors.sky + '0D' }}>
              <h3 className="font-black uppercase text-sm leading-tight" style={{ color: colors.sky }}>Soft Skills &<br/>Organisasi</h3>
              <div className="flex flex-wrap gap-2">
                {['Public Speaking', 'Problem Solving', 'Teamwork'].map((s, i) => (
                  <span key={i} className="text-[12px] font-black px-2 py-1 rounded bg-darkGreen text-sky border border-sky/10 uppercase">
                    {s}
                  </span>
                ))}
              </div>
              <ul className="text-[16px] font-bold space-y-1 uppercase" style={{ color: colors.butter + 'CC' }}>
                <li>• Staff Ahli Biro Kesekretaritan BEM Vokasi UB</li>
                <li>• Staff Ahli Departemen Inovasi dan Teknologi HMPSTI Vokasi UB</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ================= HARD SKILLS SECTION ================= */}
        <div className="border rounded-[40px] p-10 flex flex-col items-center gap-8"
             style={{ backgroundColor: colors.sky + '0D', borderColor: colors.sky + '1A' }}>
            <div className="flex flex-wrap gap-4 justify-center">
               {['Tailwind', 'Java', 'PHP', 'HTML'].map((skill, i) => (
                 <div key={i} className="px-16 py-2 rounded-xl border text-[10px] font-black uppercase tracking-widest" 
                      style={{ backgroundColor: colors.emerald, color: colors.sky, borderColor: colors.sky + '0D' }}>
                   {skill}
                 </div>
               ))}
            </div>
            <button className="flex items-center gap-4 px-10 py-4 rounded-full font-black uppercase text-xs tracking-widest hover:scale-105 transition-transform shadow-2xl"
                    style={{ backgroundColor: colors.butter, color: colors.darkGreen }}>
              Join For Collaboration <i className="fa-solid fa-circle-arrow-right"></i>
            </button>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center py-10 opacity-30 text-[9px] font-bold uppercase tracking-[0.3em]" style={{ color: colors.sky }}>
           <span>Inisial_Okto</span>
           <span>Part of Vokasi UB</span>
        </div>
      </div>
    </div>
  );
}

export default OktoviaProfile;