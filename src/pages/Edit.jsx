import { useParams } from "react-router";
import useGetUserById from "../hooks/useGetUserById";
import UserForm from "../components/UserForm";
import { useNavigate } from "react-router";
import useUpdateUser from "../hooks/useUpdateUser";

const Edit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error } = useGetUserById(id);
  const { mutate: updateUser, isPending: isUpdating } = useUpdateUser(id);

  const onSubmit = (formData) => {
    updateUser(formData, {
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
      <h1 className="text-xl font-bold mb-4">Editar usuario</h1>
      <UserForm
        onSubmit={onSubmit}
        user={data}
        onCancel={onCancel}
        error={error}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Edit;
