import { styled } from '@mui/material/styles';
import SideBar from "./Pages/Shared/SideBar/SideBar";
import TopBar from "./Pages/Shared/TopBar/TopBar";
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import Login from './Pages/Login/Login';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Chats from './Pages/Chats/Chats';

const drawerWidth = 350;

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [open, setOpen] = useState(true);

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
        <SideBar handleDrawerClose={handleDrawerClose} open={open} drawerWidth={drawerWidth} />
        {loggedIn && <TopBar handleDrawerOpen={handleDrawerOpen} open={open} drawerWidth={drawerWidth} />}

        <Routes>
          {loggedIn && (
            <>
              <Route path="/" element={<Chats open={open} drawerWidth={drawerWidth} />} />
              <Route path="/home" element={<Chats open={open} drawerWidth={drawerWidth} />} />
              <Route path="/chats" element={<Chats open={open} drawerWidth={drawerWidth} />} />
            </>
          )}
          {!loggedIn && (
            <Route path="/signin" element={<Login setLoggedIn={setLoggedIn} />} />
          )}
          <Route path="*" element={<Navigate to={loggedIn ? "/home" : "/signin"} />} />
        </Routes>
      </Box>
    </Router>
  );
}

export default App;
