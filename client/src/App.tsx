import { Route, Routes } from "react-router-dom";

import Index from "./pages";
import Navbar from "./components/Navbar";
import SinglePage from "./pages/product";

export default function App() {
  return (
    <>
      <Navbar />

      <div className="px-2 mb-16">
        <Routes>
          <Route path="/" Component={Index} />
          <Route path="/product/:id" Component={SinglePage} />
        </Routes>
      </div>
    </>
  );
}
