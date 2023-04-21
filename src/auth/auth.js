import { createContext } from "react";

const AuthContext = createContext({
  user: null,
  login: (userOption) => {},
  logout: () => {},
});

export default AuthContext;
