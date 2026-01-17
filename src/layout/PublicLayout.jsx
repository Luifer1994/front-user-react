import { Outlet } from "react-router";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 flex items-center justify-center">
      <Outlet />
    </div>
  );
};

export default PublicLayout;
