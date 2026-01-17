import { Navigate, Outlet } from "react-router";
import useAuthStore from "../stores/auth";

const PublicRoute = () => {
  const token = useAuthStore((state) => state.token);

  if (token) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;
