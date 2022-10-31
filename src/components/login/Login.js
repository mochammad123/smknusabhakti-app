import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { NavLink } from "react-router-dom";

const Login = () => {
  const paperStyle = {
    padding: "30px 40px",
    height: "auto",
    width: "100%",
    margin: "0px auto",
    marginTop: "auto",
    borderRadius: "20px",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "30px 0 10px 0", borderRadius: "20px" };
  return (
    <>
      <NavLink to="/">
        <Avatar
          sx={{
            backgroundColor: "transparent",
            color: "black",
            margin: "20px 0 0 20px",
          }}
        >
          <ArrowBackRoundedIcon sx={{ fontSize: 40 }} />
        </Avatar>
      </NavLink>
      <Container maxWidth="xs">
        <Grid sx={{ margin: "30px" }}>
          <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
              <Avatar style={avatarStyle} sx={{ marginTop: "20px" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography variant="h5" component="h2">
                Sign In
              </Typography>
            </Grid>
            <TextField
              label="Username"
              placeholder="Enter username"
              fullWidth
              required
              sx={{ margin: "30px 0" }}
            />
            <TextField
              label="Password"
              placeholder="Enter password"
              type="password"
              fullWidth
              required
            />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btnstyle}
              fullWidth
              size="large"
            >
              Sign in
            </Button>
          </Paper>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
