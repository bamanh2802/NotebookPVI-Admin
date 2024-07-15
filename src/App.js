import { ColorModeContext, useMode } from "./theme";
import { useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { Route, Routes } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from "@mui/material"
import Topbar from "./scenes/global/Topbar"
import Dashboard from './scenes/dashboard'
import Sidebar from './scenes/global/Sidebar'
import Users from "./scenes/users/Users";
import Notebooks from "./scenes/notebooks/Notebooks";
import Feedback from "./scenes/feedback/Feedback"
import Conversation from "./scenes/converation/Conversation"
import Chart from "./scenes/Chart/Chart";
import CreateAcctount from "./scenes/create/CreateAccount";
import LoginPage from "./login/LoginPage";
// import Assistants from "./scenes/assistants/Assistans";

function App() {
  const [theme, colorMode] = useMode();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
  const navigate = useNavigate();

  // Hàm để xử lý đăng nhập
  const handleLogin = (credentials) => {
    setIsLoggedIn(true);
    navigate('/');
  };


  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        {isLoggedIn ? (
            <>
              <Sidebar />
              <main className="content">
                <Topbar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/users-managment" element={<Users />} />
                  <Route path="/notebooks-managment" element={<Notebooks />} />
                  <Route path="/create-account" element={<CreateAcctount />} />
                  <Route path="/feedback" element={<Feedback />} />
                  {/* <Route path="/assistants" element={<Assistants />} /> */}
                  <Route path="/conversation" element={<Conversation />} />
                  <Route path="/column-chart" element={<Chart />} />
                </Routes>
              </main>
            </>
          ) : (
            <Routes>
              <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
          )}
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;