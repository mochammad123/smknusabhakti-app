import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser, reset } from "../../../feature/authSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

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
          <form onSubmit={Auth}>
            {isError && <p style={{ textAlign: "center" }}>{message}</p>}
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
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ margin: "30px 0" }}
              />
              <TextField
                label="Password"
                placeholder="Enter password"
                type="password"
                fullWidth
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                style={btnstyle}
                fullWidth
                size="large"
              >
                {isLoading ? "Loading" : "Login"}
              </Button>
            </Paper>
          </form>
        </Grid>
      </Container>
    </>
  );
};

export default Login;
