import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/nbb.png";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { AccordionDetails, Accordion, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
const drawerWidth = 240;

const NavbarDaisy = (props) => {
  const { win } = props;
  const [y, setY] = useState(window.scrollY);
  const token = localStorage.getItem("token");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  let activeStyle = {
    color: "#FF4C29",
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        SMK NBB
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{}}>
            <ListItemText>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/"
              >
                <Typography variant="subtitle1" onClick={handleDrawerToggle}>
                  Beranda
                </Typography>
              </NavLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="subtitle1">Tentang Kami</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                        to="/about-me/background"
                      >
                        <Typography
                          variant="subtitle1"
                          onClick={handleDrawerToggle}
                        >
                          Latar Belakang
                        </Typography>
                      </NavLink>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/about-me/vimi"
                  >
                    <Typography
                      variant="subtitle1"
                      onClick={handleDrawerToggle}
                    >
                      Visi & Misi
                    </Typography>
                  </NavLink>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/about-me/goals"
                  >
                    <Typography
                      variant="subtitle1"
                      onClick={handleDrawerToggle}
                    >
                      Tujuan Sekolah
                    </Typography>
                  </NavLink>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Jurusan</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                        to="/major/pharmacy"
                      >
                        <Typography
                          variant="subtitle1"
                          onClick={handleDrawerToggle}
                        >
                          Farmasi
                        </Typography>
                      </NavLink>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/major/chemical"
                  >
                    <Typography
                      variant="subtitle1"
                      onClick={handleDrawerToggle}
                    >
                      Analisis Kimia
                    </Typography>
                  </NavLink>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/major/nurses"
                  >
                    <Typography
                      variant="subtitle1"
                      onClick={handleDrawerToggle}
                    >
                      Keperawatan
                    </Typography>
                  </NavLink>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Berita</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  fontSize: "14px",
                }}
              >
                <ListItem disablePadding>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <ListItemText>
                      <NavLink
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                        to="/news/news-paper"
                      >
                        <Typography
                          variant="subtitle1"
                          onClick={handleDrawerToggle}
                        >
                          Berita
                        </Typography>
                      </NavLink>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText>
                  <NavLink
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                    to="/news/news-video"
                  >
                    <Typography
                      variant="subtitle1"
                      onClick={handleDrawerToggle}
                    >
                      Berita Video
                    </Typography>
                  </NavLink>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </AccordionDetails>
        </Accordion>
        <ListItem disablePadding>
          <ListItemButton sx={{}}>
            <ListItemText>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/galery"
              >
                <Typography variant="subtitle1" onClick={handleDrawerToggle}>
                  Galeri
                </Typography>
              </NavLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{}}>
            <ListItemText>
              <NavLink
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                to="/ppdb"
              >
                <Typography variant="subtitle1" onClick={handleDrawerToggle}>
                  PPDB
                </Typography>
              </NavLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <NavLink to="/login">
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    borderRadius: "20px",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    background: "#ff5800",
                    "&:hover": {
                      background: "red",
                    },
                  }}
                  onClick={handleDrawerToggle}
                >
                  Login
                </Button>
              </NavLink>
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    win !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <div
        className="navbar bg-base-100 w-full z-50 fixed text-black"
        style={
          y > 100
            ? {
                backgroundColor: "rgb(30 58 138)",
                transition: "all 0.3s ease",
                height: "80px",
              }
            : {
                backgroundColor: "white",
                transition: "all 0.3s ease",
                height: "100px",
              }
        }
      >
        <div className="navbar-start w-full lg:w-1/2">
          <label
            tabIndex={0}
            onClick={handleDrawerToggle}
            className="btn btn-ghost lg:hidden"
            style={
              y > 100
                ? {
                    color: "white",
                  }
                : {
                    color: "black",
                  }
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <button
            className="cursor-pointer px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent "
            type="button"
          >
            <a
              href="/"
              style={
                y > 100
                  ? {
                      color: "white",
                    }
                  : {
                      color: "gray",
                    }
              }
            >
              <img src={Logo} style={{ width: 40 }} />
            </a>
          </button>
          <a
            className="normal-case text-xl font-bold"
            style={
              y > 100
                ? {
                    color: "white",
                  }
                : {
                    color: "black",
                  }
            }
          >
            SMK Nusa Bhakti Bandung
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <div
                className="bg-transparent"
                style={
                  y > 100
                    ? {
                        color: "white",
                      }
                    : {
                        color: "black",
                      }
                }
              >
                <NavLink
                  className="bg-transparent hover:text-orange-500 hover:bg-transparent py-3 block"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/"
                >
                  Beranda
                </NavLink>
              </div>
            </li>
            <li tabIndex={0}>
              <div
                className="bg-transparent"
                style={
                  y > 100
                    ? {
                        color: "white",
                      }
                    : {
                        color: "black",
                      }
                }
              >
                <NavLink
                  className="bg-transparent hover:text-orange-500 hover:bg-transparent py-3 block"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/about-me"
                >
                  <div className="hover:text-orange-500 flex flex-row">
                    Tentang Kami
                    <div className="mt-1">
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </div>
                  </div>
                </NavLink>
              </div>
              <ul className="p-2 bg-blue-900 text-white w-40">
                <li>
                  <div className="p-0 flex justify-center">
                    <NavLink
                      className="bg-transparent hover:text-orange-500 hover:bg-transparent py-3 block"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/about-me/background"
                    >
                      Latar Belakang
                    </NavLink>
                  </div>
                </li>
                <li>
                  <div className="p-0 flex justify-center">
                    <NavLink
                      className="bg-transparent hover:text-orange-500 hover:bg-transparent py-3 block"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/about-me/vimi"
                    >
                      Visi dan Misi
                    </NavLink>
                  </div>
                </li>
                <li>
                  <div className="p-0 flex justify-center">
                    <NavLink
                      className="bg-transparent hover:text-orange-500 hover:bg-transparent py-3 block"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/about-me/goals"
                    >
                      Tujuan Sekolah
                    </NavLink>
                  </div>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <div
                className="bg-transparent"
                style={
                  y > 100
                    ? {
                        color: "white",
                      }
                    : {
                        color: "black",
                      }
                }
              >
                <NavLink
                  className="bg-transparent hover:text-orange-500 hover:bg-transparent py-3 block"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/major"
                >
                  <div className="hover:text-orange-500 flex flex-row">
                    Jurusan
                    <div className="mt-1">
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </div>
                  </div>
                </NavLink>
              </div>
              <ul className="p-2 bg-blue-900 text-white w-40">
                <li>
                  <div className="p-0 flex justify-center">
                    <NavLink
                      className="bg-transparent hover:text-orange-500 hover:bg-transparent py-3 block"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/major/pharmacy"
                    >
                      Farmasi
                    </NavLink>
                  </div>
                </li>
                <li>
                  <div className="p-0 flex justify-center">
                    <NavLink
                      className="bg-transparent hover:text-orange-500 hover:bg-transparent py-3 block"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/major/chemical"
                    >
                      Analisis Kimia
                    </NavLink>
                  </div>
                </li>
                <li>
                  <div className="p-0 flex justify-center">
                    <NavLink
                      className="bg-transparent hover:text-orange-500 hover:bg-transparent py-3 block"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/major/nurses"
                    >
                      Keperawatan
                    </NavLink>
                  </div>
                </li>
              </ul>
            </li>
            <li tabIndex={0}>
              <div
                className="bg-transparent"
                style={
                  y > 100
                    ? {
                        color: "white",
                      }
                    : {
                        color: "black",
                      }
                }
              >
                <NavLink
                  className="bg-transparent hover:text-orange-500 hover:bg-transparent py-3 block"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/news"
                >
                  <div className="hover:text-orange-500 flex flex-row">
                    Berita
                    <div className="mt-1">
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </div>
                  </div>
                </NavLink>
              </div>
              <ul className="p-2 bg-blue-900 text-white w-40">
                <li>
                  <div className="p-0 flex justify-center">
                    <NavLink
                      className="bg-transparent hover:text-orange-500 hover:bg-transparent py-3 block"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/news/news-paper"
                    >
                      Berita
                    </NavLink>
                  </div>
                </li>
                <li>
                  <div className="p-0 flex justify-center">
                    <NavLink
                      className="bg-transparent hover:text-orange-500 hover:bg-transparent py-3 block"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to="/news/news-video"
                    >
                      Berita Video
                    </NavLink>
                  </div>
                </li>
              </ul>
            </li>
            <li>
              <div
                className="bg-transparent"
                style={
                  y > 100
                    ? {
                        color: "white",
                      }
                    : {
                        color: "black",
                      }
                }
              >
                <NavLink
                  className="bg-transparent hover:text-orange-500 hover:bg-transparent py-3 block"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/galery"
                >
                  Galeri
                </NavLink>
              </div>
            </li>
            <li>
              <div
                className="bg-transparent"
                style={
                  y > 100
                    ? {
                        color: "white",
                      }
                    : {
                        color: "black",
                      }
                }
              >
                <NavLink
                  className="bg-transparent hover:text-orange-500 hover:bg-transparent py-3 block"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  to="/ppdb"
                >
                  PPDB
                </NavLink>
              </div>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <NavLink className="bg-transparent py-3 block" to="/login">
            <button className="btn bg-orange-500 hover:bg-orange-600 rounded-full border-0 mr-2 text-white capitalize">
              <p className="pr-3 pl-3" style={{ fontSize: "15px" }}>
                Login
              </p>
            </button>
          </NavLink>
        </div>
      </div>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default NavbarDaisy;
