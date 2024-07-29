import { FormEvent, useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { apiLogin } from "../Api/AuthApiManager";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const token = await apiLogin(email, password);
    if (token == undefined || token == "") {
      alert("Error al iniciar sesión.");
    } else {
      localStorage.setItem("accessToken", token);
    }

    setEmail("");
    setPassword("");
  };

  return (
    <div id="login-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="username"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <input type="submit" value="Login" />
      </form>
      <Link id="router-link" to={"/register"}>
        Register
      </Link>
    </div>
  );
};

export default LoginPage;
