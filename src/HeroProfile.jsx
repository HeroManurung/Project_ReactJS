import React from 'react';
import fotoFormal from './assets/formal.jpeg'; // Memanggil foto

function HeroProfile() {
  return (
    <div className="bg-gray-300 min-h-screen py-10">
      <section id="about" className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 mx-5 md:mx-10 mt-10 mb-20">
        {/* ================= KOLOM KIRI ================= */}
        <div className="md:col-span-4 bg-[#eaddcf] shadow-xl p-8 md:p-12 flex flex-col items-center text-center rounded-3xl">
            
            
            <img src={fotoFormal} alt="Foto Profil Hero" className="w-64 h-65 object-cover rounded-2xl shadow-md mb-8 border-4 border-white" />

            <h3 className="text-2xl font-bold font-serif text-gray-900">Hero Manurung</h3>
            <p className="text-[#c19b6c] font-medium mb-10">Web Developer</p>

            <div className="w-full space-y-4 text-left text-base font-sans text-gray-800">
                <p><span className="font-bold text-gray-900">City, Date of Birth :</span> Sosor Ladang, 18 April 2006</p>
                <p><span className="font-bold text-gray-900">Religion :</span> Christian</p>
                <p><span className="font-bold text-gray-900">Gender :</span> Male</p>
                <p><span className="font-bold text-gray-900">Weight / Height :</span> 65Kg / 180Cm</p>
                <p><span className="font-bold text-gray-900">Address :</span> Jl. Raya Sumbersari No.82, Malang, Jawa Timur</p>
            </div>

            <h3 className="bg-gray-800 text-white w-full text-center py-2 font-bold tracking-widest uppercase mt-10 mb-6 rounded-md">Contact</h3>
            <div className="w-full space-y-4 text-left text-base text-gray-800 font-sans font-medium">
                <div className="flex items-center gap-4"><i className="fa-brands fa-whatsapp text-xl w-6 text-center"></i> <span>0858-3126-4801</span></div>
                <div className="flex items-center gap-4"><i className="fa-solid fa-envelope text-xl w-6 text-center"></i> <span>heromanurung123@gmail.com</span></div>
                <div className="flex items-center gap-4"><i className="fa-brands fa-instagram text-xl w-6 text-center"></i> <span>@hero_yez</span></div>
                <div className="flex items-center gap-4"><i className="fa-brands fa-github text-xl w-6 text-center"></i> <span>HeroManurung</span></div>
            </div>

            <h3 className="bg-gray-800 text-white w-full text-center py-2 font-bold tracking-widest uppercase mt-10 mb-6 rounded-md">Hobby</h3>    
            <div className="w-full text-left text-base text-gray-800 font-bold font-sans leading-relaxed">
                
                Football.<br />Volley.<br />Photography.<br />Gaming.<br />Running
            </div>

            <h3 className="bg-gray-800 text-white w-full text-center py-2 font-bold tracking-widest uppercase mt-10 mb-6 rounded-md">Skills</h3>
            <div className="w-full space-y-4 text-left">
                <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-gray-800">HTML / CSS</span>
                    <div className="flex gap-1.5">
                        <div className="w-3.5 h-3.5 bg-gray-800 rounded-full"></div>
                        <div className="w-3.5 h-3.5 bg-gray-800 rounded-full"></div>
                        <div className="w-3.5 h-3.5 bg-gray-800 rounded-full"></div>
                        <div className="w-3.5 h-3.5 bg-gray-800 rounded-full"></div>
                        <div className="w-3.5 h-3.5 bg-white border border-gray-400 rounded-full"></div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-gray-800">PHP & MySQL</span>
                    <div className="flex gap-1.5">
                        <div className="w-3.5 h-3.5 bg-gray-800 rounded-full"></div>
                        <div className="w-3.5 h-3.5 bg-gray-800 rounded-full"></div>
                        <div className="w-3.5 h-3.5 bg-gray-800 rounded-full"></div>
                        <div className="w-3.5 h-3.5 bg-white border border-gray-400 rounded-full"></div>
                        <div className="w-3.5 h-3.5 bg-white border border-gray-400 rounded-full"></div>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-base font-bold text-gray-800">Tailwind CSS</span>
                    <div className="flex gap-1.5">
                        <div className="w-3.5 h-3.5 bg-gray-800 rounded-full"></div>
                        <div className="w-3.5 h-3.5 bg-gray-800 rounded-full"></div>
                        <div className="w-3.5 h-3.5 bg-gray-800 rounded-full"></div>
                        <div className="w-3.5 h-3.5 bg-gray-800 rounded-full"></div>
                        <div className="w-3.5 h-3.5 bg-white border border-gray-400 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>

        {/* ================= KOLOM KANAN ================= */}
        <div className="md:col-span-8 bg-white shadow-xl p-8 md:p-12 rounded-3xl">
            {/* ================= kolom kanan atas ================= */}
            <div className="bg-slate-200 shadow-xl px-8 md:px-12 pt-0 md:pt-0 pb-8 md:pb-12 rounded-3xl">
                <h3 className="bg-gray-800 text-white text-center py-2 font-bold tracking-widest uppercase mb-6 rounded-md">Profile</h3>
                <p className="text-gray-600 leading-relaxed mb-12 text-justify">
                    Halo! Saya Hero Yehezkiel Manurung, mahasiswa program studi Teknologi Informasi di Fakultas Vokasi, Universitas Brawijaya, Malang. Saya memiliki passion yang besar dalam dunia web development, khususnya mengeksplorasi teknologi.
                    Bagi saya, menulis kode dan merancang arsitektur sistem (seperti merancang ERD atau prototipe aplikasi keuangan) sangat mirip dengan menyusun sebuah strategi matang, di mana logika dan efisiensi adalah kunci utamanya. Saya sangat menikmati proses kolaborasi dalam tim, memecahkan masalah teknis yang kompleks, dan mengubah ide-ide abstrak menjadi antarmuka digital yang fungsional dan ramah pengguna.
                    Di luar layar laptop, saya menyeimbangkan rutinitas dengan berolahraga seperti voli dan sepak bola, menikmati karya visual dan cerita bertema strategi investasi, serta menyalurkan kreativitas melalui fotografi dan gaming. Saya selalu antusias untuk terus belajar teknologi baru dan siap berkolaborasi untuk menciptakan inovasi digital yang berdampak positif!
                </p>

                <h3 className="bg-gray-800 text-white text-center py-2 font-bold tracking-widest uppercase mb-6 rounded-md">Education</h3>
                <div className="space-y-6 mb-12">
                    <div className="grid grid-cols-[100px_auto_1fr] gap-4 items-start">
                        <div className="font-bold text-gray-800">2011 - 2012</div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full mt-1.5"></div>
                        <div className="text-gray-700 font-medium">PAUD Pelita Kasih, Toba, Sumatera Utara</div>
                    </div>
                    <div className="grid grid-cols-[100px_auto_1fr] gap-4 items-start">
                        <div className="font-bold text-gray-800">2012 - 2018</div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full mt-1.5"></div>
                        <div className="text-gray-700 font-medium text-lg">SDN 175811 Pangombusan, Toba, Sumatera Utara</div>
                    </div>
                    <div className="grid grid-cols-[100px_auto_1fr] gap-4 items-start">
                        <div className="font-bold text-gray-800">2018 - 2021</div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full mt-1.5"></div>
                        <div className="text-gray-700 font-medium">SMPS Bonapasogit Sejahtera, Toba, Sumatera Utara</div>
                    </div>
                    <div className="grid grid-cols-[100px_auto_1fr] gap-4 items-start">
                        <div className="font-bold text-gray-800">2021 - 2024</div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full mt-1.5"></div>
                        <div className="text-gray-700 font-medium">SMAN 2 Balige, Toba, Sumatera Utara</div>
                    </div>
                    <div className="grid grid-cols-[100px_auto_1fr] gap-4 items-start">
                        <div className="font-bold text-gray-800">2024 - Now</div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full mt-1.5"></div>
                        <div className="text-gray-700 font-medium">Universitas Brawijaya<br /> <span className="text-sm font-normal text-gray-500">Teknologi Informasi, Fakultas Vokasi</span></div>
                    </div>
                </div>

                <h3 className="bg-gray-800 text-white text-center py-2 font-bold tracking-widest uppercase mb-6 rounded-md">Work Experience</h3>
                <div className="space-y-6 mb-12">
                    <div className="grid grid-cols-[100px_auto_1fr] gap-4 items-start">
                        <div className="font-bold text-gray-800">2026</div>
                        <div className="w-3 h-3 bg-gray-400 rounded-full mt-1.5"></div>
                        <div>
                            <div className="text-gray-800 font-bold">Tim Developer - Projek Based Learning</div>
                            <p className="text-sm text-gray-500 mt-1 leading-relaxed">tim develop aplikasi investasi berbasis keuangan.</p>
                        </div>
                    </div>
                    <div class="grid grid-cols-[100px_auto_1fr] gap-4 items-start">
                        <div class="font-bold text-gray-800">2025</div>
                        <div class="w-3 h-3 bg-gray-400 rounded-full mt-1.5"></div>
                        <div>
                            <div class="text-gray-800 font-bold">Tim Developer - Projek Ujian Akhir Semester 1</div>
                            <p class="text-sm text-gray-500 mt-1 leading-relaxed">Membangun aplikasi kasir menggunakan Java.</p>
                        </div>
                    </div>
                </div>
            </div>
             {/* ================= kolom kanan bawah ================= */}
            <div className="bg-slate-200 shadow-xl p-8 md:p-12 mt-5 mb-0 rounded-3xl flex flex-col justify-center items-center text-center border-2 border-transparent hover:border-gray-100 transition-all duration-500">
                <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-green-50 border border-green-200 mb-8 shadow-sm">
                    <span className="relative flex h-3.5 w-3.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-500"></span>
                    </span>
                    <span className="text-sm font-bold text-green-700 tracking-wide">Available for Team Projects</span>
                </div>

                <h3 className="text-3xl font-bold font-serif text-gray-900 mb-4">Let's Build Something Great!</h3>
                <p className="text-gray-500 leading-relaxed mb-10 max-w-md text-sm md:text-base">
                    Tertarik untuk berkolaborasi dalam tugas akhir, proyek web development, atau butuh bantuan untuk membangun antarmuka website? Jangan menghubungi saya!
                </p>
                 <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <a href="#" className="inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-bold py-3.5 px-8 rounded-xl transition duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
                    <i class="fa-solid fa-download text-lg"></i> Download CV
                </a>
                <a href="#" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-bold py-3.5 px-8 rounded-xl border-2 border-gray-900 transition duration-300 hover:shadow-md hover:-translate-y-1">
                    <i class="fa-solid fa-paper-plane text-lg"></i> Contact Me
                </a>
            </div>
            </div> 
           
        </div>
      </section>
    </div>
  );
}

export default HeroProfile;