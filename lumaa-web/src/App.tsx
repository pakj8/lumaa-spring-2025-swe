import React, { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import Register from "./components/Register";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (token: string) => {
    localStorage.setItem("token", token);
    setToken(token);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <nav>
        {token ? (
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
            onClick={handleLogout}
          >
            Logout
          </button>
        ) : (
          <div style={{ display: "flex", gap: "10px" }}>
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
              onClick={() => setShowRegister(false)}
            >
              Login
            </button>
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
              onClick={() => setShowRegister(true)}
            >
              Register
            </button>
          </div>
        )}
      </nav>
      {token ? (
        <Tasks token={token} />
      ) : showRegister ? (
        <Register onRegister={() => setShowRegister(false)} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
