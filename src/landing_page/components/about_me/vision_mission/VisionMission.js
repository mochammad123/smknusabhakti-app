import React from "react";
import "./../../about_me/aboutMe.css";
import ImageBackground from "./../../../assets/images/15.png";
import Header from "../../templates/Header";

const VisionMission = () => {
  return (
    <>
      <div className="container wrapper2 flexSpaceCenter">
        <div className="row">
          <Header title="Visi & Misi" />

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
                  <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Visi</h3>
                  <p>
                    Menjadikan Lembaga Pendidikan Menengah Kejuruan yang ahli
                    dan unggul dalam pendidikan, penelitian dan pengabdian pada
                    masyarakat dalam bidang farmasi yang profesional di tingkat
                    nasional dan internasional.
                  </p>{" "}
                  <br />
                  <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>Misi</h3>
                  <p>
                    Menghasilkan lulusan yang profesional, bertakwa terhadap
                    Tuhan dengan intregitas tinggi dan landasan yang kuat dalam
                    ilmu farmasi serta aplikasinya, terampil bekerja di
                    laboratorium, mampu berkomunikasi secara ilmiah untuk
                    kepentingan kemanusiaan.
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

export default VisionMission;
