import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

// Fallback URL if .env is missing
const API = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("ts_token");
    const userData = localStorage.getItem("ts_user");

    if (token && userData) {
      try {
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Failed to parse user data:", error);
        localStorage.removeItem("ts_user");
      }
    }

    setLoading(false);
  }, []);

  const saveAuthData = (token, userData) => {
    localStorage.setItem("ts_token", token);
    localStorage.setItem("ts_user", JSON.stringify(userData));
    setUser(userData);
  };

  // Safe JSON parser
  const parseResponse = async (response) => {
    try {
      const text = await response.text();

      if (!text) {
        return {};
      }

      return JSON.parse(text);
    } catch (error) {
      console.error("Invalid JSON response:", error);
      return {};
    }
  };

  const login = async (username, password) => {
    try {
      const response = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await parseResponse(response);

      if (!response.ok) {
        throw new Error(data.detail || "Login failed");
      }

      saveAuthData(data.access_token, data.user);

      return data;
    } catch (error) {
      console.error("Login Error:", error);
      throw error;
    }
  };

  const register = async (
    username,
    email,
    password,
    confirmPassword
  ) => {
    try {
      const response = await fetch(`${API}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirm_password: confirmPassword,
        }),
      });

      const data = await parseResponse(response);

      if (!response.ok) {
        throw new Error(data.detail || "Registration failed");
      }

      saveAuthData(data.access_token, data.user);

      return data;
    } catch (error) {
      console.error("Registration Error:", error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem("ts_token");
    localStorage.removeItem("ts_user");
    setUser(null);
  };

  const getToken = () => {
    return localStorage.getItem("ts_token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        loading,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);