import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HowToRegTwoToneIcon from "@mui/icons-material/HowToRegTwoTone";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { Avatar, List, ListItem, ListItemAvatar } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import CollectionsIcon from "@mui/icons-material/Collections";
import { NavLink } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderRadius: "25px",
        marginBottom: 2,
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ backgroundColor: "#FAF7F0" }} variant="square">
            <HowToRegTwoToneIcon sx={{ color: "#98A8F8" }} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Admin"
          secondary="Online"
          primaryTypographyProps={{
            sx: { color: "black", fontFamily: "Poppins", fontWeight: 600 },
          }}
          secondaryTypographyProps={{
            sx: { fontFamily: "Poppins", fontSize: 11 },
          }}
        />
      </ListItem>
    </List>
    <NavLink to="/dashboard">
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText
          primary="Dashboard"
          primaryTypographyProps={{ sx: { fontFamily: "Poppins" } }}
        />
      </ListItemButton>
    </NavLink>
    <NavLink to="/dashboard/news">
      <ListItemButton>
        <ListItemIcon>
          <NewspaperIcon sx={{ color: "white" }} />
        </ListItemIcon>
        <ListItemText
          primary="Berita"
          primaryTypographyProps={{ sx: { fontFamily: "Poppins" } }}
        />
      </ListItemButton>
    </NavLink>
    <ListItemButton>
      <ListItemIcon>
        <VideoLibraryIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText
        primary="Berita Video"
        primaryTypographyProps={{ sx: { fontFamily: "Poppins" } }}
      />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CollectionsIcon sx={{ color: "white" }} />
      </ListItemIcon>
      <ListItemText
        primary="Galeri"
        primaryTypographyProps={{ sx: { fontFamily: "Poppins" } }}
      />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
