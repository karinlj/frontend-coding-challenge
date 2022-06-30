import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { postData } from "../fetchFunctions";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const LogIn = () => {
  const { setIsLoggedIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const btnText = "Logga in";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const checkUserUri = "https://reqres.in/api/login";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      ...formData,
    };
    setLoading(true);
    setError(null);
    const checkUserOnServer = await postData(checkUserUri, user);
    setLoading(false);
    if (checkUserOnServer) {
      setError(null);
    } else {
      setError("Ooops!! Could not post data...");
      return;
    }
    setFormData({
      email: "",
      password: "",
    });
    setIsLoggedIn(true);
    navigate("/");
  };

  return (
    <>
      <section className="signup-upper">
        <h1>Färgbolaget</h1>
        <h2>Välkommen tillbaka</h2>
        <p className="header-text">Logga in</p>
        {loading && <p>...Loading</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Form
          formData={formData}
          handleChange={handleChange}
          btnText={btnText}
          handleSubmit={handleSubmit}
        />
      </section>
      <section className="signup-lower">
        <div className="small-text">
          <p>
            Saknar du konto?
            <NavLink to="/signup"> Skapa konto</NavLink>
          </p>
        </div>
      </section>
    </>
  );
};

export default LogIn;
