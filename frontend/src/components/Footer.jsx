import logo from "../assets/Logo 3.svg";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <img className="footer-logo" src={logo} alt="" />
      <div className="moto">
        <h1>
          Ensemble pour un avenir <span>durable</span> et{" "}
          <span>énergétique</span> !
        </h1>
      </div>
      <div className="socials">
        <p>Retrouvez-nous sur :</p>
        <button className="instagram">
          <i className="pi pi-instagram"></i>
        </button>
        <button className="facebook">
          <i className="pi pi-facebook"></i>
        </button>
        <button className="twitter">
          <i className="pi pi-linkedin"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
