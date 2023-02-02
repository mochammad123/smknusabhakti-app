import React from "react";
import Header from "../../templates/Header";
import "./../../major/major.css";

const Nurse = () => {
  return (
    <>
      <div className="container wrapper2 flexSpaceCenter text-black">
        <div className="row">
          <Header title="Keperawatan" />

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
