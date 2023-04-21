import { useState } from "react";
import AuthContext from "./auth";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const storedUser = window.localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (userOption) => {
    setUser(userOption);
    window.localStorage.setItem("user", JSON.stringify(userOption));
  };

  const logout = () => {
    setUser(null);
    window.localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
