import { UserCookies } from "../utils/cookie-handler";
import { useNavigate } from "react-router-dom";
import { CookiesContext } from '../utils/context';
import { useContext } from "react";

const useLogout = () => {
  const navigate = useNavigate();
  const { removeCookie } = useContext(CookiesContext);
  
  const logout = () => {
    removeCookie(UserCookies.USER);
    removeCookie(UserCookies.USER_ID);
    navigate("/");
    return;
  }
  
  return [ logout ];
}

export { useLogout };