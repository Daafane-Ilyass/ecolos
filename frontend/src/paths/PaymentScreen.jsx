/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import FormContainerShipping from "../components/FormContaierShipping";
import Footer from "../components/Footer";
import CheckoutSteps from "../components/CheckoutSteps";

import { savePaymentMethod } from "../actions/cartActions";

import "./PaymentScreen.css";

const PaymentScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAdress } = cart;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery");

  if (!shippingAdress.adress) {
    navigate("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };
  return (
    <>
      <div className="top">
        <NavBar />
      </div>
      <div className="payment-screen">
        <CheckoutSteps activeIdx={1} />
        <FormContainerShipping>
          <h1>Payment</h1>
          <form onSubmit={submitHandler} autoComplete="off">
            <div className="payment-input-box">
              <input
                type="radio"
                checked
                id="Cash On Delivery"
                onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label htmlFor="paymentMethod">Cash On Delivery</label>
            </div>

            {/* <div className="form-input-box"></div> */}

            <button type="submit" className="form-submit-btn">
              Continue
            </button>
          </form>
        </FormContainerShipping>
      </div>
      <Footer />
    </>
  );
};

export default PaymentScreen;
