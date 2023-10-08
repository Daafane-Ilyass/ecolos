/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import NavBar from "../components/NavBar";
import FormContainerShipping from "../components/FormContaierShipping";
import Footer from "../components/Footer";
import CheckoutSteps from "../components/CheckoutSteps";

import { saveShipingAdress } from "../actions/cartActions";

import "./ShippingScreen.css";

const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAdress } = cart;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [adress, setAdress] = useState(shippingAdress.adress);
  const [city, setCity] = useState(shippingAdress.city);
  const [postalCode, setPostalCode] = useState(shippingAdress.postalCode);
  const [country, setCountry] = useState(shippingAdress.country);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShipingAdress({ adress, city, postalCode, country }));
    navigate("/payment");
  };
  return (
    <>
      <div className="top">
        <NavBar />
      </div>
      <div className="shipping-screen">
        <CheckoutSteps activeIdx={0} />
        <FormContainerShipping>
          <h1>Shipping</h1>
          <form onSubmit={submitHandler} autoComplete="off">
            <div className="form-input-box">
              <i className="form-icon pi pi-user"></i>
              <input
                type="text"
                required
                value={adress ? adress : ""}
                onChange={(e) => setAdress(e.target.value)}
              />
              <label htmlFor="adress">Adress</label>
            </div>

            <div className="form-input-box">
              <i className="form-icon pi pi-user"></i>
              <input
                type="text"
                required
                value={city ? city : ""}
                onChange={(e) => setCity(e.target.value)}
              />
              <label htmlFor="city">City</label>
            </div>

            <div className="form-input-box">
              <i className="form-icon pi pi-user"></i>
              <input
                type="text"
                required
                value={postalCode ? postalCode : ""}
                onChange={(e) => setPostalCode(e.target.value)}
              />
              <label htmlFor="postalCode">Postal Code</label>
            </div>

            <div className="form-input-box">
              <i className="form-icon pi pi-user"></i>
              <input
                type="text"
                required
                value={country ? country : ""}
                onChange={(e) => setCountry(e.target.value)}
              />
              <label htmlFor="country">Country</label>
            </div>

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

export default ShippingScreen;
