export const getToken = () => localStorage.getItem("token");

export const setToken = (token) => localStorage.setItem("token", token);

export const removeUserId = () => localStorage.removeItem("user");

export const setUserId = (user) =>
  localStorage.setItem("user", JSON.stringify(user._id)); //do obsługi isLogged ?

// export const removeUser = () => localStorage.removeItem("user");

export const getUserId = () => JSON.parse(localStorage.getItem("user"));

// export const clearToken = () => {
//   setTimeout(removeToken, 60000);
// };
