import React, { useState } from "react";
import "./LoginForm.css";
const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here (e.g., send data to backend API)
    if (username === "admin" && password === "password") {
      alert("Login successful");
      // Redirect or perform any other action upon successful login
    } else {
      setError(alert("Invalid Password"));
    }
  };

  return (
    <div className="login-container">
      {error && <p>{error}</p>}
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>LOGIN FORM</h2>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
