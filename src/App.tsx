import { ThemeProvider } from "@emotion/react";
import { Home } from "./pages/Home";
import { createTheme, CssBaseline } from "@mui/material";
import "./scss/app.scss";
import { Dash } from "./pages/TaskDash";
import { TaskPage } from "./pages/TaskPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { UserContextProvider } from "./context/UserContext";

const firebaseConfig = {
  apiKey: "AIzaSyC6oZBUX4lFqUdD21dijVjaTLIprRNqy78",
  authDomain: "neuro-adulting-jr.firebaseapp.com",
  projectId: "neuro-adulting-jr",
  storageBucket: "neuro-adulting-jr.appspot.com",
  messagingSenderId: "581453816678",
  appId: "1:581453816678:web:0d227c6679bf2dcec99ea7",
  measurementId: "G-7T67VVHDE1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
    <UserContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/taskPage" element={<TaskPage />} />
            <Route path="/dashboard" element={<Dash />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </UserContextProvider>
  );
}

export default App;
