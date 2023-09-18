import { CookiesProvider, useCookies } from "react-cookie";
import { CookiesContext } from "./utils/context";
import AppRoutes from "./AppRoutes";
import './App.css';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies([]);

  return (
    <div className="App">
      <CookiesContext.Provider value={{ cookies, setCookie, removeCookie }}>
        <CookiesProvider>
          <AppRoutes />
        </CookiesProvider>
      </CookiesContext.Provider>
    </div>
  );
}

export default App;
