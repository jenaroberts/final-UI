import { ThemeProvider } from "@emotion/react";
import { Home } from "./pages/Home";
import { createTheme, CssBaseline } from "@mui/material";
import "./scss/app.scss";
import { Dash } from "./pages/TaskDash";
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
      main: "#9c27b0",
    },
    secondary: {
      main: "#311b92",
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
          <Route path="/dashboard" element={<Dash />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
