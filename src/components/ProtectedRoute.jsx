import { Navigate, Outlet } from "react-router";
import useAuthStore from "../stores/auth";

const ProtectedRoute = () => {
  const token = useAuthStore((state) => state.token);

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
