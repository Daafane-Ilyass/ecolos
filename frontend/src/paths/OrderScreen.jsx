/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import Loader from "../components/Loader";
import { Toast } from "primereact/toast";
import { Message } from "primereact/message";
import NavBar from "../components/NavBar";
import FormContainerShipping from "../components/FormContaierShipping";
import Footer from "../components/Footer";

import { getOrderDetails } from "../actions/orderActions";

import "./PlaceOrderScreen.css";

const OrderScreen = () => {
  const toast = useRef(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, error, loading } = orderDetails;

  if (!loading && !error) {
    order.itemsPrice = order.orderItems
      .reduce((acc, item) => acc + item.price * item.qty, 0)
      .toFixed(2);
  }

  useEffect(() => {
    if (!order || order._id !== Number(id)) {
      dispatch(getOrderDetails(id));
    }
  }, [order, id, dispatch]);

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
        <FormContainerShipping>
          <Toast ref={toast} />
          {/* <h1>Order: {order._id}</h1> */}
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
                        <strong>Name:</strong>
                        {order.user.name}
                      </p>
                      <p>
                        <strong>Email:</strong>
                        <a href={`mailto:${order.user.email}`}>
                          {order.user.email}
                        </a>
                      </p>
                      <p>
                        <strong>Name:</strong>
                        {order.user.name}
                      </p>
                      <p>
                        <strong>Shipping: </strong>
                        {order.shippingAdress.adress},
                        {order.shippingAdress.city} {"   "}
                        {order.shippingAdress.postalCode},{" "}
                        {order.shippingAdress.country}
                      </p>
                      {order.isDelivered ? (
                        <Message
                          severity="success"
                          text={`Delivered on ${order.deliveredAt}`}
                        />
                      ) : (
                        <Message severity="warn" text={"Not Delivered"} />
                      )}
                    </div>
                    <div className="list-group-item">
                      <h2>Payment Method</h2>
                      <p>
                        <strong>Method: </strong>
                        {order.paymentMethod}
                      </p>
                      {order.isPaid ? (
                        <Message
                          severity="success"
                          text={`Paid on ${order.paidAt}`}
                        />
                      ) : (
                        <Message severity="warn" text={"Not Paid"} />
                      )}
                    </div>
                    <div className="list-group-item">
                      <h2>Order Items</h2>
                      {order.orderItems.length === 0 ? (
                        <p>Order is empty</p>
                      ) : (
                        <div className="list-group">
                          {order.orderItems.map((item, index) => (
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
                                  {item.qty} x {item.price} DH ={" "}
                                  {(item.qty * item.price).toFixed(2)} DH
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
                          <div className="col">{order.itemsPrice} DH</div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col">
                            <strong>Shipping:</strong>
                          </div>
                          <div className="col">{order.shippingPrice} DH</div>
                        </div>
                      </div>
                      <div className="list-group-item">
                        <div className="row">
                          <div className="col">
                            <strong>Total: </strong>
                          </div>
                          <div className="col">{order.totalPrice} DH</div>
                        </div>
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

export default OrderScreen;
