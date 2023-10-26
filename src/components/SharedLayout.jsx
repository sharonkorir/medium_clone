import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function SharedLayout({ user }) {
  return (
    <>
      <Navbar user={user} />
      <Outlet />
    </>
  );
}
