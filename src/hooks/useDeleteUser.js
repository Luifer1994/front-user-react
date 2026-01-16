import { deleteUser } from "../api/user.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export default useDeleteUser;
