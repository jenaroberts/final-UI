import { ThemeProvider } from "@emotion/react";
import { Home } from "@mui/icons-material";
import { createTheme, CssBaseline } from "@mui/material";
import "./scss/app.scss";

const theme = createTheme({
  typography: {
    fontFamily: `fantasy`,
  },
  palette: {
    mode: "dark",
    background: {
      default: "#82b3c9",
    },
    primary: {
      main: "#rgb(11, 11, 65)",
    },
    secondary: {
      main: "#ffb300",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <h1>home page</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
