import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const LogIn = () => {
  return (
    <main>
      <section className="signup-upper">
        <h1 className="heading">Välkommen tillbaka</h1>
        <p className="header-text">Logga in</p>

        <form>
          <label>
            Email <input type="email" required />{" "}
          </label>
          <label className="password">
            Lösenord
            <input type="password" required />
          </label>

          <button className="signup-btn">Logga in</button>
        </form>
      </section>

      <section className="signup-lower">
        <div class="small-text">
          <p>
            Saknar du konto?
            <NavLink to="/"> Skapa konto</NavLink>
          </p>
        </div>
      </section>
    </main>
  );
};

export default LogIn;
