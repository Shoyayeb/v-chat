import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import useAuth from './Hooks/useAuth';
import Chats from './Pages/Chats/Chats';
import Login from './Pages/LoginRegister/LoginRegister';
import SendBar from './Pages/Shared/SendBar/SendBar';
import TopBar from "./Pages/Shared/TopBar/TopBar";


function App() {
  const { user } = useAuth();

  return (
    <Router>
      {user?.uid ? <TopBar /> : ''}
      <div className="mx-5">
        <Routes>
          {user.uid ? <>
            <Route path="/" element={<Chats />} />
            <Route path="/home" element={<Chats />} />
            <Route path="/chat" element={<Chats />} />
          </> : <Route path="/signin" element={<Login />} />}
          <Route path="*" element={<Navigate to={user.uid ? "/chat" : "/signin"} />} />
        </Routes>
        <SendBar />
      </div>
    </Router>
  );
}

export default App;
