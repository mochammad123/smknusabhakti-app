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
        <div className="flexCenter">
          <div className="card-major">
            <div className="card-major-img">
              <img src={Farm} alt="" />
            </div>
            <div className="card-content">
              <div className="card-details">
                <h2>Farmasi</h2>
                <span>SMK Nusa Bhakti Bandung</span>
                <div className="card-data">
                  <h3>
                    Dengan dibimbing guru-guru yang mayoritas berprofesi
                    Apoteker dan Guru profesi lain yang telah berpengalaman
                    dibidangnya serta fasilitas belajar dan praktek yang sangat
                    memadai, mampu mendidik siswa sesuai tuntutan stake holder.
                    Dengan lama Program pendidikan 3 (Tiga) tahun, lulusan
                    menjadi seorang Tenaga Tingkat Menengah yang memiliki
                    kompetensi Tenaga Ahli Farmasi.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card-major">
            <div className="card-major-img">
              <img src={Chem} alt="" />
            </div>
            <div className="card-content">
              <div className="card-details" style={{ marginBottom: "-15px" }}>
                <h2>Kimia Analisis</h2>
                <span>SMK Nusa Bhakti Bandung</span>
                <div className="card-data">
                  <h3>
                    Seiring dengan perkembangan industri kimia yang semakin
                    pesat serta atas kepercayaan dari stake holder akan kualitas
                    lulusan SMK NBB, maka tahun 2007/2008 mulai membuka
                    Kompetensi Keahlian Kimia Analisis. SMK NBB bekerjasama
                    dengan SMK Negeri 13 Bandung dalam bidang pengadaan staff
                    pengajar. Kegiatan Belajar mengajar memadukan Teori di dalam
                    Kelas dan Praktek di Laboratorium Kimia.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card-major">
            <div className="card-major-img">
              <img src={Nurse} alt="" />
            </div>
            <div className="card-content">
              <div className="card-details" style={{ marginBottom: "-15px" }}>
                <h2>Keperawatan</h2>
                <span>SMK Nusa Bhakti Bandung</span>
                <div className="card-data">
                  <h3>
                    Seiring dengan perkembangan dunia kesehatan yang semakin
                    pesat serta atas kepercayaan dari stake holder akan kualitas
                    lulusan SMK NBB, maka mulai tahun 2016/2017 SMK Nusa Bhakti
                    Bandung membuka Kompetensi Keahlian Asisten Keperawatan.
                    Kegiatan Belajar mengajar memadukan Teori di dalam Kelas dan
                    Praktek di Laboratorium Perawat. Praktek Kerja Lapangan
                    (PKL) dilaksanakan di Rumah Sakit yang ada di Kota Bandung.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeMajor;
