import { useContext } from "react";
import { AuthContext } from './../Context/ChatContextProvider/ChatContextProvider';


const useAuth = () => {
    const auth = useContext(AuthContext);
    return auth;

}
export default useAuth;