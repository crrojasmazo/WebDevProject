import api from "./api";

const prefix = "users";

const signup = async (user) => await api.post(`${prefix}/register`, user);

const signin = async (user) => await api.post(`${prefix}/login`, user);

const getUserInfo = async (id) => await api.get(`${prefix}/info/${id}`);

const authService = {
  signin,
  signup,
  getUserInfo,
};

export default authService;
