import { useForm, useFieldArray } from "react-hook-form";
import { useEffect } from "react";

const UserForm = ({ onSubmit, user = null, onCancel, isLoading, error }) => {
  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: { addresses: [] }
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "addresses"
  });

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

      {/* Address Section */}
      <div className="mt-4">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-semibold">Direcciones</label>
          <button
            type="button"
            className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-xs"
            onClick={() => append({ name: "", address: "" })}
          >
            + Agregar Dirección
          </button>
        </div>

        {fields.map((item, index) => (
          <div key={item.id} className="flex flex-col gap-2 border p-3 rounded mb-2 bg-gray-50 dark:bg-gray-800">
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-gray-500">Dirección {index + 1}</span>
              <button
                type="button"
                className="text-red-500 text-xs hover:text-red-700"
                onClick={() => remove(index)}
              >
                Eliminar
              </button>
            </div>
            
            <input
              type="text"
              {...register(`addresses.${index}.name`)}
              placeholder="Nombre de la dirección (ej: Casa, Oficina)"
              className="border rounded p-2 text-black dark:text-white text-sm"
            />
            <input
              type="text"
              {...register(`addresses.${index}.address`)}
              placeholder="Dirección completa"
              className="border rounded p-2 text-black dark:text-white text-sm"
            />
          </div>
        ))}
        {fields.length === 0 && (
          <p className="text-gray-400 text-sm italic text-center py-2">No hay direcciones agregadas</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-primary dark:bg-primary/90 text-white dark:text-black p-2 rounded cursor-pointer hover:bg-primary/80 dark:hover:bg-primary/70 transition-colors mt-4"
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
