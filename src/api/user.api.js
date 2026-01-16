import http from "../utils/http";

const getAllUsers = async (page = 0, size = 10, sort = "id,desc", search = "") => {
  const response = await http.get(
    `/users?page=${page}&size=${size}&sort=${sort}&search=${search}`
  );
  return response.data.data;
};
const getUserById = async (id) => {
  const response = await http.get(`/users/${id}`);
  return response.data.data;
};
const createUser = async (user) => {
  const response = await http.post("/users", user);
  return response.data.data;
};
const updateUser = async (id, user) => {
  const response = await http.put(`/users/${id}`, user);
  return response.data.data;
};
const deleteUser = async (id) => {
  const response = await http.delete(`/users/${id}`);
  return response.data.data;
};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };
