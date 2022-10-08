import { Route, Routes } from "react-router-dom";
import useAuth from "./Hooks/useAuth";
import Chats from "./Pages/Chats/Chats";
import Login from "./Pages/LoginRegister/LoginRegister";
import SideBar from "./Pages/Shared/SideBar/SideBar";
import TopBar from "./Pages/Shared/TopBar/TopBar";

function App() {
  const { user } = useAuth();
  return (
    <>
      <div>
        {user.uid ? (
          <div className="w-full h-full bg-zinc-200 m-0">
            <div className="flex flex-no-wrap">
              <SideBar />
              <TopBar />
              <div className="absolute md:max-h-52 bottom-0 top-16 right-0 md:left-64 px-5 scrollbar-style">
                <Routes>
                  <Route path="/" element={<Chats />} />
                  <Route path="/chats/:chatId" element={<Chats />} />
                </Routes>
              </div>
            </div>
          </div>
        ) : (
          <Routes>
            <Route path="*" element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        )}
      </div>
    </>
  );
}

export default App;
