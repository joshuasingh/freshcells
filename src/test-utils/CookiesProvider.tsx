import { CookiesProvider, useCookies } from "react-cookie";
import { CookiesContext } from '../utils/context';
import { UserCookies } from '../utils/cookie-handler';
import { testCookies } from './mockData';
import { AppProvider } from "./AppProviders";


export const CookieProvidersWithSession = ({ children }: { children: React.ReactNode }) => {
  const [cookies, setCookie, removeCookie] = useCookies([]);
  setCookie(UserCookies.USER as never, testCookies.token);
  setCookie(UserCookies.USER_ID as never, testCookies.userId);

  return (
    <CookiesContext.Provider value={{ cookies, setCookie, removeCookie }}>
      <CookiesProvider>
        <AppProvider>
          {children}
        </AppProvider>
      </CookiesProvider>
    </CookiesContext.Provider> 
  )
}

export const CookieProvidersWithOutSession = ({ children }: { children: React.ReactNode }) => {
  const [cookies, setCookie, removeCookie] = useCookies([]);

  return (
    <CookiesContext.Provider value={{ cookies, setCookie, removeCookie }}>
      <CookiesProvider>
        <AppProvider>
          {children}
        </AppProvider>
      </CookiesProvider>
    </CookiesContext.Provider> 
  )
}
