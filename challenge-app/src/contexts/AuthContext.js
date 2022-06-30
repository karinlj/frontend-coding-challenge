import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext({});

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("is-logged-in") === "true"
  );

  const logout = () => {
    localStorage.removeItem("is-logged-in");
    window.location.reload(false);
  };

  useEffect(() => {
    localStorage.setItem("is-logged-in", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
