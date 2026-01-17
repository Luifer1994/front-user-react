import { useMutation } from "@tanstack/react-query";
import { login } from "../api/auth.api";
import useAuthStore from "../stores/auth";
import { useNavigate } from "react-router";

const useLogin = () => {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setToken(data.data.token);
      navigate("/");
    },
    onError: (error) => {
      console.error("Login failed:", error);
      // We can handle specific error messages here if needed
    },
  });

  return {
    login: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error,
    isSuccess: mutation.isSuccess,
  };
};

export default useLogin;
