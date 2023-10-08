/* eslint-disable react/prop-types */

import "./CardCourses.css";

const CardCourses = (props) => {
  const cardBackgroundStyle = {
    backgroundImage: props.bgImg, // Set the background image using backgroundImage property
  };
  return (
    <a href={props.driveURL} className="card" target="_blank" rel="noreferrer">
      <div
        className="card__background"
        style={cardBackgroundStyle} // Use the formatted style here
      ></div>
      <div className="card__content">
        <p className="card__category">{props.classe}</p>
        <p className="card__category">{props.type}</p>
        <h3 className="card__heading">{props.name}</h3>
      </div>
    </a>
  );
};

export default CardCourses;
