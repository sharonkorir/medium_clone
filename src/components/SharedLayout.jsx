import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useStore } from "../Store";

export default function SharedLayout() {
  const user = useStore((state) => state.currentUser);
  return (
    <>
      <Navbar user={user} />
      <Outlet />
    </>
  );
}
