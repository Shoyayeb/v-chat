import SideBar from "./Pages/Shared/SideBar/SideBar";
import TopBar from "./Pages/Shared/TopBar/TopBar";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useEffect, useState } from "react";
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Chats from './Pages/Chats/Chats';
import axios from "axios";

const drawerWidth = 350;

function App() {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [error, setError] = useState('');
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const url = `http://localhost:4000/verifyuser`;
    token ? axios.post(url, { token }).then((data) => {
      if (data.data.name) {
        setUser(data.data);
        setLoggedIn(true);
        sessionStorage.setItem('token', token);
      } else {
        setError(data.data);
        console.log("no user found");
        setUser({});
        setLoggedIn(false);
      }
      console.log(data.data);
    }) : console.log("no data found");
  };

  const handleLogOut = () => {
    setUser({});
    setLoggedIn(false);
    sessionStorage.removeItem('token')
  };

  useEffect(() => {
    // console.log('running effect', sessionStorage.getItem('token'));
    // const localToken = localStorage.getItem('token');
    // const localToken = sessionStorage.getItem('token');
    // setToken(localToken || '');

    if (token) {
      handleLogin(token);
    }
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Router>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SideBar handleDrawerClose={handleDrawerClose} open={open} drawerWidth={drawerWidth} handleLogOut={handleLogOut} />
        {loggedIn && <TopBar user={user} handleDrawerOpen={handleDrawerOpen} open={open} drawerWidth={drawerWidth} />}

        <Routes>
          {loggedIn && (
            <>
              <Route path="/" element={<Chats open={open} drawerWidth={drawerWidth} />} />
              <Route path="/home" element={<Chats open={open} drawerWidth={drawerWidth} />} />
              <Route path="/chats:chatId" element={<Chats open={open} drawerWidth={drawerWidth} />} />
            </>
          )}
          {!loggedIn && (
            <Route path="/signin" element={<Login error={error} setLoggedIn={setLoggedIn} setUser={setUser} handleLogin={handleLogin} token={token} setToken={setToken} />} />
          )}
          <Route path="*" element={<Navigate to={loggedIn ? "/home" : "/signin"} />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
