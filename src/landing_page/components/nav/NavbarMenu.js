import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import logo from "./../../assets/images/nbb.png";
import close from "./../../assets/svg/close.svg";

import "./../nav/navbar1.css";

const NavbarMenu = () => {
  const [y, setY] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const navMenu = document.querySelector(".nav-menu");
  const menuOverlay = document.querySelector(".menu-overlay");
  const mediaSize = 991;

  const toggleNav = () => {
    navMenu.classList.toggle("open");
    menuOverlay.classList.toggle("active");
    document.body.classList.toggle("hidden-scrolling");
  };

  const toggleNavMenu = (event) => {
    if (
      event.target.hasAttribute("data-toggle") &&
      window.innerWidth <= mediaSize
    ) {
      event.preventDefault();
      const menuItemHasChildren = event.target.parentElement;
      if (menuItemHasChildren.classList.contains("active")) {
        collapseSubMenu();
      } else {
        if (navMenu.querySelector(".menu-item-has-children.active")) {
          collapseSubMenu();
        }
        menuItemHasChildren.classList.add("active");
        const subMenu = menuItemHasChildren.querySelector(".sub-menu");
        subMenu.style.maxHeight = subMenu.scrollHeight + "px";
      }
    }
  };

  const collapseSubMenu = () => {
    navMenu
      .querySelector(".menu-item-has-children.active .sub-menu")
      .removeAttribute("style");
    navMenu
      .querySelector(".menu-item-has-children.active")
      .classList.remove("active");
  };

  const resizeFix = () => {
    if (navMenu.classList.contains("open")) {
      toggleNav();
    }

    if (navMenu.querySelector(".menu-item-has-children.active")) {
      collapseSubMenu();
    }
  };

  window.addEventListener("resize", () => {
    if (this.innerWidth > mediaSize) {
      resizeFix();
    }
  });

  const activeClassName = "is-active";
  const activeClassName1 = "is-active-sub-menu";
  const inactiveClassName = "inactive-sub-menu";
  return (
    <header
      className="header animate"
      style={y > 100 ? { background: "#0B093B" } : { background: "#fff" }}
    >
      <div className="container">
        <div className="header-main animate">
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="logo" />
              <h1 style={y > 100 ? { color: "white" } : { color: "black" }}>
                SMK NBB
              </h1>
            </NavLink>
          </div>
          <div className="open-nav-menu" onClick={toggleNav}>
            <span></span>
          </div>
          <div className="menu-overlay" onClick={toggleNav}></div>
          <nav className="nav-menu" onClick={toggleNavMenu}>
            <div className="close-nav-menu" onClick={toggleNav}>
              <img src={close} alt="close" />
            </div>
            <ul className="menu animate">
              <li className="menu-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                  style={y > 100 ? { color: "white" } : { color: "black" }}
                >
                  Beranda
                </NavLink>
              </li>

              <li className="menu-item menu-item-has-children">
                <Link
                  to="#"
                  data-toggle="sub-menu"
                  style={y > 100 ? { color: "white" } : { color: "black" }}
                >
                  Tentang Kami <FiChevronDown className="plus" />
                </Link>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? activeClassName1 : inactiveClassName
                      }
                      to={`/background`}
                    >
                      Latar Belakang
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? activeClassName1 : inactiveClassName
                      }
                      to={`/vimi`}
                    >
                      Visi dan Misi
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink
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

              <li className="menu-item menu-item-has-children">
                <Link
                  to="#"
                  data-toggle="sub-menu"
                  style={y > 100 ? { color: "white" } : { color: "black" }}
                >
                  Jurusan <FiChevronDown className="plus" />
                </Link>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? activeClassName1 : inactiveClassName
                      }
                      to={`/pharmacy`}
                    >
                      Farmasi
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? activeClassName1 : inactiveClassName
                      }
                      to={`/chemical`}
                    >
                      Analisis Kimia
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink
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

              <li className="menu-item menu-item-has-children">
                <Link
                  to="#"
                  data-toggle="sub-menu"
                  style={y > 100 ? { color: "white" } : { color: "black" }}
                >
                  Berita <FiChevronDown className="plus" />
                </Link>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? activeClassName1 : inactiveClassName
                      }
                      to={`/news`}
                    >
                      Berita
                    </NavLink>
                  </li>
                  <li className="menu-item">
                    <NavLink
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
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                  style={y > 100 ? { color: "white" } : { color: "black" }}
                >
                  Galeri
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink
                  to="/ppdb"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                  style={y > 100 ? { color: "white" } : { color: "black" }}
                >
                  PPDB
                </NavLink>
              </li>

              <li className="menu-item">
                <NavLink to="/login">
                  <button className="bg-orange-600 hover:bg-orange-500 hover:shadow-md hover:shadow-orange-600/50 rounded-full font-semibold">
                    <p style={{ margin: "4px 20px", color: "white" }}>Login</p>
                  </button>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavbarMenu;
