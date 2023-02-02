import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./login.css";
import {
  Alert,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import highSchoolApi from "../../../apis/highSchoolApi";

const theme = createTheme();

export default function SignInSide() {
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [validation, setValidation] = React.useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(false);
  const token = localStorage.getItem("token");

  const loginHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    await highSchoolApi
      .post("login", formData)
      .then((response) => {
        setIsLoading(false);
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("name", response.data.data.name);
        localStorage.setItem("company", response.data.data.company_name);

        Swal.fire({
          icon: "success",
          title: "Yeah",
          text: "Login Success",
        }).then(function () {
          navigate("/dashboard/main-dashboard");
        });
      })
      .catch((error) => {
        setValidation(error.response.data);
        setIsLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return token ? (
    <Navigate to="/dashboard/main-dashboard" />
  ) : (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography
              component="h1"
              variant="h5"
              sx={{
                color: "#2192FF",
                fontWeight: "bold",
                fontFamily: "Poppins",
              }}
            >
              Hi, Welcome Back!
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={loginHandler}
              sx={{ mt: 1 }}
            >
              <FormControl fullWidth sx={{ mt: 6 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Email Address
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email Address"
                  sx={{ borderRadius: "25px" }}
                />
              </FormControl>
              <FormControl fullWidth sx={{ marginTop: 3 }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                  sx={{ borderRadius: "25px" }}
                />
              </FormControl>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                sx={{ mt: 3 }}
              />
              {isLoading ? (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{ mt: 3, mb: 2, borderRadius: "25px" }}
                  disabled
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Poppins",
                    }}
                  >
                    Loading ...
                  </Typography>
                </Button>
              ) : (
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  sx={{ mt: 3, mb: 2, borderRadius: "25px" }}
                  disabled={isLoading}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "Poppins",
                    }}
                  >
                    Sign In
                  </Typography>
                </Button>
              )}

              <Grid container>
                <Grid item xs></Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: "Poppins",
                      }}
                    >
                      Don't have an account? Sign Up
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
