import React from "react";
import Header from "../../templates/Header";
import "./../../major/major.css";

const Pharmacy = () => {
  return (
    <>
      <div className="container wrapper2 flexSpaceCenter">
        <div className="row">
          <Header title="Farmasi" />

          <div className="card-item-major">
            <div className="flexCenter">
              <div className="card-main-major">
                <div
                  className="header-home-major"
                  style={{ textAlign: "justify", marginTop: "20px" }}
                >
                  <p style={{ textIndent: "45px" }}>
                    Dengan dibimbing guru-guru yang mayoritas berprofesi
                    Apoteker dan Guru profesi lain yang telah berpengalaman
                    dibidangnya serta fasilitas belajar dan praktek yang sangat
                    memadai, mampu mendidik siswa sesuai tuntutan stake holder.
                    Dengan lama Program pendidikan 3 (Tiga) tahun, lulusan
                    menjadi seorang Tenaga Tingkat Menengah yang memiliki
                    kompetensi Tenaga Ahli Farmasi.{" "}
                  </p>
                  <br />
                  <p style={{ textIndent: "45px" }}>
                    Kegiatan Belajar mengajar memadukan Teori di dalam Kelas dan
                    Praktek di Laboratorium Resep, Kimia & Farmakognosi serta
                    Praktek Kerja Lapangan (PKL) dilaksanakan di Apotik, Rumah
                    Sakit Pemerintah & Swasta serta Industri Farmasi. Untuk
                    menambah wawasan lulusan dilaksanakan juga kunjungan
                    industri yang ada di Kota Bandung serta industri yang ada di
                    luar Bandung. Lulusan mendapatkan Surat Ijin Kerja Asisten
                    Apoteker (SIKAA) dari Depkes, dapat langsung bekerja di :
                  </p>
                  <p>
                    <ol type="1">
                      <li>Apotik</li>
                      <li>Pedagang Besar Farmasi (PBF)</li>
                      <li>Toko obat</li>
                      <li>Industri Farmasi</li>
                      <li>Industri Makanan dan Minuman</li>
                      <li>Rumah Sakit</li>
                      <li>Puskesmas, dll.</li>
                    </ol>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pharmacy;
