import React from "react";
import "./../home/home.css";
import Background from "./../../assets/images/background.png";
import QuotesIcon from "./../../assets/svg/Quotes";
import Dots from "./../../assets/svg/Dots";

const HomeWelcome = () => {
  return (
    <>
      <section className="container wrapper flexSpaceCenter">
        <div className="leftSide flexCenter">
          <div>
            <h1 className="extraBold font60">SMK Nusa Bhakti Bandung.</h1>
            <div className="headerHome font18 semiBold">
              Farmasi, Analisis Kimia dan Keperawatan. <br />
              Jl. Cilentah No. 30, Kel. Burangrang, Kec. Lengkong, Kota Bandung,
              Jawa Barat 40262. <br />
              Hp. 0878 2988 7357 <br /> Email : smknusabhakti@gmail.com <br />
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="imageWrapper">
            <img
              className="radius8 imageWrapperBackground"
              src={Background}
              alt="office"
            />
            <div className="quoteWrapper flexCenter darkBg radius8">
              <div className="quotesWrapper">
                <QuotesIcon />
              </div>
              <div className="quotesText">
                <p className="font15 whiteColor">
                  <em>
                    Kami Menyambut baik terbitnya Website SMK Nusa Bhakti
                    Bandung yang baru dengan harapan dipublikasikannya website
                    ini sekolah berharap : Peningkatan layanan pendidikan kepada
                    siswa, orangtua, dan masyarakat pada umumnya semakin
                    meningkat.
                  </em>
                </p>
                <p
                  className="font13 orangeColor textRight"
                  style={{ marginTop: "10px" }}
                >
                  Kepala Sekolah
                </p>
              </div>
            </div>
            <div className="dotsWrapper">
              <Dots />
            </div>
          </div>
          <div className="greyDiv lightBg"></div>
        </div>
      </section>
    </>
  );
};

export default HomeWelcome;
