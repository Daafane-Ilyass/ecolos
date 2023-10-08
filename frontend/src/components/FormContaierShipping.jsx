/* eslint-disable react/prop-types */
import "./FormContainerShipping.css";
// import { Container, Row, Col } from "react-bootstrap";

const FormContainerShipping = ({ children }) => {
  return (
    <div className="my-container">
      <div className="my-row justify-content-md-center">
        <div className="my-col my-col-md-6 my-col-xs-12 ">{children}</div>
      </div>
    </div>
  );
};

export default FormContainerShipping;
