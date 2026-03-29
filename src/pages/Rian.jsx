import foto from '../assets/rian.jpeg'
import mt1 from '../assets/mt1.jpg'
import mt2 from '../assets/mt2.jpg'
import mt3 from '../assets/mt3.jpg'
import mt4 from '../assets/mt4.jpg'
import mt5 from '../assets/mt5.jpg'

function Rian() {
  return (
    <div className="min-h-screen bg-[#1a1a2a] p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">

        <div className="flex flex-col md:grid md:gap-8" style={{gridTemplateColumns: '320px 1fr'}}>
          <div className="bg-[#111122] rounded-xl overflow-hidden w-full" style={{height: '400px'}}>
            <img src={foto} alt="Foto Rian" className="w-full h-full object-cover object-top" />
          </div>
          <div className="mt-4 md:mt-0">
            <h1 className="text-[#e8f0fe] font-bold leading-none text-5xl md:text-7xl">
              HELLO<span className="text-[#4a90d9]">!</span>
            </h1>
            <p className="text-[#8899aa] text-sm leading-relaxed mt-4 mb-5" style={{textAlign: 'justify'}}>
              Nama saya <strong className="text-[#e8f0fe]">Hilmi Yusrian Naja</strong>, mahasiswa Fakultas Vokasi dengan program Studi Teknologi Informasi 
              di Universitas Brawijaya angkatan 2025. Saya berdomisili di Malang, Jawa Timur dan saat ini berusia 
              19 tahun. Saya adalah pribadi yang aktif, disiplin, dan memiliki semangat belajar yang tinggi. 
              Saya percaya bahwa ketekunan dan kerja keras adalah kunci untuk mencapai tujuan. Selain di bidang 
              akademik, saya juga aktif di organisasi dan kegiatan ekstrakurikuler. Saya memiliki hobi mendaki 
              gunung, badminton, dan lari yang mengajarkan saya nilai ketekunan dan kerja sama tim.
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a href="https://instagram.com/hilmiyusrian_" target="_blank"
                className="bg-[#0d2a4a] text-[#7eb8f7] text-xs px-4 py-2 rounded-full border border-[#1a3a6b] no-underline text-left">
                📸 @hilmiyusrian_
              </a>
              <a href="mailto:hilmoyusrian@gmail.com"
                className="bg-[#0d2a4a] text-[#7eb8f7] text-xs px-4 py-2 rounded-full border border-[#1a3a6b] no-underline text-left">
                ✉️ hilmoyusrian@gmail.com
              </a>
              <a href="https://github.com/hilmiyusriann" target="_blank"
                className="bg-[#0d2a4a] text-[#7eb8f7] text-xs px-4 py-2 rounded-full border border-[#1a3a6b] no-underline text-left">
                💻 github.com/hilmiyusriann
              </a>
              <span className="bg-[#0d2a4a] text-[#7eb8f7] text-xs px-4 py-2 rounded-full border border-[#1a3a6b] text-left">
                📍 Malang, Jawa Timur
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div className="bg-[#111122] rounded-xl p-5 border border-[#1a3a6b]">
            <h2 className="text-[#e8f0fe] text-base font-medium mb-4">Pendidikan</h2>
            <div className="flex flex-col gap-3">
              <div className="border-l-2 border-[#4a90d9] pl-3">
                <p className="text-[#8899aa] text-xs mb-1">2012 - 2019</p>
                <p className="text-[#e8f0fe] text-sm font-medium">MI Raudlatul Mubtadiin</p>
              </div>
              <div className="border-l-2 border-[#4a90d9] pl-3">
                <p className="text-[#8899aa] text-xs mb-1">2019 - 2022</p>
                <p className="text-[#e8f0fe] text-sm font-medium">MtsN 2 Malang</p>
              </div>
              <div className="border-l-2 border-[#4a90d9] pl-3">
                <p className="text-[#8899aa] text-xs mb-1">2022 - 2025</p>
                <p className="text-[#e8f0fe] text-sm font-medium">MAN 1 Malang</p>
              </div>
              <div className="border-l-2 border-[#4a90d9] pl-3">
                <p className="text-[#8899aa] text-xs mb-1">2025 - Sekarang</p>
                <p className="text-[#e8f0fe] text-sm font-medium">Universitas Brawijaya</p>
                <p className="text-[#8899aa] text-xs">Teknologi Informasi</p>
              </div>
            </div>
          </div>

          <div className="bg-[#111122] rounded-xl p-5 border border-[#1a3a6b]">
            <h2 className="text-[#e8f0fe] text-base font-medium mb-4">Hobi</h2>
            <div className="flex flex-col gap-2 mb-5">
              <div className="flex items-center gap-3 bg-[#0d2a4a] px-3 py-2 rounded-lg">
                <span>🏸</span>
                <span className="text-[#7eb8f7] text-sm">Badminton</span>
              </div>
              <div className="flex items-center gap-3 bg-[#0d2a4a] px-3 py-2 rounded-lg">
                <span>⛰️</span>
                <span className="text-[#7eb8f7] text-sm">Mendaki Gunung</span>
              </div>
              <div className="flex items-center gap-3 bg-[#0d2a4a] px-3 py-2 rounded-lg">
                <span>🏃</span>
                <span className="text-[#7eb8f7] text-sm">Lari</span>
              </div>
            </div>
            <h2 className="text-[#e8f0fe] text-base font-medium mb-3">Bahasa</h2>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span className="text-[#e8f0fe] text-sm">Indonesia</span>
                <span className="bg-[#0d2a4a] text-[#7eb8f7] text-xs px-3 py-1 rounded-full">Native</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#e8f0fe] text-sm">English</span>
                <span className="bg-[#0d2a4a] text-[#7eb8f7] text-xs px-3 py-1 rounded-full">Intermediate</span>
              </div>
            </div>
          </div>

          <div className="bg-[#111122] rounded-xl p-5 border border-[#1a3a6b]">
            <h2 className="text-[#e8f0fe] text-base font-medium mb-4">Kontak</h2>
            <div className="flex flex-col gap-3">
              <div className="bg-[#0d2a4a] rounded-lg p-3">
                <p className="text-[#8899aa] text-xs mb-1">Instagram</p>
                <a href="https://instagram.com/hilmiyusrian_" target="_blank"
                  className="text-[#7eb8f7] text-sm no-underline">@hilmiyusrian_</a>
              </div>
              <div className="bg-[#0d2a4a] rounded-lg p-3">
                <p className="text-[#8899aa] text-xs mb-1">Email</p>
                <a href="mailto:hilmoyusrian@gmail.com"
                  className="text-[#7eb8f7] text-sm no-underline">hilmoyusrian@gmail.com</a>
              </div>
              <div className="bg-[#0d2a4a] rounded-lg p-3">
                <p className="text-[#8899aa] text-xs mb-1">GitHub</p>
                <a href="https://github.com/hilmiyusriann" target="_blank"
                  className="text-[#7eb8f7] text-sm no-underline">github.com/hilmiyusriann</a>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-[#111122] rounded-xl p-5 border border-[#1a3a6b]">
            <h2 className="text-[#e8f0fe] text-base font-medium mb-4">Pengalaman Organisasi</h2>
            <div className="flex gap-4 items-start">
              <div className="bg-[#0d2a4a] rounded-lg p-3 text-center" style={{minWidth:'60px'}}>
                <p className="text-[#4a90d9] text-xl">🎖️</p>
              </div>
              <div>
                <p className="text-[#e8f0fe] text-sm font-medium mb-1">KOMPAS — Komunitas Paskibra</p>
                <p className="text-[#4a90d9] text-xs mb-1">Koordinator Divisi Infokom (PDD)</p>
                <p className="text-[#8899aa] text-xs mb-2">MAN 1 Malang • Kelas 10 - 11 (2 Tahun)</p>
                <p className="text-[#8899aa] text-xs leading-relaxed" style={{textAlign: 'justify'}}>
                  Bertanggung jawab atas dokumentasi dan publikasi kegiatan organisasi. 
                  Mengelola konten informasi dan komunikasi antar anggota serta publik.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#111122] rounded-xl p-5 border border-[#1a3a6b]">
            <h2 className="text-[#e8f0fe] text-base font-medium mb-4">Prestasi</h2>
            <div className="flex gap-4 items-start">
              <div className="bg-[#0d2a4a] rounded-lg p-3 text-center" style={{minWidth:'60px'}}>
                <p className="text-[#4a90d9] text-xl">🥉</p>
                <p className="text-[#4a90d9] text-xs font-medium">Juara 3</p>
              </div>
              <div>
                <p className="text-[#e8f0fe] text-sm font-medium mb-1">OSN-K Kebumian</p>
                <p className="text-[#4a90d9] text-xs mb-1">Olimpiade Sains Nasional Kabupaten/Kota</p>
                <p className="text-[#8899aa] text-xs leading-relaxed" style={{textAlign: 'justify'}}>
                  Meraih Juara 3 pada kompetisi Olimpiade Sains Nasional tingkat 
                  Kabupaten/Kota bidang Kebumian. Kompetisi ini menguji pengetahuan 
                  dan kemampuan analisis di bidang ilmu kebumian.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#111122] rounded-xl p-5 border border-[#1a3a6b]">
          <h2 className="text-[#e8f0fe] text-base font-medium mb-4">📸 Galeri Pendakian</h2>
          <div className="flex flex-col md:grid md:gap-2" style={{gridTemplateColumns: '1fr 1fr'}}>

            <img
              src={mt1}
              alt="gunung-1"
              className="rounded-xl object-cover w-full mb-2 md:mb-0"
              style={{height: '600px'}}
            />
            <div className="grid grid-cols-2 gap-2">
              <img src={mt2} alt="gunung-2" className="rounded-xl object-cover w-full" style={{height:'300px'}} />
              <img src={mt3} alt="gunung-3" className="rounded-xl object-cover w-full" style={{height:'300px'}} />
              <img src={mt4} alt="gunung-4" className="rounded-xl object-cover w-full" style={{height:'300px'}} />
              <img src={mt5} alt="gunung-5" className="rounded-xl object-cover w-full" style={{height:'300px'}} />
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Rian