import { Route, Routes } from "react-router-dom";
import App from "./App";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default Router;
