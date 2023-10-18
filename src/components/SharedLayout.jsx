import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function SharedLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
