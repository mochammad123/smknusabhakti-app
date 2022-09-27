import React from "react";
import "./../about_me/aboutMe.css";
import BackgroundImage from "./../../assets/images/background-1.png";
import ImageBackground from "./../../assets/images/15.png";

const Goal = () => {
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
                  <h1>Tujuan & Sasaran</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="card-item2">
            <div className="leftSide">
              <div className="imageWrapper">
                <div className="card-main" style={{ height: "auto" }}>
                  <div className="card-image">
                    <img src={ImageBackground} alt="" className="card-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rightSide flexCenter">
              <div className="card-main2">
                <div
                  className="headerHome"
                  style={{ textAlign: "justify", marginTop: "20px" }}
                >
                  <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Tujuan
                  </h3>
                  <p>
                    <ol>
                      <li>
                        Meningkatkan mutu pendidikan dalam bidang kesehatan baik
                        farmasi dan kimia analisis.
                      </li>{" "}
                      <li>
                        Partisipasi aktif dalam pembangunan, mencerdaskan
                        kehidupan bangsa serta menunjang pembangunan nasional
                        dan otonomi daerah yang dilandasi oleh keimanan dan
                        ketaqwaan terhadap Tuhan Yang Maha Esa.
                      </li>
                      <li>
                        Berperan aktif dalam mensukseskan program Indonesia
                        Sehat. Mempersiapkan peserta didik terutama untuk
                        bekerja sesuai dengan bidang keahliannya yaitu bidang
                        FARMASI, ANALISIS KIMIA dan KEPERAWATAN.
                      </li>{" "}
                      <li>
                        Meningkatkan kualitas lulusan atau tamatan sekaligus
                        mempersiapkan untuk memasuki dunia kerja.
                      </li>
                    </ol>
                  </p>{" "}
                  <br />
                  <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                    Sasaran
                  </h3>
                  <p>
                    Sasaran yang ingin dicapai oleh SMK Nusa Bhakti Bandung
                    berkaitan dengan pengembangan sekolah adalah :
                    <ol type="1">
                      <li>
                        Tercapainya keberhasilan dalam pelaksanaan uji
                        kompetensi peserta didik melalui kepemilikan sertifikat
                        kompetensi sebagai bukti pengakuan profesionalitas dalam
                        meningkatkan daya saing di lapangan kerja.
                      </li>{" "}
                      <li>
                        Tercapainya sikap profesionalisme dan etos kerja yang
                        baik.
                      </li>
                      <li>
                        Pengembangan ilmu pengetahuan dan teknologi sederhana
                        yang berguna untuk masyarakat terutama di bidang farmasi
                        diantaranya tentang obat, obat tradisinal, makanan dan
                        minuman serta kosmetika.
                      </li>{" "}
                    </ol>
                  </p>{" "}
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Goal;
