import { useForm } from "react-hook-form";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { login, isLoading, error } = useLogin();

  const onSubmit = (data) => {
    login(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Bienvenido
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Ingresa tus credenciales para continuar
          </p>
        </div>

        {error && (
          <div className="p-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-900/50 dark:text-red-400">
            Error al iniciar sesión. Por favor verifica tus datos.
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 text-gray-900 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:ring-2 focus:outline-none dark:text-white dark:placeholder-gray-400 transition-colors ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary"
              }`}
              placeholder="nombre@empresa.com"
              {...register("email", { required: "El correo es requerido" })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className={`w-full px-4 py-2 text-gray-900 bg-gray-50 dark:bg-gray-700 border rounded-lg focus:ring-2 focus:outline-none dark:text-white dark:placeholder-gray-400 transition-colors ${
                errors.password
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 dark:border-gray-600 focus:ring-primary focus:border-primary"
              }`}
              placeholder="••••••••"
              {...register("password", {
                required: "La contraseña es requerida",
              })}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-2.5 text-white font-medium bg-primary hover:bg-primary/90 rounded-lg focus:ring-4 focus:ring-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-primary/30"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Iniciando sesión...
              </span>
            ) : (
              "Ingresar"
            )}
          </button>
        </form>

        <div className="text-center mt-4">
          <Link
            to="/register"
            className="text-sm text-primary hover:underline dark:text-primary-foreground"
          >
            ¿No tienes cuenta? Regístrate aquí
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
