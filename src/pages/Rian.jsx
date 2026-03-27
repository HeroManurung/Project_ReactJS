import foto from '../assets/rian.jpeg'
function Rian() {
  return (
    <div className="min-h-screen bg-[#0f172a] py-10 px-4 font-sans">
      <div className="max-w-2xl mx-auto">
        
        {/* Card */}
        <div className="bg-[#0f172a] rounded-2xl p-8 border-t-4 border-[#38bdf8]">
          
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-[#f1f5f9] text-2xl font-medium mb-1">Hilmi Yusrian Naja</h1>
              <p className="text-[#38bdf8] text-sm">Teknologi Informasi — Universitas Brawijaya</p>
            </div>
            <img src={foto} alt="Foto Hilmi" className="w-16 h-16 rounded-xl object-cover" />
          </div>

          {/* Badges */}
          <div className="flex gap-3 mb-6 flex-wrap">
            <span className="bg-[#1e3a5f] text-[#38bdf8] text-xs px-4 py-1 rounded-full">Kelas T2C</span>
            <span className="bg-[#1e3a5f] text-[#38bdf8] text-xs px-4 py-1 rounded-full">📍 Malang, Jawa Timur</span>
          </div>

          {/* Tentang Diri */}
          <div className="bg-[#1e293b] rounded-xl p-5">
            <h2 className="text-[#f1f5f9] text-sm font-medium mb-3">Tentang Diri</h2>
            <p className="text-[#94a3b8] text-sm leading-relaxed">
              Halo! Nama saya Hilmi Yusrian Naja, seorang profesional dengan pengalaman 
              di bidang TI. Saya memiliki berbagai keterampilan baik soft skill maupun 
              hard skill yang mendukung karir saya. Saya memiliki hobi mendaki gunung dan 
              aktivitas ini mengajarkan saya arti ketekunan, kerja sama tim, dan manajemen 
              dalam kondisi yang tidak selalu mudah. Gunung yang pernah saya taklukan antara 
              lain Gunung Buthak, Penanggungan, Kelud, Kawi, Arjuno, Panderman, dan Bokong. 
              Pengalaman yang paling berkesan adalah saat mendaki Gunung Arjuno, di mana 
              medan terjal penuh batu harus saya lewati. Namun ketika sampai di puncak dan 
              melihat pemandangan di atas awan, semua rasa lelah terbayar lunas.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Rian