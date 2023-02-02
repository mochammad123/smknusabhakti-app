import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import {
  Avatar,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Skeleton,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";
import { NavLink, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import "./dashboardlist.css";
import highSchoolApi from "../../apis/highSchoolApi";
import axios from "axios";
import jwtDecode from "jwt-decode";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: 20,
  width: `calc(100% - 72px)`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const FooterBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: 10,
  width: `calc(100% - 72px)`,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: 10,
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const AppDrawer = ({ title }) => {
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const token = localStorage.getItem("token");
  const navigate = useNavigate("");
  const [isLoading, setIsLoading] = React.useState(false);
  const companyName = localStorage.getItem("company");
  const userName = localStorage.getItem("name");

  let activeStyle = {
    backgroundColor: "#144272",
    borderRadius: "0px 25px 25px 0px",
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const settingTheme = createTheme({
    components: {
      MuiIcon: {
        styleOverrides: {
          root: {
            // Match 24px = 3 * 2 + 1.125 * 16
            boxSizing: "content-box",
            padding: 3,
            fontSize: "1.125rem",
          },
        },
      },
    },
  });

  React.useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);

  const logoutHandler = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("company");
    localStorage.removeItem("name");
    navigate("/login");
  };

  return (
    <>
      <AppBar
        position="fixed"
        open={open}
        color="secondary"
        elevation={0}
        sx={{
          backgroundColor: "white",
          color: "black",
        }}
      >
        {isLoading ? (
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{
                flexGrow: 1,
                fontFamily: "Poppins",
                color: "#001F3F",
                fontWeight: 600,
              }}
            >
              <Skeleton variant="text" width={200} height={40} />
            </Typography>
            <ThemeProvider theme={settingTheme}>
              <List
                dense
                sx={{
                  maxWidth: "auto",
                  bgcolor: "background.paper",
                }}
              >
                <Skeleton variant="circular" width={40} height={40} />
              </List>
            </ThemeProvider>
          </Toolbar>
        ) : (
          <>
            <Toolbar
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer}
                sx={{
                  marginRight: "36px",
                  ...open,
                }}
              >
                <MenuIcon />
              </IconButton>

              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                sx={{
                  flexGrow: 1,
                  fontFamily: "Poppins",
                  color: "#001F3F",
                  fontWeight: 600,
                }}
              >
                {title}
              </Typography>
              <ThemeProvider theme={settingTheme}>
                <List
                  dense
                  sx={{
                    maxWidth: "auto",
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItemButton
                    sx={{ backgroundColor: "#EEF1FF", borderRadius: "25px" }}
                    onClick={handleClick}
                  >
                    <ListItemText
                      primary={userName}
                      primaryTypographyProps={{
                        sx: {
                          fontFamily: "Poppins",
                          color: "#6F38C5",
                          marginRight: 1,
                        },
                      }}
                    />
                    <AccountCircleIcon sx={{ color: "#6F38C5" }} />
                  </ListItemButton>
                </List>
              </ThemeProvider>
            </Toolbar>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={openMenu}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
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
                <Avatar
                  sx={{
                    backgroundColor: "#FFB319",
                    color: "#FFE194",
                    borderRadius: "5px",
                  }}
                  variant="square"
                />{" "}
                <Typography sx={{ fontFamily: "Poppins", color: "#FFB319" }}>
                  Profile
                </Typography>
              </MenuItem>
              <MenuItem>
                <Avatar
                  sx={{
                    backgroundColor: "#FF8DC7",
                    color: "#FFACC7",
                    borderRadius: "5px",
                  }}
                  variant="square"
                />{" "}
                <Typography sx={{ fontFamily: "Poppins", color: "#FF8DC7" }}>
                  My Account
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem onClick={logoutHandler}>
                <ListItemIcon>
                  <Logout fontSize="small" sx={{ color: "#FC345C" }} />
                </ListItemIcon>
                <Typography sx={{ fontFamily: "Poppins", color: "#FC345C" }}>
                  Logout
                </Typography>
              </MenuItem>
            </Menu>
          </>
        )}
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        PaperProps={{ sx: { backgroundColor: "#041C32" } }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{
              flexGrow: 1,
              fontFamily: "Poppins",
              color: "white",
              fontWeight: 600,
              ml: 1,
            }}
          >
            <a href="/">{companyName}</a>
          </Typography>
        </Toolbar>
        <Divider />
        <List component="nav" sx={{ color: "white" }}>
          <List>
            <ListItem disablePadding>
              <NavLink
                to="/dashboard/main-dashboard"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <ListItemButton sx={{ width: 239 }}>
                  <ListItemIcon>
                    <DashboardIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Dashboard"
                    primaryTypographyProps={{ sx: { fontFamily: "Poppins" } }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>

          <List>
            <ListItem disablePadding>
              <NavLink
                to="/dashboard/blog"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <ListItemButton sx={{ width: 239 }}>
                  <ListItemIcon>
                    <NewspaperIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Berita"
                    primaryTypographyProps={{ sx: { fontFamily: "Poppins" } }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>

          <List>
            <ListItem disablePadding>
              <NavLink
                to="/dashboard/video"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <ListItemButton sx={{ width: 239 }}>
                  <ListItemIcon>
                    <NewspaperIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Berita Video"
                    primaryTypographyProps={{ sx: { fontFamily: "Poppins" } }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>

          <List>
            <ListItem disablePadding>
              <NavLink
                to="/dashboard/galery"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <ListItemButton sx={{ width: 239 }}>
                  <ListItemIcon>
                    <NewspaperIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Galery"
                    primaryTypographyProps={{ sx: { fontFamily: "Poppins" } }}
                  />
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>
        </List>
      </Drawer>
      <FooterBar
        position="fixed"
        open={open}
        color="secondary"
        elevation={6}
        sx={{
          backgroundColor: "white",
          color: "black",
          top: "auto",
          bottom: 0,
        }}
      >
        <Typography
          variant="body2"
          gutterBottom
          fontWeight={600}
          textAlign="center"
          mt={2}
          mb={2}
        >
          {"Copyright © "}
          SMK Nusa Bhakti Bandung {new Date().getFullYear()}
          {"."}
        </Typography>
      </FooterBar>
    </>
  );
};

export default AppDrawer;
