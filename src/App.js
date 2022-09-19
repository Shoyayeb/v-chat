import axios from "axios";
import { useState } from "react";
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import ChatContextProvider from "./Context/ChatContextProvider/ChatContextProvider";
import Chats from './Pages/Chats/Chats';
import Login from './Pages/LoginRegister/LoginRegister';
import TopBar from "./Pages/Shared/TopBar/TopBar";

const drawerWidth = 350;

function App() {
  const [token, setToken] = useState(sessionStorage.getItem('token') || '');
  const [error, setError] = useState('');
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    const url = `http://localhost:4000/verifyuser`;
    token ? axios.post(url, { token }).then((data) => {
      if (data.data.name) {
        setUser(data.data);
        setLoggedIn(true);
        console.log(user);
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
  console.log(process.env);
  return (
    <ChatContextProvider><Router>
      {loggedIn && <TopBar user={user} handleLogOut={handleLogOut} />}
      <div className="mx-5">
        <Routes>
          {loggedIn && (
            <>
              <Route path="/" element={<Chats drawerWidth={drawerWidth} />} />
              <Route path="/home" element={<Chats drawerWidth={drawerWidth} />} />
              <Route path="/chats:chatId" element={<Chats drawerWidth={drawerWidth} />} />
            </>
          )}
          {!loggedIn && (
            <Route path="/signin" element={<Login error={error} setLoggedIn={setLoggedIn} setUser={setUser} handleLogin={handleLogin} token={token} setToken={setToken} />} />
          )}
          <Route path="*" element={<Navigate to={loggedIn ? "/home" : "/signin"} />} />
        </Routes>
      </div>
    </Router></ChatContextProvider>
  );
}

export default App;
