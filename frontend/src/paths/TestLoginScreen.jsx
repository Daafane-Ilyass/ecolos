/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from "../assets/Logo 3.svg";
import { Toast } from "primereact/toast";
import Loader from "../components/Loader";
import NavBar from "../components/NavBar";
import FormContainer from "../components/FormContainer";
import Footer from "../components/Footer";
import { login } from "../actions/userActions";

import "./TestLoginScreen.css";

export const TestLoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toast = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userLogin = useSelector((state) => state.user);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    // Dispatch the login action here if needed
    dispatch(login(email, password));
  };

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: error,
      life: 3000,
    });
  };

  return (
    <div>
      <div className="top">
        <NavBar />
      </div>
      <FormContainer>
        <Toast ref={toast} />

        <div className="form-body">
          <div className="form-wrapper">
            <div className="form-box login">
              {loading ? (
                <Loader />
              ) : error ? (
                <>
                  {showError()}
                  <img className="login-logo" src={Logo} alt="logo" />
                  <h2>Login</h2>
                  <form onSubmit={submitHandler} autoComplete="off">
                    <div className="form-input-box">
                      <i className="form-icon pi pi-user"></i>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">Email</label>
                    </div>

                    <div className="form-input-box">
                      <span className="form-icon pi pi-star"></span>
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="password">Password</label>
                    </div>

                    <div className="remember-forgot">
                      <label htmlFor="remember-forgot">
                        <input type="checkbox" />
                        Remember me
                      </label>
                      <Link to="#">Forgot Password?</Link>
                    </div>
                    <button type="submit" className="form-submit-btn">
                      Login
                    </button>

                    <div className="login-register">
                      <p>
                        Don't have an account?{" "}
                        <Link
                          to={
                            redirect
                              ? `/register?redirect=${redirect}`
                              : "/register"
                          }
                        >
                          Register Now
                        </Link>
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <img className="login-logo" src={Logo} alt="logo" />
                  <h2>Login</h2>
                  <form onSubmit={submitHandler} autoComplete="off">
                    <div className="form-input-box">
                      <i className="form-icon pi pi-user"></i>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label htmlFor="email">Email</label>
                    </div>

                    <div className="form-input-box">
                      <span className="form-icon pi pi-star"></span>
                      <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label htmlFor="password">Password</label>
                    </div>

                    <div className="remember-forgot">
                      <label htmlFor="remember-forgot">
                        <input type="checkbox" />
                        Remember me
                      </label>
                      <Link to="#">Forgot Password?</Link>
                    </div>
                    <button type="submit" className="form-submit-btn">
                      Login
                    </button>

                    <div className="login-register">
                      <p>
                        Don't have an account?{" "}
                        <Link
                          to={
                            redirect
                              ? `/register?redirect=${redirect}`
                              : "/register"
                          }
                        >
                          Register Now
                        </Link>
                      </p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </FormContainer>
      <Footer />
    </div>
  );
};
