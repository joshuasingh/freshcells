import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import AuthRoutes from "./components/Routing/AuthRoutes";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { JsxElement } from "typescript";

function AppRoutes() {

  const renderWithNavbar = (Component: JSX.Element) => {
    return (<Navbar>
      {Component}
    </Navbar>);
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/account" element={<AuthRoutes>
          {renderWithNavbar(<Account/>)}
        </AuthRoutes>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
