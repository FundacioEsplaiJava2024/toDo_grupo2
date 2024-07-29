import { FormEvent, useState } from "react";
import "./Auth.css";
import { Link, Navigate } from "react-router-dom";
import { apiRegister } from "../Api/AuthApiManager"


const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  var regularExpression =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!regularExpression.test(password)) {
      alert(
        "Your password must be between 6 and 16 characters. It also must contain a special character and a number."
      );
      setEmail(email);
      setPassword(password);
      setConfirmPassword(confirmPassword);
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      setEmail(email);
      setPassword(password);
      setConfirmPassword(confirmPassword);
      return;
      
    }

    apiRegister(email, password)
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    return <Navigate to="/" replace />;
  };

  return (
    <div id="login-form">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Mail:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <label htmlFor="password-confirm">Confirm password:</label>
        <input
          type="password"
          id="password-confirm"
          name="password-confirm"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Password confirmation"
        />
        <input type="submit" value="Register" />
      </form>
      <Link id="router-link" to={"/"} >Sign In</Link>
    </div>
  );
};

export default RegisterPage;
