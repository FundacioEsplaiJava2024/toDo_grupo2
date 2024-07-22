import "./Auth.css";

const RegisterPage = () => {
  return (
    <div id="login-form">
      <h1>Register</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default RegisterPage;
