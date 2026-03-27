function Rian() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        
        {/* Header / Banner */}
        <div className="bg-indigo-600 h-32"></div>

        {/* Foto Profil */}
        <div className="flex justify-center -mt-16 px-6">
          <img
            src="https://ui-avatars.com/api/?name=Rian&size=128&background=6366f1&color=fff"
            alt="Foto Rian"
            className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Info */}
        <div className="text-center px-6 pt-4">
          <h1 className="text-2xl font-bold text-gray-800">Rian</h1>
          <p className="text-indigo-500 font-medium">Kelas A</p>
          <p className="text-gray-500 text-sm">Teknik Informatika</p>
          <p className="text-gray-400 text-sm">📍 Malang, Jawa Timur</p>
        </div>

        {/* Tentang Diri */}
        <div className="px-8 py-6">
          <h2 className="text-lg font-semibold text-indigo-600 mb-2">Tentang Diri</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Halo! Nama saya Rian, seorang mahasiswa yang sedang menempuh pendidikan 
            di jurusan Teknik Informatika. Saya memiliki ketertarikan yang besar 
            terhadap dunia teknologi, khususnya dalam pengembangan aplikasi web dan 
            mobile. Saya percaya bahwa teknologi adalah alat yang luar biasa untuk 
            memecahkan masalah nyata di masyarakat. Dalam keseharian saya, saya 
            senang belajar hal-hal baru, berkolaborasi dengan teman-teman, dan 
            mengerjakan proyek yang bermakna. Saya juga aktif mengikuti berbagai 
            kegiatan kampus untuk mengembangkan soft skill dan memperluas jaringan. 
            Ke depannya, saya berharap bisa berkontribusi dalam dunia teknologi 
            Indonesia dan menciptakan solusi inovatif yang bermanfaat bagi banyak orang.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Rian