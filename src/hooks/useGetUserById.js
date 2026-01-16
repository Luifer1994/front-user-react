import { getUserById } from "../api/user.api";
import { useQuery } from "@tanstack/react-query";

const useGetUserById = (id) =>
  useQuery({
    queryKey: ["user", id],
    queryFn: () => getUserById(id),
  });

export default useGetUserById;
