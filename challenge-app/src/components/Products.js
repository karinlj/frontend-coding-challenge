import { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";
import { getData } from "../fetchFunctions";
import { NavLink } from "react-router-dom";

const Products = () => {
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
      <div className="logout">
        <p>
          <NavLink to="/login">Logga ut?</NavLink>
        </p>
      </div>

      <h1>Färgkort</h1>
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
