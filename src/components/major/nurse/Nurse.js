import React from "react";
import BackgroundImage from "./../../../assets/images/background-1.png";
import "./../../major/major.css";

const Nurse = () => {
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
                  <h1>Keperawatan</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="card-item-major">
            <div className="flexCenter">
              <div className="card-main-major">
                <div
                  className="header-home-major"
                  style={{ textAlign: "justify", marginTop: "20px" }}
                >
                  <p style={{ textIndent: "45px" }}>
                    Seiring dengan perkembangan dunia kesehatan yang semakin
                    pesat serta atas kepercayaan dari stake holder akan kualitas
                    lulusan SMK NBB, maka mulai tahun 2016/2017 SMK Nusa Bhakti
                    Bandung membuka Kompetensi Keahlian Asisten Keperawatan
                    Program 3 (Tiga) tahun. Kegiatan Belajar mengajar memadukan
                    Teori di dalam Kelas dan Praktek di Laboratorium Perawat.
                    Praktek Kerja Lapangan (PKL) dilaksanakan di Rumah Sakit
                    yang ada di Kota Bandung maupun luar kota Bandung.{" "}
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

export default Nurse;
