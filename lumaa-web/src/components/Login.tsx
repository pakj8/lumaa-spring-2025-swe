import React, { useState } from "react";
import { loginUser } from "../api";

interface Props {
  onLogin: (token: string) => void;
}

const Login: React.FC<Props> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await loginUser(username, password);
    if (response.token) {
      onLogin(response.token);
    } else {
      setError(response.message || "Login failed");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username: </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          style={{
            padding: "10px 40px",
            borderRadius: "10px",
            background: "#B7B1F2",
            color: "white",
            outline: "none",
            border: "0px",
            fontWeight: "600",
          }}
          type="submit"
        >
          Login
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
