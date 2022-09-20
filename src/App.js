import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';

import useAuth from './Hooks/useAuth';
import Chats from './Pages/Chats/Chats';
import Login from './Pages/LoginRegister/LoginRegister';
import TopBar from "./Pages/Shared/TopBar/TopBar";

const drawerWidth = 350;

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <TopBar />
      <div className="mx-5">
        <Routes>
            <>
              <Route path="/" element={<Chats drawerWidth={drawerWidth} />} />
              <Route path="/home" element={<Chats drawerWidth={drawerWidth} />} />
              <Route path="/chats:chatId" element={<Chats drawerWidth={drawerWidth} />} />
            </>
          <Route path="/signin" element={<Login />} />
          <Route path="*" element={<Navigate to={user ? "/home" : "/signin"} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
