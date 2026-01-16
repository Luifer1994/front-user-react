import { getAllUsers } from "../api/user.api";
import { useQuery } from "@tanstack/react-query";

const useGetAllUsers = (page = 0, size = 10, sort = "id,desc", search = "") => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users", page, size, sort, search],
    queryFn: () => getAllUsers(page, size, sort, search),
    keepPreviousData: true,
  });

  const users = data?.content;
  const pagination = {
    totalPages: data?.totalPages,
    totalElements: data?.totalElements,
    first: data?.first,
    last: data?.last,
    number: data?.number,
    size: data?.size,
    numberOfElements: data?.numberOfElements,
    empty: data?.empty,
  };

  return { users, pagination, isLoading, error };
};

export default useGetAllUsers;
