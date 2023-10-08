import { useState, useRef, useEffect } from "react";
import CardCourses from "../../components/CardCourses";
// import Filter from "./Filter";
import SearchFilter from "../../components/SearchFilter";
// import data from "../../coursesData";

import { useDispatch, useSelector } from "react-redux";
import { listCourses } from "../../actions/courseActions";

import { Toast } from "primereact/toast";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [dataFromChild, setDataFromChild] = useState("");

  const GetSearchQuery = (searchQuery) => {
    setDataFromChild(searchQuery.toLowerCase());
  };

  const toast = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.user);
  const { userInfo } = userLogin;

  const coursesList = useSelector((state) => state.courseList);
  const { loading, error, courses } = coursesList;

  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: error,
      life: 3000,
    });
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      dispatch(listCourses());
    }
  }, [dispatch, userInfo, navigate]);

  return (
    <div>
      {/* <Filter /> */}
      <SearchFilter sendDataToParent={GetSearchQuery} />
      <div className="courses-new">
        <section className="courses-hero-section">
          <Toast ref={toast} />
          {loading ? (
            <Loader />
          ) : error ? (
            showError()
          ) : (
            <div className="card-grid">
              {courses
                .filter(
                  (course) =>
                    course.name.toLowerCase().includes(dataFromChild) ||
                    course.type.toLowerCase().includes(dataFromChild) ||
                    course.classe.toLowerCase().includes(dataFromChild)
                )
                .map((course) => (
                  <CardCourses
                    key={course._id}
                    name={course.name}
                    driveURL={course.driveURL}
                    classe={course.classe}
                    type={course.type}
                    bgImg={`url(${course.imageURL})`}
                  />
                ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Courses;
