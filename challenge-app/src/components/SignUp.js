import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { postData } from "../fetchFunctions";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const btnText = "Skapa Konto";
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const createUserUri = "https://reqres.in/api/register";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      ...formData,
    };
    const addUserToServer = await postData(createUserUri, newUser);
    setLoading(false);
    //hantera fel i datahämtning
    if (addUserToServer) {
      setError(null);
    } else {
      setError("Ooops!! Could not add data...");
      return;
    }
    setFormData({
      email: "",
      password: "",
    });
    navigate("/login");
  };

  return (
    <>
      <section className="signup-upper">
        <h1>My company</h1>
        <p className="header-text">Skapa Konto</p>

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
            Redan ett konto?
            <NavLink to="/login"> Logga in</NavLink>
          </p>
        </div>
      </section>
    </>
  );
};

export default SignUp;
