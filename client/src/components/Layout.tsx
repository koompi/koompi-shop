import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="w-full relative h-svh max-h-svh">
      <Navbar />
      <div className="h-auto px-2 pb-16">
        <Outlet />
      </div>
    </div>
  );
}
