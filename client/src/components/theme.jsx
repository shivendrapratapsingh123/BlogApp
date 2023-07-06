import { createTheme } from "@mui/material";

const MuiTheme = createTheme({
  breakpoints: {
    // Define your breakpoints here as needed
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default MuiTheme;