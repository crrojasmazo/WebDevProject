import api from "./api";

const prefix = "users";

const updateUser = async (user) => await api.put(`${prefix}/${user.id}`, user);

const getAllUsers = async () => await api.get(`${prefix}/`);

const deleteUser = async (id) => await api.delete(`${prefix}/${id}`);

const userService = {
  updateUser,
  getAllUsers,
  deleteUser,
};

export default userService;
