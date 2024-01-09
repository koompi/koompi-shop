import { Route, Routes } from "react-router-dom";

import Index from "./pages";
import SinglePage from "./pages/product";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={Index} />
        <Route path="/koompi/:id" Component={SinglePage} />
      </Routes>
    </>
  );
}
