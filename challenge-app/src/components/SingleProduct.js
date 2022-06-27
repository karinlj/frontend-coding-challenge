const SingleProduct = ({ product }) => {
  return (
    <article className="product-card">
      <div className="card-content">
        {/* <div className={`color-space ${product.color}`}></div> */}
        <div
          className="color-space"
          style={{ background: product.color }}
        ></div>

        <div className="card-content-inner">
          <h2>{product.name}</h2>

          <div>
            <p className="card-description">
              Color: <span>{product.color}</span>
            </p>
            <p className="card-description">
              Pantone value: <span>{product.pantone_value}</span>
            </p>

            <div></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleProduct;
