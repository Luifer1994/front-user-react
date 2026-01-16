import { Outlet } from "react-router";
import useTheme from "../hooks/useTheme";
import { useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { useNavigate } from "react-router";

const MainLayout = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <nav className="flex items-center justify-between px-6 bg-white dark:bg-gray-800">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="https://share.ftimg.com/aff/flamingtext/2019/03/28/flamingtext__26068056772646949.png"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl font-bold text-red-500">App</span>
        </div>
        <button
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300 transition-colors"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          aria-label="Toggle Theme"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </nav>
      <main className="p-6 max-w-4xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
