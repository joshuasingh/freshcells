import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import { CookiesContext } from "./utils/context";
import './App.css';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies([]);

  return (
    <div className="App">
      <CookiesContext.Provider value={{ cookies, setCookie, removeCookie }}>
        <CookiesProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </BrowserRouter>
        </CookiesProvider>
      </CookiesContext.Provider>
    </div>
  );
}

export default App;
