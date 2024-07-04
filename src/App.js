import { ColorModeContext, useMode } from "./theme";
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
// import Assistants from "./scenes/assistants/Assistans";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
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
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;