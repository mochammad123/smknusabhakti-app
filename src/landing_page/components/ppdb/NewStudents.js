import React from "react";
import "./../about_me/aboutMe.css";
import ImageBackground from "./../../assets/images/17.png";
import Header from "../templates/Header";
import { Button } from "@mui/material";
import Footer from "../footer/Footer";
import NavbarDaisy from "../navbar/NavbarDaisy";

const NewStudents = () => {
  return (
    <>
      <NavbarDaisy />
      <div className="bg-white">
        <div className="container wrapper2 flexSpaceCenter text-black">
          <div className="row">
            <Header title="PPDB" />

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
                    <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Persyaratan Calon Peserta Didik
                    </h3>
                    <p>
                      <ol>
                        <li>Warga Negara Indonesia,</li>{" "}
                        <li>Lulusan SMP atau Madrasah Tsanawiyah (MTS),</li>
                        <li>
                          Berumur Maks. 21 Tahun pada saat pendaftaran,
                        </li>{" "}
                        <li>
                          Belum Menikah dan bersedia tidak menikah selama
                          mengikuti pendidikan,
                        </li>{" "}
                        <li>Berbadan sehat dan tidak buta warna.</li>{" "}
                      </ol>
                    </p>{" "}
                    <br />
                    <h3 style={{ fontSize: "20px", fontWeight: "bold" }}>
                      Ketentuan Pendaftaran
                    </h3>
                    <p>
                      <ol type="1">
                        <li>Tidak cacat fisik yang dapat menganggu kerja,</li>{" "}
                        <li>Mengisi formulir pendaftaran,</li>
                        <li>
                          Menyerahkan Foto copy ijazah / STTB yang telah
                          dilegalisir atau Surat Tanda Kelulusan (STK),
                        </li>{" "}
                        <li>Menyerahkan Fotocopy raport,</li>{" "}
                        <li>Menyerahkan Fotocopy Akte Kelahiran,</li>{" "}
                        <li>
                          Menyerahkan pasphoto berwarna ukuran 3x4 cm sebanyak 4
                          (empat) buah,
                        </li>{" "}
                        <li>Menyerahkan Fotocopy Kartu Keluarga, dan</li>{" "}
                        <li>Print Out NISN.</li>{" "}
                      </ol>
                    </p>{" "}
                    <br />
                    <Button variant="contained" fullWidth>
                      <a href=" https://wa.me/+6287829887357?text=Saya%20ingin%20mendaftar%20di%20SMK%20Nusa%20Bhakti%20Bandung">
                        Daftar Siswa Baru
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewStudents;
