import { useEffect } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../actions/cartActions";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import "./CartScreen.css";

const CartScreen = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const userLogin = useSelector((state) => state.user);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, quantity));
    }
  }, [dispatch, id, quantity]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    // navigate("/login?redirect=shipping");
    if (!userInfo) {
      navigate("/login");
    } else {
      navigate("/shipping");
    }
  };

  return (
    <div>
      <div className="top">
        <NavBar />
      </div>
      <div className="cart">
        <h1>Shopping Cart</h1>
        <div className="cart-row">
          <div className="cart-col-md-8">
            {cartItems.length === 0 ? (
              <div className="message-info">
                Your cart is empty <Link to="/">Go Back</Link>
              </div>
            ) : (
              <ul className="list-group">
                {cartItems.map((item) => (
                  <li key={item.product} className="list-group-item">
                    <div className="cart-row">
                      <div className="cart-col-md-2">
                        <img
                          src={`http://127.0.0.1:8000${item.image}`}
                          alt={item.name}
                          className="cart-img-fluid cart-rounded"
                        />
                      </div>
                      <div className="cart-col-md-3">
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </div>
                      <div className="cart-col-md-2">{item.price} DH</div>
                      <div className="cart-col-md-3">
                        <div className="quantity-select">
                          <label htmlFor="quantity">Quantity:</label>
                          <select
                            id="quantity"
                            name="quantity"
                            value={item.quantity}
                            onChange={(e) =>
                              dispatch(
                                addToCart(item.product, Number(e.target.value))
                              )
                            }
                          >
                            {Array.from(
                              { length: item.countInStock },
                              (_, index) => (
                                <option key={index} value={index + 1}>
                                  {index + 1}
                                </option>
                              )
                            )}
                          </select>
                        </div>
                      </div>
                      <div className="cart-col-md-1">
                        <i
                          onClick={() => removeFromCartHandler(item.product)}
                          className="pi pi-trash"
                        ></i>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="cart-col-md-4">
            <ul className="list-group">
              <li className="list-group-item">
                <h3>
                  Subtotal: (
                  {cartItems.reduce(
                    (acc, item) => acc + Number(item.quantity),
                    0
                  )}
                  ) items
                </h3>
                Total Price :{" "}
                {cartItems.reduce(
                  (acc, item) => acc + item.quantity * item.price,
                  0
                )}{" "}
                DH
              </li>
              <li className="list-group-item">
                <button
                  className="checkout-cta"
                  disabled={cartItems.length === 0}
                  onClick={checkoutHandler}
                >
                  Proceed to checkout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartScreen;
