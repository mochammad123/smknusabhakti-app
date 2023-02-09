import React from "react";
import "./../home/home.css";
import Farm from "./../../assets/images/farm.png";
import Chem from "./../../assets/images/chem.png";
import Nurse from "./../../assets/images/nurse.png";

const HomeMajor = () => {
  return (
    <>
      <section className="container wrapper text-black">
        <div className="extraBold font60 title-name">
          <h1>Jurusan</h1>
        </div>
        <div className="flex-none lg:flex justify-center">
          <div className="transition card ease-in-out h-auto bg-white drop-shadow-2xl hover:bg-orange-500 hover:duration-300 hover:delay-200 hover:text-white ml-0 lg:ml-2 md:ml-2">
            <figure className="px-10 pt-10">
              <img src={Farm} alt="Shoes" className="rounded-xl w-36 h-36" />
            </figure>
            <div className="px-10 items-center">
              <h2 className="text-2xl font-bold mt-5 text-center">Farmasi</h2>
              <p className="text-justify text-sm mt-5 mb-5">
                Dengan dibimbing guru-guru yang mayoritas berprofesi Apoteker
                dan Guru profesi lain yang telah berpengalaman dibidangnya serta
                fasilitas belajar dan praktek yang sangat memadai, mampu
                mendidik siswa sesuai tuntutan stake holder. Dengan lama Program
                pendidikan 3 (Tiga) tahun, lulusan menjadi seorang Tenaga
                Tingkat Menengah yang memiliki kompetensi Tenaga Ahli Farmasi.
              </p>
            </div>
          </div>
          <div className="transition card ease-in-out h-auto bg-white drop-shadow-2xl hover:bg-sky-600 hover:duration-300 hover:delay-200 hover:text-white ">
            <figure className="px-10 pt-10">
              <img src={Chem} alt="Shoes" className="rounded-xl w-36 h-36" />
            </figure>
            <div className="px-10 items-center">
              <h2 className="text-2xl font-bold mt-5 text-center">
                Kimia Analisis
              </h2>
              <p className="text-justify text-sm mt-5 mb-5">
                Seiring dengan perkembangan industri kimia yang semakin pesat
                serta atas kepercayaan dari stake holder akan kualitas lulusan
                SMK NBB, maka tahun 2007/2008 mulai membuka Kompetensi Keahlian
                Kimia Analisis. SMK NBB bekerjasama dengan SMK Negeri 13 Bandung
                dalam bidang pengadaan staff pengajar. Kegiatan Belajar mengajar
                memadukan Teori di dalam Kelas dan Praktek di Laboratorium
                Kimia.
              </p>
            </div>
          </div>
          <div className="transition card ease-in-out h-auto bg-white drop-shadow-2xl hover:bg-red-400 hover:duration-300 hover:delay-200 hover:text-white ">
            <figure className="px-10 pt-10">
              <img src={Nurse} alt="Shoes" className="rounded-xl w-36 h-36" />
            </figure>
            <div className="px-10 items-center">
              <h2 className="text-2xl font-bold mt-5 text-center">
                Keperawatan
              </h2>
              <p className="text-justify text-sm mt-5 mb-5">
                Seiring dengan perkembangan dunia kesehatan yang semakin pesat
                serta atas kepercayaan dari stake holder akan kualitas lulusan
                SMK NBB, maka mulai tahun 2016/2017 SMK Nusa Bhakti Bandung
                membuka Kompetensi Keahlian Asisten Keperawatan. Kegiatan
                Belajar mengajar memadukan Teori di dalam Kelas dan Praktek di
                Laboratorium Perawat. Praktek Kerja Lapangan (PKL) dilaksanakan
                di Rumah Sakit yang ada di Kota Bandung.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeMajor;
