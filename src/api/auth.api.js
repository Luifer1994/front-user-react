import http from "../utils/http";

const login = async (credentials) => {
  const response = await http.post("/auth/login", credentials);
  return response.data;
};

export { login };
