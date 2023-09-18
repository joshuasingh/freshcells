import { useContext } from "react";
import { CookiesContext } from "../../utils/context";
import { UserCookies } from "../../utils/cookie-handler";
import { Navigate } from "react-router-dom";

const AuthRoutes = ({ children }: any) => {
  const { cookies } = useContext(CookiesContext);
  
  const isUserLoggedIn = () => {
    return cookies[UserCookies.USER];
  }

  return isUserLoggedIn() ? (
    children
  ) : (
    <Navigate to="/"/>
  );
  }

  export default AuthRoutes;