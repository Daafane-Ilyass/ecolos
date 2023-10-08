import "./NavBar.css";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/Logo 3.svg";
import { NavLink, Link } from "react-router-dom";
// import { Avatar } from "primereact/avatar";
import { TieredMenu } from "primereact/tieredmenu";
import { useRef } from "react";
import { logout } from "../actions/userActions";
const NavBar = () => {
  const userLogin = useSelector((state) => state.user);
  const { userInfo } = userLogin;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  const handleLogoutClick = () => {
    dispatch(logout());
  };
  const menu = useRef(null);
  const items = [
    {
      label: "Profile",
      icon: "pi pi-fw pi-user",
      command: handleProfileClick,
    },
    {
      separator: true,
    },
    {
      label: "Logut",
      icon: "pi pi-fw pi-power-off",
      command: handleLogoutClick,
    },
  ];

  return (
    <div>
      <div className="NavBar">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Acceuil</NavLink>
          </li>
          <li>
            <NavLink to="/courses">Cours</NavLink>
          </li>
          <li>
            <NavLink to="/store">Store</NavLink>
          </li>
        </ul>

        <div className="cta-btn">
          <Link to="/cart">
            <i className="pi pi-shopping-cart"></i>
          </Link>
          {/* <a href="#" className="sign-in">
            Sign In
          </a> */}

          {userInfo ? (
            <div className=" flex justify-content-center">
              <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
              {/* <Avatar
                image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                // className="mr-2"
                shape="circle"
                onClick={(e) => menu.current.toggle(e)}
              /> */}
              <a
                href="#"
                className="sign-in"
                onClick={(e) => menu.current.toggle(e)}
              >
                {userInfo.name}
              </a>
            </div>
          ) : (
            <Link to="/login" className="sign-up">
              Login
            </Link>
          )}
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavBar;
