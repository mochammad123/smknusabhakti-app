import React from "react";
import Stack from "@mui/material/Stack";
import { NavLink } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const ListButton = () => {
  const styleActive = {
    color: "white",
    backgroundColor: "#041C32",
    borderRadius: "25px",
    border: "1px solid #041C32",
  };

  const styleInactive = {
    color: "#0077C0",
    backgroundColor: "white",
    borderRadius: "25px",
    border: "1px solid #0077C0",
  };

  return (
    <Stack direction="row" spacing={2}>
      <List>
        <ListItem disablePadding>
          <NavLink
            to="/dashboard/master/product"
            style={({ isActive }) => (isActive ? styleActive : styleInactive)}
          >
            <ListItemButton
              sx={{ width: 130, borderRadius: "25px", height: 35 }}
            >
              <ListItemText
                primary="Products"
                primaryTypographyProps={{
                  sx: { fontFamily: "Poppins", textAlign: "center" },
                }}
              />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <NavLink
            to="/dashboard/master/category"
            style={({ isActive }) => (isActive ? styleActive : styleInactive)}
          >
            <ListItemButton
              sx={{ width: 130, borderRadius: "25px", height: 35 }}
            >
              <ListItemText
                primary="Categories"
                primaryTypographyProps={{
                  sx: { fontFamily: "Poppins", textAlign: "center" },
                }}
              />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>

      <List>
        <ListItem disablePadding>
          <NavLink
            to="/dashboard/master/attribute"
            style={({ isActive }) => (isActive ? styleActive : styleInactive)}
          >
            <ListItemButton
              sx={{ width: 130, borderRadius: "25px", height: 35 }}
            >
              <ListItemText
                primary="Attributes"
                primaryTypographyProps={{
                  sx: { fontFamily: "Poppins", textAlign: "center" },
                }}
              />
            </ListItemButton>
          </NavLink>
        </ListItem>
      </List>
    </Stack>
  );
};

export default ListButton;
