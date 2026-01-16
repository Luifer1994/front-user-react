import { Pencil, Trash2 } from "lucide-react";

const UserList = ({ users, isLoading, error, handleEdit, handleDelete }) => {
  return (
    <div className="">
      {isLoading && <p className="text-gray-500 animate-pulse">Cargando...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}

      <ul className="space-y-2">
        {users?.length === 0 && (
          <p className="text-gray-500">No hay usuarios</p>
        )}
        {users?.map((user) => (
          <li
            key={user.id}
            className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <span className="text-sm font-medium">{user.name}</span>

            <div className="flex gap-1">
              <button
                onClick={() => handleEdit(user.id)}
                className="p-2  dark:text-gray-300 hover:text-blue-600 rounded-md transition cursor-pointer hover:text-blue-50 dark:hover:text-blue-600"
              >
                <Pencil size={16} />
              </button>

              <button
                onClick={() => handleDelete(user.id)}
                className="p-2 dark:text-gray-300 hover:text-red-600 rounded-md transition cursor-pointer hover:text-red-50 dark:hover:text-red-600"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
