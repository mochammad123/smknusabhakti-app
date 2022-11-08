import { useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

// // routing
import Routes from "./routes";

// defaultTheme
import themes from "./themes";

// project imports
import NavigationScroll from "./layout/NavigationScroll";
import { BrowserRouter } from "react-router-dom";

import config from "./config";

// ==============================|| APP ||============================== //

const DashboardApp = () => {
  const customization = useSelector((state) => state.customization);

  return (
    <BrowserRouter basename={config.basename}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={themes(customization)}>
          <CssBaseline />
          <NavigationScroll>
            <Routes />
          </NavigationScroll>
        </ThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
};

export default DashboardApp;
