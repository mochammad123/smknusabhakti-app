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
  Chip,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logout from "@mui/icons-material/Logout";

import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
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

const AppBarDashboard = () => {
  const [open, setOpen] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const token = localStorage.getItem("token");
  const navigate = useNavigate("");
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

  const logoutHandler = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.post("http://127.0.0.1:8000/api/logout").then(() => {
      localStorage.removeItem("token");
      navigate("/login");
    });
  };

  return (
    <AppBar
      position="absolute"
      open={open}
      color="secondary"
      elevation={0}
      sx={{
        backgroundColor: "white",
        color: "black",
      }}
    >
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
          SMK Nusa Bhakti Bandung
        </Typography>
        <Chip
          label="Welcome back, Moch. Faisal Ediansyah"
          variant="outlined"
          color="primary"
          sx={{ marginRight: 2, fontFamily: "Poppins" }}
        />
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
              <AccountCircleIcon sx={{ color: "#6F38C5", marginRight: 1 }} />
              <ListItemText
                primary="Admin"
                primaryTypographyProps={{
                  sx: { fontFamily: "Poppins", color: "#6F38C5" },
                }}
              />
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
    </AppBar>
  );
};

export default AppBarDashboard;
