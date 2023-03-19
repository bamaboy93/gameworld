import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#2c323f",
      main: "#171a21",
    },
    secondary: {
      dark: "#d8f570",
      main: "#beee11",
      light: "#98be0e",
    },
    neutral: {
      dark: "#3ac682",
      main: "#4ecc8f",
      light: "#76d7a8",
    },
    accent: {
      main: "linear-gradient( 315deg, #213c55 5%, #016968 95%)",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    fontWeight: 700,
    fontSize: 14,
    h1: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontWeight: 700,
      fontSize: 40,
    },
    h2: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontWeight: 700,
      fontSize: 32,
    },
    h3: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontWeight: 700,
      fontSize: 24,
    },
    h4: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontWeight: 700,
      fontSize: 20,
    },
    h5: {
      fontFamily: ["Roboto", "sans-serif"].join(","),
      fontWeight: 700,
      fontSize: 16,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#171a21",
        },
      },
    },
  },
});
