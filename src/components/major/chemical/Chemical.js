import React from "react";
import BackgroundImage from "./../../../assets/images/background-1.png";
import "./../../major/major.css";

const Chemical = () => {
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
                  <h1>Analisis Kimia</h1>
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
                    Seiring dengan perkembangan industri kimia yang semakin
                    pesat serta atas kepercayaan dari stake holder akan kualitas
                    lulusan SMK NBB, maka mulai tahun 2007/2008 SMK Nusa Bhakti
                    Bandung membuka Kompetensi Keahlian Analisis Kimia Program 3
                    (Tiga) tahun. Untuk menghasilkan kwalitas lulusan, SMK Nusa
                    Bhakti Bandung bekerjasama dengan SMK Negeri 13 Bandung
                    sebagai Sister School dalam bidang pengadaan staff pengajar.
                    Kegiatan Belajar mengajar memadukan Teori di dalam Kelas dan
                    Praktek di Laboratorium Kimia. Praktek Kerja Lapangan (PKL)
                    dilaksanakan di Industri Kimia dan Farmasi yang ada di Kota
                    Bandung maupun luar kota Bandung. Prospek lulusan lapangan
                    kerja antara lain :{" "}
                  </p>
                  <br />
                  <p>
                    <ol type="1">
                      <li>Laboran pada laboratorium kimia,</li>
                      <li>Pengelola laboratorium kimia,</li>
                      <li>Pelaksana analisis kimia dan mikrobiologi,</li>
                      <li>
                        Pelaksana quality assurance produk dan proses di
                        industri,
                      </li>
                      <li>
                        Operator proses industri partambangan, migas dan
                        fertilizer,
                      </li>
                      <li>Wirausahawan industri kecil kimia,</li>
                      <li>Pelaksana litbang industri kimia,</li>
                      <li>
                        Pelaksana rekapitulasi dan pengolahan data dalam
                        industri kimia, dll.
                      </li>
                    </ol>
                  </p>
                  <br />
                  <p style={{ textIndent: "45px" }}>
                    Dengan Ijasah dari Depdiknas dapat melanjutkan pendidikan ke
                    jenjang lebih tinggi baik ke PTN melalui jalur SPMB maupun
                    ke PTS bidang studi Kimia maupun bidang studi yang lain.
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

export default Chemical;
