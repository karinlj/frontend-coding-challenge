import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";

import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Products from "./components/Products";
import { AuthContext } from "./contexts/AuthContext";
import AuthContextProvider from "./contexts/AuthContext";

function InnerApp() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          {isLoggedIn ? (
            [<Route path="/" element={<Products />} />]
          ) : (
            <Route path="/" element={<LogIn />} />
          )}

          {/* catch any other route */}
          <Route path={"*"} element={<Navigate replace to={"/"} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <InnerApp />
      </AuthContextProvider>
    </div>
  );
}

export default App;
