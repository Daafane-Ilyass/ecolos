import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paths/Home";
import "./App.css";
import "primeicons/primeicons.css";
import Students from "./paths/Students";
import Store from "./paths/Store";
import ProductScreen from "./paths/ProductScreen";
import CartScreen from "./paths/CartScreen";
import { TestLoginScreen } from "./paths/TestLoginScreen";
import RegisterScreen from "./paths/RegisterScreen";
import ProfileScreen from "./paths/ProfileScreen";
import ShippingScreen from "./paths/ShippingScreen";
import PaymentScreen from "./paths/PaymentScreen";
import PlaceOrderScreen from "./paths/PlaceOrderScreen";
import OrderScreen from "./paths/OrderScreen";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Students />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<ProductScreen />} />
        <Route path="/cart/" element={<CartScreen />} />
        <Route path="/cart/:id" element={<CartScreen />} />
        <Route path="/shipping/" element={<ShippingScreen />} />
        <Route path="/payment/" element={<PaymentScreen />} />
        <Route path="/placeorder/" element={<PlaceOrderScreen />} />
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/login" element={<TestLoginScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
