import { useState, useEffect, useContext } from "react";
import SingleProduct from "./SingleProduct";
import { getData } from "../fetchFunctions";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Products = () => {
  const { logout } = useContext(AuthContext);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const productsUri = "https://reqres.in/api/products";

  const drawProducts = async () => {
    let tempProducts = await getData(productsUri);
    setProducts(tempProducts);
    setLoading(false);
    if (tempProducts) {
      setError(null);
    } else {
      setError("Endpoint error: Could not fetch data...");
    }
  };

  useEffect(() => {
    drawProducts();
  }, []);

  return (
    <>
      <header className="products-header">
        <h1>Färgkort</h1>

        <p onClick={logout}>
          <NavLink to="/">Logga ut?</NavLink>
        </p>
      </header>
      <section className="product-list-section">
        {loading && <p>...Loading</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <ul>
          {products &&
            products.data &&
            products.data.map((product) => {
              return <SingleProduct product={product} key={product.id} />;
            })}
        </ul>
      </section>
    </>
  );
};

export default Products;
