/* eslint-disable react/prop-types */
import "./Accordion.css";

const Accordion = ({ question, active, setActive, answer }) => {
  return (
    <div className="accordion">
      <div className="accordionHeading">
        <div className="container">
          <p>Q : {question}</p>
          <i
            className={active === question ? "pi pi-times" : "pi pi-angle-down"}
            onClick={() => setActive(question)}
          ></i>
        </div>
      </div>
      <div
        className={(active === question ? "show" : "") + " accordionContent"}
      >
        <div className="container">
          <p>A : {answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
