import "./Loader.css";
import { ProgressSpinner } from "primereact/progressspinner";

const Loader = () => {
  return (
    <div className="store-loader">
      <ProgressSpinner />
    </div>
  );
};

export default Loader;
