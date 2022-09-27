import React from "react";
import "./../about_me/aboutMe.css";
import BackgroundImage from "./../../assets/images/background-1.png";
import ImageBackground from "./../../assets/images/15.png";

const Background = () => {
  return (
    <>
      <div className="container wrapper2 flexSpaceCenter">
        <div className="row">
          <div className="card-item">
            <div className="card-main">
              <div className="card-image">
                <img src={BackgroundImage} alt="" className="card-img" />
              </div>
            </div>
            <div className="flexCenter">
              <div className="card-body2 flexCenter">
                <div className="card-title">
                  <h1>Latar Belakang</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="card-item2">
            <div className="leftSide2">
              <div className="imageWrapper">
                <div className="card-main" style={{ height: "auto" }}>
                  <div className="card-image">
                    <img src={ImageBackground} alt="" className="card-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rightSide2 flexCenter">
              <div className="card-main2">
                <div
                  className="headerHome"
                  style={{ textAlign: "justify", marginTop: "20px" }}
                >
                  <p style={{ textIndent: "45px" }}>
                    Sekolah Menengah Kejuruan Nusa Bhakti Bandung (SMK NBB)
                    merupakan sekolah pada jenjang pendidikan tingkat menengah
                    yang didirikan untuk mendukung Program Pemerintah dalam
                    bidang pendidikan untuk mencerdaskan bangsa sesuai amanat
                    UUD 1945 serta untuk merespon kebutuhan akan sumber daya
                    manusia tingkat menengah yang SIAP KERJA dengan dukungan
                    penuh dari Departemen Pendidikan Nasional dan Departemen
                    Kesehatan. SMK NBB memiliki Program Keahlian Farmasi dan
                    Analisis Kimia dengan Akreditasi "A", merupakan Perintis
                    Sekolah Menengah Kejuruan Farmasi di Kota Bandung & Jawa
                    Barat Pada Tahun 2004/2005. Telah menghasilkan lulusan
                    Asisten Apoteker yang dilantik oleh Kepala Pusat Pendidikan
                    Latihan Kesehatan (Kapusdiklatkes), lulusan mendapatkan
                    Surat Ijin Kerja (SIK) dari Departemen Kesehatan dan lulusan
                    Analis Kimia. Lulusan tersebar dibeberapa daerah khususnya
                    di Jawa Barat dan daerah lain seperti Banten, DKI Jakarta,
                    Jawa Timur dan Kalimantan.{" "}
                  </p>
                  <br />
                  <p style={{ textIndent: "45px" }}>
                    Sekolah Menengah Kejuruan Nusa Bhakti Bandung (SMK NBB)
                    merupakan sekolah pada jenjang pendidikan tingkat menengah
                    yang didirikan untuk mendukung Program Pemerintah dalam
                    bidang pendidikan untuk mencerdaskan bangsa sesuai amanat
                    UUD 1945 serta untuk merespon kebutuhan akan sumber daya
                    manusia tingkat menengah yang SIAP KERJA dengan dukungan
                    penuh dari Departemen Pendidikan Nasional dan Departemen
                    Kesehatan.{" "}
                  </p>
                  <br />
                  <p style={{ textIndent: "45px" }}>
                    SMK NBB memiliki Program Keahlian Farmasi dan Analisis Kimia
                    dengan Akreditasi "A", merupakan Perintis Sekolah Menengah
                    Kejuruan Farmasi di Kota Bandung & Jawa Barat Pada Tahun
                    2004/2005. Telah menghasilkan lulusan Asisten Apoteker yang
                    dilantik oleh Kepala Pusat Pendidikan Latihan Kesehatan
                    (Kapusdiklatkes), lulusan mendapatkan Surat Ijin Kerja (SIK)
                    dari Departemen Kesehatan dan lulusan Analis Kimia,. Lulusan
                    tersebar dibeberapa daerah khususnya di Jawa Barat dan
                    daerah lain seperti Banten, DKI Jakarta, Jawa Timur dan
                    Kalimantan.
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

export default Background;
