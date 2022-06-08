import { ThemeProvider } from "@emotion/react";
import { Home } from "./pages/Home";
import { createTheme, CssBaseline } from "@mui/material";
import "./scss/app.scss";

import { TaskPage } from "./pages/TaskPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: `monospace`,
    fontSize: 28,
  },
  palette: {
    mode: "light",
    background: {
      default: "#90a4ae",
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
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/taskPage" element={<TaskPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
