import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "http://localhost:5000/api";

export default function Login() {
  // const UsersInfo = ["Ken123", "123"];
  // const Msg ="My New Message";

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (!formData.username || !formData.password) {
      setMessage("Username and password are required.");
      return;
    }
    try {
      const response = await fetch(`${API_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage("Login successful!");
        setTimeout(() => {
          navigate("/");
        }, 500);
      } else {
        setMessage(data.message || "Login failed.");
      }
    } catch (error) {
      setMessage("Error logging in.");
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: 400 }}>
      <h2>Login</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">Username</label>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <label className="label">Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <br />
        <button type="submit" className="btn btn-success w-100">
          Log In
        </button>
        {message && (
          <div className="alert alert-info mt-3" role="alert">
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
