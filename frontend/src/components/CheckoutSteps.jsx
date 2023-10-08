/* eslint-disable react/prop-types */
import { Steps } from "primereact/steps";

import "./CheckoutSteps.css";

const CheckoutSteps = (props) => {
  const activeIdx = props.activeIdx;
  const items = [
    {
      label: "Shipping",
    },
    {
      label: "Payment",
    },
    {
      label: "Place Order",
    },
  ];

  return (
    <div className="steps">
      <Steps model={items} activeIndex={activeIdx} />
    </div>
  );
};

export default CheckoutSteps;
