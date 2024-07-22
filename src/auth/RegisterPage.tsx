import { FormEvent, useState } from "react";
import "./Auth.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
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
      setUsername(username);
      setPassword(password);
      setConfirmPassword(confirmPassword);
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      setEmail(email);
      setUsername(username);
      setPassword(password);
      setConfirmPassword(confirmPassword);
      return;
      
    }

    // If all checks pass, you can clear the fields or handle form submission
    setEmail("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
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
    </div>
  );
};

export default RegisterPage;
