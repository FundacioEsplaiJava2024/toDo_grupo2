import { Route, Routes } from "react-router-dom";
import App from "./App";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";

function Router() {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <LoginPage />;
  }
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default Router;
