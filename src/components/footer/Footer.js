import React from "react";
import "./../footer/footer.css";

const Footer = () => {
  return (
    <footer className="wrapperFooter">
      <div className="darkBg">
        <div className="container">
          <div className="innerWrapper flexSpaceCenter">
            <div className="footer-info whiteColor">
              <div className="footer-info-border">
                <div className="section-title">
                  <h2 className="semiBold fontRandom">Alamat</h2>
                </div>
                <div>
                  <address className="font15">
                    <p>
                      Jln. Cilentah No. 30,
                      <br /> Kel. Burangrang, Kec. Lengkong,
                      <br />
                      Kota Bandung,
                      <br />
                      Jawa Barat 40262
                      <br />
                    </p>
                  </address>
                </div>
              </div>
            </div>
            <div className="footer-info whiteColor">
              <div className="footer-info-border">
                <div className="section-title">
                  <h2 className="semiBold fontRandom">Kontak</h2>
                </div>
                <div>
                  <address className="font15">
                    <p>
                      0878-2988-7357 <br />
                      (022) 7320425
                      <br />
                      smknusabhakti@gmail.com
                      <br />
                      IG : smknusabhaktibandung
                    </p>
                  </address>
                </div>
              </div>
            </div>
            <div className="footer-info whiteColor">
              <div className="footer-info-border">
                <div className="section-title">
                  <h2 className="semiBold fontRandom">Waktu Kerja</h2>
                </div>
                <div>
                  <address className="font15">
                    <strong>Senin s.d. Jum'at</strong>
                    <p>Pukul : 08:00 AM - 15:00 PM</p>
                    <strong>Sabtu s.d. Minggu</strong>
                    <p>Libur</p>
                  </address>
                </div>
              </div>
            </div>
            <div className="footer-info whiteColor">
              <div className="footer-info-border">
                <div className="font15">
                  <div>
                    <strong>Copyright @2022</strong>
                    <p>SMK Nusa Bhakti Bandung</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
