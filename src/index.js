import { createRoot } from "react-dom/client";

// third party
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// project imports
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import { store } from "./app/store";
import highSchoolApi from "./apis/highSchoolApi";
import { ThemeProvider } from "@mui/styles";
import { createTheme } from "@mui/material";

// ==============================|| REACT DOM RENDER  ||============================== //

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
const THEME = createTheme({
  typography: {
    fontFamily: `"Khula", "Helvetica", "Arial", sans-serif`,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      @font-face {
        font-family: 'Khula';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
      }`,
    },
  },
});
root.render(
  <ThemeProvider theme={THEME}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
