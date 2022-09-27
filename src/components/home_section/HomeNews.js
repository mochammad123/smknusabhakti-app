import React from "react";
import "./../home/home.css";
import Background from "./../../assets/images/background.png";

const HomeNews = () => {
  return (
    <>
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
    </>
  );
};

export default HomeNews;
