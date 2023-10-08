import NavBar from "../components/NavBar";
import Courses from "../Sections/Students/Courses";
import Footer from "../components/Footer";

import "./Students.css";

const Students = () => {
  return (
    <div>
      <div className="top">
        <NavBar />
      </div>
      <div className="students">
        <Courses />
      </div>
      <hr className="students-hr" />
      <Footer />
    </div>
  );
};

export default Students;
