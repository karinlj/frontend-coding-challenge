import { useState } from "react";

const SingleProduct = ({ product }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="product-card">
      <div className="card-content">
        <div className={`color-space ${product.color}`}></div>
        <div className="card-content-inner">
          <h2>{product.title}</h2>

          <div>
            <p className="card-description">{product.description}</p>
            <div>
              <div
                className="card-info-toggle"
                onClick={() => {
                  setShowInfo(!showInfo);
                }}
              >
                {!showInfo ? (
                  <i className="fas fa-chevron-down arrow"></i>
                ) : (
                  <i className="fas fa-chevron-up arrow"></i>
                )}
                <span>See information</span>
              </div>
              <ul className={`card-info-list ${showInfo ? "show" : ""}`}>
                {product &&
                  product.infoText.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleProduct;
