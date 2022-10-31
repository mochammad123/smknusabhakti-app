import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import logo from "./../../assets/images/nbb.png";

import "./../nav/navbar.css";

const NavbarMenu = () => {
  const [isMenu, setIsMenu] = useState(false);
  const [isResponsiveClose, setResponsiveClose] = useState(false);
  const [y, setY] = useState(window.scrollY);
  const [isMenuSubMenu, setMenuSubMenu] = useState(false);

  const toggleClass = () => {
    setIsMenu(isMenu === false ? true : false);
    setResponsiveClose(isResponsiveClose === false ? true : false);
  };

  let boxClass = ["main-menu"];
  if (isMenu) {
    boxClass.push("menuq2");
  } else {
    boxClass.push("");
  }

  const toggleSubMenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if (isMenuSubMenu) {
    boxClassSubMenu.push("sub__menus__Active");
  } else {
    boxClassSubMenu.push("");
  }

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  let activeClassName = "is-active";
  let activeClassName1 = "is-active-sub-menu";
  let inactiveClassName = "sub__sub__menu";

  return (
    <header
      className="header__middle animate"
      style={
        y > 100
          ? { height: "60px", background: "#0B093B" }
          : { height: "80px", background: "#fff" }
      }
    >
      <div className="container navInner">
        <div className="row">
          <div
            className="header__middle__logo animate"
            style={y > 100 ? { marginTop: "7px" } : { marginTop: "17px" }}
          >
            <NavLink
              exact
              className="pointer"
              activeClassName="is-active"
              to="/"
            >
              <img src={logo} alt="logo" style={{ width: "10%" }} />
              <h1
                className="header__middle__logo__name"
                style={y > 100 ? { color: "white" } : { color: "#0B093B" }}
              >
                SMK NBB
              </h1>
            </NavLink>
          </div>

          <div
            className="header__middle__menus animate"
            style={y > 100 ? { marginTop: "22px" } : { marginTop: "32px" }}
          >
            <nav className="main-nav">
              {isResponsiveClose === true ? (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiXCircle />{" "}
                  </span>
                </>
              ) : (
                <>
                  <span
                    className="menubar__button"
                    style={{ display: "none" }}
                    onClick={toggleClass}
                  >
                    {" "}
                    <FiAlignRight />{" "}
                  </span>
                </>
              )}

              <ul className={boxClass.join(" ")}>
                <li className="menu-item">
                  <NavLink
                    exact
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                    onClick={toggleClass}
                    style={y > 100 ? { color: "white" } : undefined}
                    to={"/"}
                  >
                    Beranda
                  </NavLink>
                </li>
                <li
                  onClick={toggleSubMenu}
                  className="menu-item sub__menus__arrows"
                >
                  <Link
                    to="#"
                    exact
                    style={y > 100 ? { color: "white" } : undefined}
                  >
                    Tentang Kami <FiChevronDown />
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        className={({ isActive }) =>
                          isActive ? activeClassName1 : inactiveClassName
                        }
                        to={`/background`}
                      >
                        Latar Belakang
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        className={({ isActive }) =>
                          isActive ? activeClassName1 : inactiveClassName
                        }
                        to={`/vimi`}
                      >
                        Visi dan Misi
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        className={({ isActive }) =>
                          isActive ? activeClassName1 : inactiveClassName
                        }
                        to={`/goals`}
                      >
                        Tujuan Sekolah
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li
                  onClick={toggleSubMenu}
                  className="menu-item sub__menus__arrows"
                >
                  <Link to="#" style={y > 100 ? { color: "white" } : undefined}>
                    Jurusan <FiChevronDown />
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        className={({ isActive }) =>
                          isActive ? activeClassName1 : inactiveClassName
                        }
                        to={`/pharmacy`}
                      >
                        Farmasi
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        className={({ isActive }) =>
                          isActive ? activeClassName1 : inactiveClassName
                        }
                        to={`/chemical`}
                      >
                        Analisis Kimia
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        className={({ isActive }) =>
                          isActive ? activeClassName1 : inactiveClassName
                        }
                        to={`/nurses`}
                      >
                        Keperawatan
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li
                  onClick={toggleSubMenu}
                  className="menu-item sub__menus__arrows"
                >
                  <Link to="#" style={y > 100 ? { color: "white" } : undefined}>
                    Berita <FiChevronDown />
                  </Link>
                  <ul className={boxClassSubMenu.join(" ")}>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        className={({ isActive }) =>
                          isActive ? activeClassName1 : inactiveClassName
                        }
                        to={`/news`}
                      >
                        Berita
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        onClick={toggleClass}
                        className={({ isActive }) =>
                          isActive ? activeClassName1 : inactiveClassName
                        }
                        to={`/news_video`}
                      >
                        Berita Video
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <NavLink
                    exact
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                    onClick={toggleClass}
                    style={y > 100 ? { color: "white" } : undefined}
                    to={"/gallery"}
                  >
                    Galeri
                  </NavLink>
                </li>
                <li className="menu-item">
                  <NavLink
                    exact
                    className={({ isActive }) =>
                      isActive ? activeClassName : undefined
                    }
                    onClick={toggleClass}
                    style={y > 100 ? { color: "white" } : undefined}
                    to={"/ppdb"}
                  >
                    PPDB
                  </NavLink>
                </li>
                <li style={{ marginLeft: "15px", marginTop: "-7px" }}>
                  <NavLink
                    exact
                    onClick={toggleClass}
                    style={y > 100 ? { color: "white" } : { color: "white" }}
                    to={"/ppdb"}
                  >
                    <button className="bg-orange-600 hover:bg-orange-500 hover:shadow-md hover:shadow-orange-600/50 rounded-full font-semibold">
                      <p style={{ margin: "4px 20px" }}>Login</p>
                    </button>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarMenu;
