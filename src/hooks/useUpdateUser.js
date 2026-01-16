import { updateUser } from "../api/user.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useUpdateUser = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user) => updateUser(id, user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user", id] });
    },
  });
};

export default useUpdateUser;
