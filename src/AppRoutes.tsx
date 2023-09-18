import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import AuthRoutes from "./components/Routing/AuthRoutes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/account" element={<AuthRoutes><Account /></AuthRoutes>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
