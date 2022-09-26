import { Route, Routes } from 'react-router-dom';
import useAuth from './Hooks/useAuth';
import Chats from './Pages/Chats/Chats';
import Login from './Pages/LoginRegister/LoginRegister';
import SendBar from './Pages/Shared/SendBar/SendBar';
import TopBar from "./Pages/Shared/TopBar/TopBar";
import SignUp from './Pages/SignUp/SignUp';

function App() {
  const { user } = useAuth();

  return (

    <div className="mx-5 ">
      {user?.uid ? <TopBar /> : ''}
      <Routes>
        {/* <Route path="*" element={<Navigate to={user.uid ? "/chat" : "/signin"} />} /> */}
        <Route path="*" element={<Login />} />
        {user.uid ? <>
          <Route path="/" element={<Chats />} />
          <Route path="/home" element={<Chats />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/chat/:id" element={<Chats />} />
        </> : <Route path="/signin" element={<Login />} />}
      </Routes>
      {user?.uid ? <SendBar /> : ''}
    </div>
  );
}

export default App;