import React, { useEffect, useState } from "react";
import "./navbar.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/images/nbb.png";
import { FiChevronDown } from "react-icons/fi";
import {
  AccordionDetails,
  Accordion,
  AccordionSummary,
  Grid,
  Menu,
  MenuItem,
  Tooltip,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const drawerWidth = 240;

function Navbar(props) {
  const { win } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [y, setY] = useState(window.scrollY);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [anchorEll, setAnchorEll] = useState(null);
  const open1 = Boolean(anchorEll);
  const handleClick1 = (event) => {
    setAnchorEll(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEll(null);
  };

  const [anchorElll, setAnchorElll] = useState(null);
  const open2 = Boolean(anchorElll);
  const handleClick2 = (event) => {
    setAnchorElll(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorElll(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

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
              <NavLink to="/">
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
                      <NavLink to="/background">
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
                  <NavLink to="/vimi">
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
                  <NavLink to="/goals">
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
                      <NavLink to="/pharmacy">
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
                  <NavLink to="/chemical">
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
                  <NavLink to="/nurses">
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
                      <NavLink to="/news">
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
                  <NavLink to="/news_video">
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
              <NavLink to="/gallery">
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
              <NavLink to="/ppdb">
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

  const activeClassName = "is-active";
  const activeClassName1 = "is-active-sub-menu";
  const inactiveClassName = "inactive-sub-menu";

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        position="fixed"
        elevation={0}
        sx={
          y > 100
            ? {
                background: "#0B093B",
                height: "80px",
                transition: "all 0.3s ease",
              }
            : {
                background: "#fff",
                height: "80px",
                transition: "all 0.3s ease",
              }
        }
      >
        <Toolbar sx={{ margin: "10px 20px 0px 20px" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={
              y > 100
                ? {
                    color: "white",
                    mr: 2,
                    display: { md: "none" },
                  }
                : {
                    color: "black",
                    mr: 2,
                    display: { md: "none" },
                  }
            }
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "block", sm: "block", md: "block" },
            }}
          >
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <NavLink to="/">
                  <img src={logo} alt="logo" style={{ width: "40px" }} />
                </NavLink>{" "}
              </Grid>
              <Grid item>
                <NavLink to="/">
                  <h1
                    style={
                      y > 100
                        ? {
                            color: "white",
                            fontSize: "24px",
                            fontWeight: 700,
                            marginTop: "7px",
                          }
                        : {
                            color: "black",
                            fontSize: "24px",
                            fontWeight: 700,
                            marginTop: "7px",
                          }
                    }
                  >
                    SMK NBB
                  </h1>
                </NavLink>{" "}
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                variant="subtitle2"
                className="menu"
                sx={
                  y > 100
                    ? {
                        color: "white",
                        marginRight: "20px",
                        fontWeight: "bold",
                      }
                    : {
                        color: "black",
                        marginRight: "20px",
                        fontWeight: "bold",
                      }
                }
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  Beranda
                </NavLink>
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip>
                <Typography
                  variant="subtitle2"
                  className="menu"
                  onClick={handleClick1}
                  size="small"
                  aria-controls={open1 ? "account-menu1" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open1 ? "true" : undefined}
                  sx={
                    y > 100
                      ? {
                          color: "white",
                          marginRight: "20px",
                          fontWeight: "bold",
                        }
                      : {
                          color: "black",
                          marginRight: "20px",
                          fontWeight: "bold",
                        }
                  }
                >
                  Tentang Kami <FiChevronDown className="plus" />
                </Typography>
              </Tooltip>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip>
                <Typography
                  variant="subtitle2"
                  className="menu"
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={
                    y > 100
                      ? {
                          color: "white",
                          marginRight: "20px",
                          fontWeight: "bold",
                        }
                      : {
                          color: "black",
                          marginRight: "20px",
                          fontWeight: "bold",
                        }
                  }
                >
                  Jurusan <FiChevronDown className="plus" />
                </Typography>
              </Tooltip>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Tooltip>
                <Typography
                  variant="subtitle2"
                  className="menu"
                  onClick={handleClick2}
                  size="small"
                  aria-controls={open2 ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open2 ? "true" : undefined}
                  sx={
                    y > 100
                      ? {
                          color: "white",
                          marginRight: "20px",
                          fontWeight: "bold",
                        }
                      : {
                          color: "black",
                          marginRight: "20px",
                          fontWeight: "bold",
                        }
                  }
                >
                  Berita <FiChevronDown className="plus" />
                </Typography>
              </Tooltip>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                variant="subtitle2"
                className="menu"
                sx={
                  y > 100
                    ? {
                        color: "white",
                        marginRight: "20px",
                        fontWeight: "bold",
                      }
                    : {
                        color: "black",
                        marginRight: "20px",
                        fontWeight: "bold",
                      }
                }
              >
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  Galeri
                </NavLink>
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Typography
                variant="subtitle2"
                className="menu"
                sx={
                  y > 100
                    ? {
                        color: "white",
                        marginRight: "20px",
                        fontWeight: "bold",
                      }
                    : {
                        color: "black",
                        marginRight: "20px",
                        fontWeight: "bold",
                      }
                }
              >
                <NavLink
                  to="/ppdb"
                  className={({ isActive }) =>
                    isActive ? activeClassName : undefined
                  }
                >
                  PPDB
                </NavLink>
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <NavLink to="/login">
                <Button
                  variant="contained"
                  sx={{
                    borderRadius: "20px",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    background: "#ff5800",
                    "&:hover": {
                      background: "red",
                    },
                  }}
                >
                  Login
                </Button>
              </NavLink>
            </Box>
          </Box>
        </Toolbar>

        <Menu
          anchorEl={anchorEll}
          id="account-menu"
          open={open1}
          onClose={handleClose1}
          onClick={handleClose1}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              borderRadius: "10px",
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 30,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <ListItemText>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName1 : inactiveClassName
                }
                to={`/background`}
              >
                <Typography
                  variant="subtitle2"
                  clasName="menu"
                  align="center"
                  sx={{
                    color: "black",
                    margin: "0px 20px",
                    fontWeight: "bold",
                  }}
                >
                  Latar Belakang
                </Typography>
              </NavLink>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName1 : inactiveClassName
                }
                to={`/vimi`}
              >
                <Typography
                  variant="subtitle2"
                  clasName="menu"
                  align="center"
                  sx={{
                    color: "black",
                    margin: "0px 20px",
                    fontWeight: "bold",
                  }}
                >
                  Visi & Misi
                </Typography>
              </NavLink>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName1 : inactiveClassName
                }
                to={`/goals`}
              >
                <Typography
                  variant="subtitle2"
                  clasName="menu"
                  align="center"
                  sx={{
                    color: "black",
                    margin: "0px 20px",
                    fontWeight: "bold",
                  }}
                >
                  Tujuan Sekolah
                </Typography>
              </NavLink>
            </ListItemText>
          </MenuItem>
        </Menu>

        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              borderRadius: "10px",
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 30,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <ListItemText>
              <NavLink
                to={`/pharmacy`}
                className={({ isActive }) =>
                  isActive ? activeClassName1 : inactiveClassName
                }
              >
                <Typography
                  variant="subtitle2"
                  clasName="menu"
                  align="center"
                  sx={{
                    color: "black",
                    margin: "0px 20px",
                    fontWeight: "bold",
                  }}
                >
                  Farmasi
                </Typography>
              </NavLink>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName1 : inactiveClassName
                }
                to={`/chemical`}
              >
                <Typography
                  variant="subtitle2"
                  clasName="menu"
                  align="center"
                  sx={{
                    color: "black",
                    margin: "0px 20px",
                    fontWeight: "bold",
                  }}
                >
                  Analisis Kimia
                </Typography>
              </NavLink>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName1 : inactiveClassName
                }
                to={`/nurses`}
              >
                <Typography
                  variant="subtitle2"
                  clasName="menu"
                  align="center"
                  sx={{
                    color: "black",
                    margin: "0px 20px",
                    fontWeight: "bold",
                  }}
                >
                  Keperawatan
                </Typography>
              </NavLink>
            </ListItemText>
          </MenuItem>
        </Menu>

        <Menu
          anchorEl={anchorElll}
          id="account-menu"
          open={open2}
          onClose={handleClose2}
          onClick={handleClose2}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              borderRadius: "10px",
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 30,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem>
            <ListItemText>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName1 : inactiveClassName
                }
                to={`/news`}
              >
                <Typography
                  variant="subtitle2"
                  clasName="menu"
                  align="center"
                  sx={{
                    color: "black",
                    margin: "0px 20px",
                    fontWeight: "bold",
                  }}
                >
                  Berita
                </Typography>
              </NavLink>
            </ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemText>
              <NavLink
                className={({ isActive }) =>
                  isActive ? activeClassName1 : inactiveClassName
                }
                to={`/news_video`}
              >
                <Typography
                  variant="subtitle2"
                  clasName="menu"
                  align="center"
                  sx={{
                    color: "black",
                    margin: "0px 20px",
                    fontWeight: "bold",
                  }}
                >
                  Berita Video
                </Typography>
              </NavLink>
            </ListItemText>
          </MenuItem>
        </Menu>
      </AppBar>
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
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  win: PropTypes.func,
};

export default Navbar;
