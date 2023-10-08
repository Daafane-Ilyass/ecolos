/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
// import { Toast } from "primereact/toast";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { getUserDetails, updateUserProfile } from "../actions/userActions";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

import { listMyOrders } from "../actions/orderActions";

import "./ProfileScreen.css";

const ProfileScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toast = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userDetails = useSelector((state) => state.userDetails);
  const { error, user } = userDetails;

  const userLogin = useSelector((state) => state.user);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;

  const [message, setMessage] = useState(error);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails("profile"));
        dispatch(listMyOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(
        updateUserProfile({
          id: user._id,
          name: name,
          email: email,
          password: password,
        })
      );
      setMessage("");
    }
  };

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: message,
      life: 3000,
    });
  };

  const showErrorOrder = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: errorOrders,
      life: 3000,
    });
  };

  return (
    <>
      <div className="top">
        <NavBar />
      </div>
      <div className="profile-screen">
        <h1>Profile</h1>
        <div className="row">
          <div className="col-md-3 custom-md-3">
            <h2>User Profile</h2>
            <form onSubmit={submitHandler} autoComplete="off">
              <div className="form-input-box">
                <i className="form-icon pi pi-user"></i>
                <input
                  type="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="off"
                />
                <label htmlFor="name">Full Name</label>
              </div>

              <div className="form-input-box">
                <i className="form-icon pi pi-user"></i>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="off"
                />
                <label htmlFor="email">Email</label>
              </div>

              <div className="form-input-box">
                <span className="form-icon pi pi-star"></span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="off"
                />
                <label htmlFor="password">Password</label>
              </div>

              <div className="form-input-box">
                <span className="form-icon pi pi-star"></span>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  autoComplete="off"
                />
                <label htmlFor="confirmPassword">Confrim Password</label>
              </div>

              <button type="submit" className="form-submit-btn">
                Update
              </button>
            </form>
          </div>
          <div className="col-md-9 custom-md-9">
            <h2>My Orders</h2>
            {loadingOrders ? (
              <Loader />
            ) : errorOrders ? (
              <>
                {showErrorOrder()} {showError()}
              </>
            ) : (
              <div className="card">
                <DataTable
                  value={orders}
                  stripedRows
                  tableStyle={{ minWidth: "50rem" }}
                  paginator
                  rows={5}
                  rowsPerPageOptions={[5, 10, 25, 50]}
                >
                  <Column field="_id" header="ID"></Column>
                  <Column
                    field="createdAt"
                    header="Date"
                    body={(rowData) => rowData.createdAt.substring(0, 10)}
                  ></Column>
                  <Column field="totalPrice" header="Total (DH)"></Column>
                  <Column
                    field="isPaid"
                    header="Paid"
                    body={(rowData) =>
                      rowData.isPaid ? (
                        rowData.paidAt.substring(0, 10)
                      ) : (
                        <i
                          className="form-icon pi pi-times"
                          style={{ color: "red" }}
                        ></i>
                      )
                    }
                  ></Column>
                  <Column
                    field="details"
                    header="Delivered"
                    body={(rowData) => (
                      <Link to={`/order/${rowData._id}`}>
                        <div className="card flex justify-content-center">
                          <Button label="Details" />
                        </div>
                      </Link>
                    )}
                  ></Column>
                </DataTable>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ProfileScreen;
