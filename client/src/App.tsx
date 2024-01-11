import "swiper/css";
import "swiper/css/pagination";

import { Route, Routes } from "react-router-dom";

import Checkout from "./pages/checkout";
import Index from "./pages";
import Navbar from "./components/Navbar";
import SinglePage from "./pages/product";

export default function App() {
  // const sampleItem = {
  //   id: 1,
  //   name: "Sample Item",
  //   price: 19.99,
  // };

  // const { cartItems, addToCart } = useContext(CartContext);

  return (
    <>
      <Navbar />

      <div className="px-2">
        <Routes>
          <Route path="/" Component={Index} />
          <Route path="/checkout" Component={Checkout} />
          <Route path="/product/:id" Component={SinglePage} />
        </Routes>
      </div>
    </>
  );
}
