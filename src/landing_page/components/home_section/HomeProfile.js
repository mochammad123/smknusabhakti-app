import React from "react";
import "./../home/home.css";

const HomeProfile = () => {
  return (
    <>
      <section className="container2 wrapper2 flexSpaceCenter">
        <div className="leftSide">
          <div className="imageWrapper">
            <iframe
              className="our-videos"
              src="https://www.youtube.com/embed/-yCql-VTtHo"
              title="Profil Sekolah"
            />
            <div className="overlay-effect">
              <h4 style={{ color: "white", fontWeight: "600" }}>
                Profil Sekolah
              </h4>
            </div>
          </div>
        </div>
        <div className="rightSide flexCenter lg:ml-2 md:ml-4 sm:ml-0">
          <div className="fontRecovery">
            <h1 className="extraBold font60 text-sky-900">Selamat Datang,</h1>
            <h1 className="extraBold font50 text-sky-900">
              SMK Nusa Bhakti Bandung.
            </h1>
            <div
              className="headerHome font18 semiBold text-sky-800"
              style={{ textAlign: "justify" }}
            >
              Sebagai media informasi dan komunikasi, website SMK Nusa Bhakti
              Bandung dibangun dan dikembangkan dalam rangka meningkatkan
              layanan sekolah kepada peserta didik, orang tua, masyarakat dan
              para stakeholder.
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeProfile;
