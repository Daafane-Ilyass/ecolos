/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import Loader from "../components/Loader";
import { Toast } from "primereact/toast";
import NavBar from "../components/NavBar";
import FormContainerShipping from "../components/FormContaierShipping";
import Footer from "../components/Footer";
import CheckoutSteps from "../components/CheckoutSteps";

import { createOrder } from "../actions/orderActions";
import { ORDER_CREATE_RESET } from "../constants/orderConstants";

import "./PlaceOrderScreen.css";

const PlaceOrderScreen = () => {
  const toast = useRef(null);
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, error, success, loading } = orderCreate;

  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  cart.itemsPrice = cart.cartItems
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
  cart.shippingPrice = (cart.itemsPrice > 200 ? 0 : 30).toFixed(2);
  cart.totalPrice = (
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  ).toFixed(2);

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAdress: cart.shippingAdress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };

  if (!cart.paymentMethod) {
    navigate("/payment");
  }

  useEffect(() => {
    if (success) {
      navigate(`/order/${order._id}`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [success, navigate, dispatch, order, cart]);

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: error,
      life: 3000,
    });
  };

  return (
    <>
      <div className="top">
        <NavBar />
      </div>
      <div className="place-order-screen">
        <CheckoutSteps activeIdx={2} />
        <FormContainerShipping>
          <Toast ref={toast} />
          <div className="row">
            {loading ? (
              <Loader />
            ) : error ? (
              <>{showError()}</>
            ) : (
              <>
                <div className="col-md-8">
                  <div className="list-group">
                    <div className="list-group-item">
                      <h2>Shipping</h2>
                      <p>
                        <strong>Shipping: </strong>
                        {cart.shippingAdress.adress},{cart.shippingAdress.city}{" "}
                        {"   "}
                        {cart.shippingAdress.postalCode},{" "}
                        {cart.shippingAdress.country}
                      </p>
                    </div>
                    <div className="list-group-item">
                      <h2>Payment Method</h2>
                      <p>
                        <strong>Method: </strong>
                        {cart.paymentMethod}
                      </p>
                    </div>
                    <div className="list-group-item">
                      <h2>Order Items</h2>
                      {cart.cartItems.length === 0 ? (
                        <p>Your cart is empty</p>
                      ) : (
                        <div className="list-group">
                          {cart.cartItems.map((item, index) => (
                            <div className="list-group-item" key={index}>
                              <div className="row">
                                <div className="col-md-4">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="img-fluid rounded"
                                  />
                                </div>

                                <div className="col-md-4">
                                  <Link to={`/product/${item.product}`}>
                                    {item.name}
                                  </Link>
                                </div>
                                <div className="col-md-4">
                                  {item.quantity} x {item.price} DH ={" "}
                                  {(item.quantity * item.price).toFixed(2)} DH
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card">
                    <div className="list-group">
                      <div className="list-group-item">
                        <h2>Order Summary</h2>
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col">
                            <strong>Items: </strong>
                          </div>
                          <div className="col">{cart.itemsPrice} DH</div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col">
                            <strong>Shipping:</strong>
                          </div>
                          <div className="col">{cart.shippingPrice} DH</div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col">
                            <strong>Total: </strong>
                          </div>
                          <div className="col">{cart.totalPrice} DH</div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <button
                          type="button"
                          className="btn btn-block"
                          disabled={cart.cartItems === 0}
                          onClick={placeOrderHandler}
                        >
                          Place Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </FormContainerShipping>
      </div>
      <Footer />
    </>
  );
};

export default PlaceOrderScreen;
