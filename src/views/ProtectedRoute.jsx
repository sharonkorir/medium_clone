import { Navigate } from "react-router-dom";
import { useStore } from "../Store";

export default function ProtectedRoute({ children }) {
  const user = useStore((state) => state.currentUser);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return children;
}
