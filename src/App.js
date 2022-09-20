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
      <div className="mx-5 ">
        {user?.uid ? <TopBar /> : ''}
        <Routes>
          {user.uid ? <>
            <Route path="/" element={<Chats />} />
            <Route path="/home" element={<Chats />} />
            <Route path="/chat" element={<Chats />} />
          </> : <Route path="/signin" element={<Login />} />}
          <Route path="*" element={<Navigate to={user.uid ? "/chat" : "/signin"} />} />
        </Routes>
        {user?.uid ? <SendBar /> : ''}
      </div>
    </Router>
  );
}

export default App;
