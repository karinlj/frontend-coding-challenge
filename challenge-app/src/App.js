import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useContext, useEffect } from "react";

import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Products from "./components/Products";
import AuthContextProvider from "./contexts/AuthContext";
import { AuthContext } from "./contexts/AuthContext";

//InnerApp
function InnerApp() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />

          {isLoggedIn
            ? [<Route path="/products" element={<Products />} />]
            : null}

          {/* catch any other route */}
          <Route path={"*"} element={<Navigate replace to={"/login"} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

function App() {
  return (
    <div className="App">
      {/* wrap here */}
      <AuthContextProvider>
        <InnerApp />
      </AuthContextProvider>
    </div>
  );
}

export default App;
