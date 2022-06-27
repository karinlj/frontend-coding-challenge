import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { postData } from "../fetchFunctions";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
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
    //hantera fel i datahämtning
    if (checkUserOnServer) {
      setError(null);
    } else {
      setError("Ooops!! Could not add data...");
      return;
    }
    setFormData({
      email: "",
      password: "",
    });
    navigate("/products");
  };

  return (
    <>
      <section className="signup-upper">
        <h1>Välkommen tillbaka</h1>
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
            <NavLink to="/"> Skapa konto</NavLink>
          </p>
        </div>
      </section>
    </>
  );
};

export default LogIn;
