import { createUser } from "../api/user.api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (user) => createUser(user),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

export default useCreateUser;
