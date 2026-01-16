import UserForm from "../components/UserForm";
import { useNavigate } from "react-router";
import useCreateUser from "../hooks/useCreateUser";

const Register = () => {
  const navigate = useNavigate();
  const {
    mutate: createUser,
    error: createUserError,
    isPending: isCreating,
  } = useCreateUser();
  const onSubmit = (data) => {
    createUser(data, {
      onSuccess: () => {
        navigate("/");
      },
    });
  };

  const onCancel = () => {
    navigate("/");
  };

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Registrar usuario</h1>
      <UserForm
        onSubmit={onSubmit}
        onCancel={onCancel}
        isLoading={isCreating}
        error={createUserError}
      />
    </div>
  );
};

export default Register;
