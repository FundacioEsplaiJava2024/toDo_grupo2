import { FormEvent, useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
  
      // If all checks pass, you can clear the fields or handle form submission
      setUsername("");
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
            onChange={(e) => setUsername(e.target.value)}
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
        <Link id="router-link" to={"/register"} >Register</Link>
      </div>
    );
  };

export default LoginPage;
