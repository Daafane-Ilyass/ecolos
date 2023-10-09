import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";

import { Toast } from "primereact/toast";
import Loader from "../components/Loader";

import { listTeam } from "../actions/homeActions";

import "./Slider.css";

const Slider = () => {
  const carouselRef = useRef();
  const [width, setWidth] = useState(0);
  const toast = useRef(null);

  const dispatch = useDispatch();

  const teamList = useSelector((state) => state.teamList);
  const { loading, error, team } = teamList;

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  useEffect(() => {
    dispatch(listTeam());
  }, [dispatch]);

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: error,
      life: 3000,
    });
  };

  return (
    <div className="slider">
      <motion.div
        ref={carouselRef}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="inner-carousel"
        >
          <Toast ref={toast} />
          {loading ? (
            <Loader />
          ) : error ? (
            showError()
          ) : (
            <>
              {team.map((member) => (
                <motion.div className="item" key={member._id}>
                  <div className="card-image">
                    <img src={member.profileImage} alt="carousel-image" />
                  </div>
                  <p className="name">{member.name.toUpperCase()}</p>
                  <p>{member.post.toUpperCase()}</p>
                  <p>{member.description}</p>
                  <div className="socials">
                    <a
                      href={member.instagramLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="instagram">
                        <i className="pi pi-instagram"></i>
                      </button>
                    </a>
                    <a
                      href={member.facebookLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="facebook">
                        <i className="pi pi-facebook"></i>
                      </button>
                    </a>
                    <a
                      href={member.twitterLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="twitter">
                        <i className="pi pi-twitter"></i>
                      </button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Slider;
