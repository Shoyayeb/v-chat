import { Route, Routes, useParams } from 'react-router-dom';
import useAuth from './Hooks/useAuth';
import Chats from './Pages/Chats/Chats';
import Login from './Pages/LoginRegister/LoginRegister';
import SideBar from './Pages/Shared/SideBar/SideBar';
import TopBar from './Pages/Shared/TopBar/TopBar';

function App() {
  const { user } = useAuth();
  const { chatId } = useParams();
  console.log(chatId);
  return (
    <>
      <div>
        {user.uid ? <div className="w-full h-full bg-gray-200 m-0">
          <div className="flex flex-no-wrap">
            <SideBar />
            <div className="w-full">
              <TopBar />
              <Routes>
                <Route path="/" element={<Chats />} />
                <Route path="/chats/:chatId" element={<Chats />} />
              </Routes>
            </div>
          </div>
        </div> : <Routes>
          <Route path="*" element={<Login />} />
          <Route path="/login" element={<Login />} />
        </Routes>}


      </div>
    </>
  );
}

export default App;