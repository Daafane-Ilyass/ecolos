/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

import "./Product.css";

const Product = ({ product }) => {
  const [clicked, setClicked] = useState(false);

  const changeColor = (e) => {
    e.preventDefault();
    setClicked(!clicked);
  };

  return (
    <div>
      <a className="card">
        {/* style={{backgroundColor: product.color}} */}
        <div className="card__img">
          <img src={product.image} alt="product image" />
        </div>
        <div className="card__name">
          <p>{product.name}</p>
        </div>
        <div className="card__precis">
          <a className="card__icon" onClick={changeColor}>
            <i
            // className={`pi ${product.isLiked ? "pi-heart-fill" : "pi-heart"}`}
            ></i>
          </a>

          <div>
            <span className="card__preci card__preci--before">
              {product.oldPrice} DH
            </span>
            <span className="card__preci card__preci--now">
              {product.price} DH
            </span>
          </div>
          <Link to={`/product/${product._id}`} className="card__icon">
            <i className="pi pi-shopping-cart"></i>
          </Link>
        </div>
      </a>
    </div>
  );
};

export default Product;
