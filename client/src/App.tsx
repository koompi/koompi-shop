import "swiper/css";
import "swiper/css/pagination";

import { Route, Routes } from "react-router-dom";

import Checkout from "./pages/checkout";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import SinglePage from "./pages/product";

export default function App() {
  // const sampleItem = {
  //   id: 1,
  //   name: "Sample Item",
  //   price: 19.99,
  // };

  // const { cartItems, addToCart } = useContext(CartContext);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<SinglePage />} />
      </Route>
    </Routes>
  );
}
