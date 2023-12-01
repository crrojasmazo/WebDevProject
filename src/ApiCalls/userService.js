import api from "./api";

const prefix = "users";

const updateUser = async (user) => await api.put(`${prefix}/${user.id}`, user);

const userService = {
  updateUser,
};

export default userService;
