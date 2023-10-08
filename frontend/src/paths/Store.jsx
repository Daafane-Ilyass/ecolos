import NavBar from "../components/NavBar";
import Product from "../components/Product";
import ProductsHero from "../components/ProductsHero";
import Footer from "../components/Footer";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import { Toast } from "primereact/toast";
import Loader from "../components/Loader";
// import products from "../products";

import "./Store.css";

const Store = () => {
  const toast = useRef(null);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  const showError = () => {
    toast.current.show({
      severity: "error",
      summary: "Error",
      detail: error,
      life: 3000,
    });
  };
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      <div className="top">
        <NavBar />
      </div>
      <div className="store">
        <div className="prouctsHero">
          <ProductsHero />
        </div>
        <Toast ref={toast} />
        {loading ? (
          <Loader />
        ) : error ? (
          showError()
        ) : (
          <main className="main bd-grid" id="products">
            {products.map((product) => (
              <Product key={product._id} product={product} />
            ))}
          </main>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Store;
