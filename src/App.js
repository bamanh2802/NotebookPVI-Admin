import { ColorModeContext, useMode } from "./theme";
import { useEffect, useState } from 'react';
import { useNavigate, Navigate, Route, Routes } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./scenes/global/Topbar";
import Dashboard from './scenes/dashboard';
import Sidebar from './scenes/global/Sidebar';
import Users from "./scenes/users/Users";
import Notebooks from "./scenes/notebooks/Notebooks";
import Feedback from "./scenes/feedback/Feedback";
import Conversation from "./scenes/converation/Conversation";
import Chart from "./scenes/Chart/Chart";
import CreateAccount from "./scenes/create/CreateAccount";
import LoginPage from "./login/LoginPage";

function App() {
  const [theme, colorMode] = useMode();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const session = localStorage.getItem('session');
    if (session) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate('/login');
    }
  }, [navigate]);



  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isLoggedIn ? (
            <>
              <Sidebar />
              <main className="content">
                <Topbar  />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/users-management" element={<Users />} />
                  <Route path="/notebooks-management" element={<Notebooks />} />
                  <Route path="/create-account" element={<CreateAccount />} />
                  <Route path="/feedback" element={<Feedback />} />
                  <Route path="/conversation" element={<Conversation />} />
                  <Route path="/column-chart" element={<Chart />} />
                </Routes>
              </main>
            </>
          ) : (
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;