import { UserCookies } from "../utils/cookie-handler";
import { useNavigate } from "react-router-dom";
import { CookiesContext } from '../utils/context';
import { useContext } from "react";

const useLogin = () => {
  const navigate = useNavigate();
  const { setCookie } = useContext(CookiesContext);
  
  const login = (token: string, userId: string) => {
    setCookie(UserCookies.USER as never, token);
    setCookie(UserCookies.USER_ID as never, userId);
    navigate("account");
    return;
  }
  
  return [ login ];
}

export { useLogin };