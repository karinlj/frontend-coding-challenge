import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const SignUp = () => {
  return (
    <>
      <section className="signup-upper">
        <h1 className="heading">My company</h1>
        <p className="header-text">Skapa Konto</p>

        <form>
          <label>
            Email <input type="email" required />{" "}
          </label>
          <label className="password">
            Lösenord
            <input type="password" required />
          </label>

          <button className="signup-btn">Skapa Konto</button>
        </form>
      </section>

      <section className="signup-lower">
        <div class="small-text">
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
