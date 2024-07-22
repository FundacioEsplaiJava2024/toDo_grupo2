import { Route, Routes } from "react-router-dom";
import App from "./App";
import LoginPage from "./auth/LoginPage";

function Router() {
  const token = localStorage.getItem("accessToken");

  if (!token) {
    return <LoginPage />;
  }
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}

export default Router;
