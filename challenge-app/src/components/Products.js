import { useState, useEffect } from "react";
import SingleProduct from "./SingleProduct";

//const [products, setProducts] = useState(["product1", "product2"]);

const products = [
  {
    id: 1,
    title: "product1",
    color: "red",
    description: "Lorem ipsum",
    infoText: ["Lorem ipsum dolor", "Lorem ipsum dolor"],
  },
  {
    id: 2,
    title: "product2",
    color: "green",
    description: "Lorem ipsum",
    infoText: ["Lorem ipsum dolor", "Lorem ipsum dolor"],
  },
  {
    id: 3,
    title: "product3",
    color: "pink",
    description: "Lorem ipsum",
    infoText: ["Lorem ipsum dolor", "Lorem ipsum dolor"],
  },
];
const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <section className="product-list-section">
        <ul>
          {products &&
            products.map((product) => {
              return <SingleProduct product={product} key={product.id} />;
            })}
        </ul>
      </section>
    </>
  );
};

export default Products;
