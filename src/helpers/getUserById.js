export const getUserById = (id) => {
  const users = localStorage.getItem("usuarios");
  const userArray = JSON.parse(users);
  const user = userArray.find((user) => user.login.uuid === id);
  return user;
};
