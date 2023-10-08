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
import { register } from "../actions/userActions";

import "./RegisterScreen.css";

const RegisterScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toast = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  const [message, setMessage] = useState(error);
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password != confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      // Dispatch the register action
      dispatch(register(name, email, password));
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
                  <h2>Register</h2>
                  <form onSubmit={submitHandler} autoComplete="off">
                    <div className="form-input-box">
                      <i className="form-icon pi pi-user"></i>
                      <input
                        type="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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

                    <div className="form-input-box">
                      <span className="form-icon pi pi-star"></span>
                      <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <label htmlFor="confirmPassword">Confrim Password</label>
                    </div>

                    {/* <div className="remember-forgot">
                      <label htmlFor="remember-forgot">
                        <input type="checkbox" />
                        Remember me
                      </label>
                      <Link to="#">Forgot Password?</Link>
                    </div> */}
                    <button type="submit" className="form-submit-btn">
                      Register
                    </button>

                    <div className="login-register">
                      <p>
                        Have an account?{" "}
                        <Link
                          to={
                            redirect ? `/login?redirect=${redirect}` : "/login"
                          }
                        >
                          Login
                        </Link>
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                <>
                  <img className="login-logo" src={Logo} alt="logo" />
                  <h2>Register</h2>
                  <form onSubmit={submitHandler} autoComplete="off">
                    <div className="form-input-box">
                      <i className="form-icon pi pi-user"></i>
                      <input
                        type="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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

                    <div className="form-input-box">
                      <span className="form-icon pi pi-star"></span>
                      <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <label htmlFor="confirmPassword">Confrim Password</label>
                    </div>

                    <button type="submit" className="form-submit-btn">
                      Register
                    </button>

                    <div className="login-register">
                      <p>
                        Have an account?{" "}
                        <Link
                          to={
                            redirect ? `/login?redirect=${redirect}` : "/login"
                          }
                        >
                          Login
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

export default RegisterScreen;
