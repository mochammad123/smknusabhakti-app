import React from "react";
import "./../home/home.css";
import Background from "./../../assets/images/background.png";
import Farm from "./../../assets/images/farm.png";
import Chem from "./../../assets/images/chem.png";
import Nurse from "./../../assets/images/nurse.png";
import QuotesIcon from "./../../assets/svg/Quotes";
import Dots from "./../../assets/svg/Dots";

const Home = () => {
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
              <div>
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
        <div className="rightSide flexCenter">
          <div>
            <h1 className="extraBold font60">Selamat Datang,</h1>
            <h1 className="extraBold font50">SMK Nusa Bhakti Bandung.</h1>
            <div className="headerHome font18 semiBold">
              Sebagai media informasi dan komunikasi, website SMK Nusa Bhakti
              Bandung dibangun dan dikembangkan dalam rangka meningkatkan
              layanan sekolah kepada peserta didik, orang tua, masyarakat dan
              para stakeholder.
            </div>
          </div>
        </div>
      </section>

      <section className="container wrapper">
        <div className="extraBold font60 title-name">
          <h1>Jurusan</h1>
        </div>
        <div className="flexCenter">
          <div className="card-major">
            <div className="card-major-img">
              <img src={Farm} alt="" />
            </div>
            <div className="card-content">
              <div className="card-details">
                <h2>Farmasi</h2>
                <span>SMK Nusa Bhakti Bandung</span>
                <div className="card-data">
                  <h3>
                    Dengan dibimbing guru-guru yang mayoritas berprofesi
                    Apoteker dan Guru profesi lain yang telah berpengalaman
                    dibidangnya serta fasilitas belajar dan praktek yang sangat
                    memadai, mampu mendidik siswa sesuai tuntutan stake holder.
                    Dengan lama Program pendidikan 3 (Tiga) tahun, lulusan
                    menjadi seorang Tenaga Tingkat Menengah yang memiliki
                    kompetensi Tenaga Ahli Farmasi.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card-major">
            <div className="card-major-img">
              <img src={Chem} alt="" />
            </div>
            <div className="card-content">
              <div className="card-details" style={{ marginBottom: "-15px" }}>
                <h2>Kimia Analisis</h2>
                <span>SMK Nusa Bhakti Bandung</span>
                <div className="card-data">
                  <h3>
                    Seiring dengan perkembangan industri kimia yang semakin
                    pesat serta atas kepercayaan dari stake holder akan kualitas
                    lulusan SMK NBB, maka tahun 2007/2008 mulai membuka
                    Kompetensi Keahlian Kimia Analisis. SMK NBB bekerjasama
                    dengan SMK Negeri 13 Bandung dalam bidang pengadaan staff
                    pengajar. Kegiatan Belajar mengajar memadukan Teori di dalam
                    Kelas dan Praktek di Laboratorium Kimia.
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="card-major">
            <div className="card-major-img">
              <img src={Nurse} alt="" />
            </div>
            <div className="card-content">
              <div className="card-details" style={{ marginBottom: "-15px" }}>
                <h2>Keperawatan</h2>
                <span>SMK Nusa Bhakti Bandung</span>
                <div className="card-data">
                  <h3>
                    Seiring dengan perkembangan dunia kesehatan yang semakin
                    pesat serta atas kepercayaan dari stake holder akan kualitas
                    lulusan SMK NBB, maka mulai tahun 2016/2017 SMK Nusa Bhakti
                    Bandung membuka Kompetensi Keahlian Asisten Keperawatan.
                    Kegiatan Belajar mengajar memadukan Teori di dalam Kelas dan
                    Praktek di Laboratorium Perawat. Praktek Kerja Lapangan
                    (PKL) dilaksanakan di Rumah Sakit yang ada di Kota Bandung.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container2 wrapper2">
        <div className="extraBold font60 title-name">
          <h1>Berita</h1>
        </div>
        <div className="card-grid">
          <div className="card">
            <div className="card-head">
              <img src={Background} alt="" className="card-img" />
            </div>
            <div className="card-body">
              <h3>31 Desember 2022</h3>
              <h1>Lorem Isum Kang Sae Sum</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus nihil officia eius, magnam sit incidunt, numquam fugit
                eos odit in tempora commodi ullam autem, nesciunt consequuntur
                aliquid ipsam adipisci. Placeat delectus odit blanditiis
                repellat quia possimus sit dicta qui? Quidem, cupiditate non
                alias autem iusto molestiae praesentium doloremque nesciunt
                dignissimos!
              </p>
              <div className="card-footer">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="#303030"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              <img src={Background} alt="" className="card-img" />
            </div>
            <div className="card-body">
              <h3>31 Desember 2022</h3>
              <h1>Lorem Isum Kang Sae Sum</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus nihil officia eius, magnam sit incidunt, numquam fugit
                eos odit in tempora commodi ullam autem, nesciunt consequuntur
                aliquid ipsam adipisci. Placeat delectus odit blanditiis
                repellat quia possimus sit dicta qui? Quidem, cupiditate non
                alias autem iusto molestiae praesentium doloremque nesciunt
                dignissimos!
              </p>
              <div className="card-footer">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="#303030"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-head">
              <img src={Background} alt="" className="card-img" />
            </div>
            <div className="card-body">
              <h3>31 Desember 2022</h3>
              <h1>Lorem Isum Kang Sae Sum</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus nihil officia eius, magnam sit incidunt, numquam fugit
                eos odit in tempora commodi ullam autem, nesciunt consequuntur
                aliquid ipsam adipisci. Placeat delectus odit blanditiis
                repellat quia possimus sit dicta qui? Quidem, cupiditate non
                alias autem iusto molestiae praesentium doloremque nesciunt
                dignissimos!
              </p>
              <div className="card-footer">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="#303030"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container wrapper2 flexSpaceCenter">
        <div className="leftSide flexCenter">
          <div>
            <h1
              className="extraBold font60"
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              Hubungi Kami
            </h1>
            <div className="flexCenter">
              <a href="https://www.instagram.com/smknusabhaktibandung/">
                <svg
                  class="w-12 h-12 text-red-600 fill-current"
                  mlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M15.233 5.488c-.843-.038-1.097-.046-3.233-.046s-2.389.008-3.232.046c-2.17.099-3.181 1.127-3.279 3.279-.039.844-.048 1.097-.048 3.233s.009 2.389.047 3.233c.099 2.148 1.106 3.18 3.279 3.279.843.038 1.097.047 3.233.047 2.137 0 2.39-.008 3.233-.046 2.17-.099 3.18-1.129 3.279-3.279.038-.844.046-1.097.046-3.233s-.008-2.389-.046-3.232c-.099-2.153-1.111-3.182-3.279-3.281zm-3.233 10.62c-2.269 0-4.108-1.839-4.108-4.108 0-2.269 1.84-4.108 4.108-4.108s4.108 1.839 4.108 4.108c0 2.269-1.839 4.108-4.108 4.108zm4.271-7.418c-.53 0-.96-.43-.96-.96s.43-.96.96-.96.96.43.96.96-.43.96-.96.96zm-1.604 3.31c0 1.473-1.194 2.667-2.667 2.667s-2.667-1.194-2.667-2.667c0-1.473 1.194-2.667 2.667-2.667s2.667 1.194 2.667 2.667zm4.333-12h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm.952 15.298c-.132 2.909-1.751 4.521-4.653 4.654-.854.039-1.126.048-3.299.048s-2.444-.009-3.298-.048c-2.908-.133-4.52-1.748-4.654-4.654-.039-.853-.048-1.125-.048-3.298 0-2.172.009-2.445.048-3.298.134-2.908 1.748-4.521 4.654-4.653.854-.04 1.125-.049 3.298-.049s2.445.009 3.299.048c2.908.133 4.523 1.751 4.653 4.653.039.854.048 1.127.048 3.299 0 2.173-.009 2.445-.048 3.298z" />
                </svg>
              </a>

              <a href="https://www.facebook.com/nusabhakti.bandung">
                <svg
                  class="w-12 h-12 text-blue-600 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z" />
                </svg>
              </a>

              <a href=" https://wa.me/+6287829887357">
                <svg
                  class="w-12 h-12 text-green-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="imageWrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.6415229567006!2d107.6157748143172!3d-6.933378269793923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e8812eabc49b%3A0xbdcc6eb5f04b6c0d!2sSMK%20Nusa%20Bhakti!5e0!3m2!1sid!2sid!4v1647322837272!5m2!1sid!2sid"
              title="google maps"
              allowfullscreen
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
