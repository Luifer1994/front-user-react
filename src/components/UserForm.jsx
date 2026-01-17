import { useForm } from "react-hook-form";
import { useEffect } from "react";

const UserForm = ({ onSubmit, user = null, onCancel, isLoading, error }) => {
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (user) {
      reset(user);
    }
  }, [user, reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      {error && <p className="text-red-500">Error: {error.message}</p>}
      <input
        type="text"
        {...register("name")}
        defaultValue={user?.name}
        className="border rounded p-2 text-black dark:text-white"
        placeholder="Nombre"
      />
      <input
        type="email"
        {...register("email")}
        defaultValue={user?.email}
        className="border rounded p-2 text-black dark:text-white"
        placeholder="Email"
      />
      {!user && (
        <input
          type="password"
          {...register("password")}
          className="border rounded p-2 text-black dark:text-white"
          placeholder="Contraseña"
        />
      )}

      <button
        type="submit"
        className="bg-primary dark:bg-primary/90 text-white dark:text-black p-2 rounded cursor-pointer hover:bg-primary/80 dark:hover:bg-primary/70 transition-colors"
        disabled={isLoading}
      >
        {isLoading ? "Guardando..." : user ? "Actualizar" : "Guardar"}
      </button>
      <button
        type="button"
        className="bg-red-500 text-white p-2 rounded cursor-pointer hover:bg-red-600 dark:hover:bg-red-600 transition-colors"
        onClick={onCancel}
        disabled={isLoading}
      >
        {isLoading ? "Cancelando..." : "Cancelar"}
      </button>
    </form>
  );
};

export default UserForm;
