import UserList from "../components/UserList";
import useGetAllUsers from "../hooks/useGetAllUsers";
import { useNavigate } from "react-router";
import { Plus } from "lucide-react";
import useDeleteUser from "../hooks/useDeleteUser";
import { useState } from "react";
import Pagination from "../components/Pagination";
import useDebounce from "../hooks/shared/useDebounce";

const Index = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState("id,desc");
  const [search, setSearch] = useState("");


  const { users, pagination, isLoading, error } = useGetAllUsers(page, pageSize, sort, useDebounce(search, 500));
  const { mutate: deleteUser } = useDeleteUser();



  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <h1 className="text-xl font-bold w-full md:w-auto">Lista de usuarios</h1>

        <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm dark:text-white text-black/80 w-full md:w-auto"
          />
          <div className="flex gap-2 w-full md:w-auto">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm cursor-pointer flex-1 md:flex-none"
            >
              <option value="id,desc">Más recientes</option>
              <option value="id,asc">Más antiguos</option>
              <option value="name,asc">Nombre (A-Z)</option>
              <option value="name,desc">Nombre (Z-A)</option>
              <option value="email,asc">Email (A-Z)</option>
              <option value="email,desc">Email (Z-A)</option>
            </select>

            <button
              onClick={() => navigate("/register")}
              className="bg-primary dark:bg-primary/80 text-white dark:text-black p-2 rounded flex items-center justify-center gap-2"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>
      </div>

      <UserList
        users={users}
        isLoading={isLoading}
        error={error}
        handleEdit={handleEdit}
        handleDelete={deleteUser}
      />
      
      <Pagination
          currentPage={page}
          totalPages={pagination.totalPages}
          onPageChange={setPage}
          isFirst={pagination.first}
          isLast={pagination.last}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => {
            setPageSize(newPageSize);
            setPage(0);
          }}
           isLoading={isLoading}
        />
    </div>
  );
};

export default Index;
