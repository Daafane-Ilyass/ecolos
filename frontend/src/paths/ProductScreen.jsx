/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useEffect, useRef, useState } from "react";
import { listProductDetails } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import { Toast } from "primereact/toast";
import Loader from "../components/Loader";
// import products from "../products";

import "./ProductScreen.css";

const ProductScreen = () => {
  const [quantity, setQuantity] = useState(1);
  const toast = useRef(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: error,
      life: 3000,
    });
  };
  const addToCartHandler = () => {
    navigate(`/cart/${id}?quantity=${quantity}`);
  };
  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  // const [activeImgIndex, setActiveImgIndex] = useState(0);

  // // const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL"];

  // const handleTab = (index) => {
  //   setActiveImgIndex(index);
  // };
  return (
    <div>
      <div className="top">
        <NavBar />
      </div>

      <div className="product-section-container">
        <div className="product-section">
          <div className="details">
            <Toast ref={toast} />
            {loading ? (
              <Loader />
            ) : error ? (
              showError()
            ) : (
              <>
                {/* Product Image */}
                <div className="big-img">
                  <img
                    src={`http://127.0.0.1:8000${product.image}`}
                    alt="product image"
                  />
                </div>

                {/* Description Box */}

                <div className="box">
                  {/* Details */}

                  <div className="row">
                    <h2>{product.name}</h2>
                    <span>{product.price} DH</span>
                  </div>
                  {/* <div className="colors">
                {product.color.map((c, index) => (
                  <button key={index} style={{ backgroundColor: c }}></button>
                ))}
              </div> */}
                  <p>{product.description}</p>
                  <p>{product.category}</p>
                  {product.countInStock > 0 ? (
                    <p className="count-in-stock">
                      {product.countInStock} in stock
                    </p>
                  ) : (
                    <p className="count-in-stock">Out of stock</p>
                  )}

                  {product.countInStock > 0 && (
                    <div className="quantity-select">
                      <label htmlFor="quantity">Quantity:</label>
                      <select
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                      >
                        {Array.from(
                          { length: product.countInStock },
                          (_, index) => (
                            <option key={index} value={index + 1}>
                              {index + 1}
                            </option>
                          )
                        )}
                      </select>
                    </div>
                  )}

                  {/* Other Images */}
                  {/* <div className="thumb">
                {product.image.map((i, index) => (
                  <img
                    key={index}
                    src={i}
                    className={`${activeImgIndex == index ? "active" : ""}`}
                    onClick={() => handleTab(index)}
                  />
                ))}
              </div> */}
                  {/* Add to Cart */}
                  <button
                    className="add-cart"
                    disabled={product.countInStock === 0}
                    onClick={addToCartHandler}
                  >
                    Add to cart
                  </button>
                  <button className="go-back">
                    <Link to={"/store"}>Go Back</Link>
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductScreen;
