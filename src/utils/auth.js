import { UserData } from "../types/user";

export const getToken = () => localStorage.getItem("token");

export const setToken = (token) => localStorage.setItem("token", token);

export const removeUserId = () => localStorage.removeItem("user");

export const setUserId = (user) =>
  localStorage.setItem("user", JSON.stringify(user._id)); //do obsługi isLogged ?

export const getUserId = () => JSON.parse(localStorage.getItem("user"));
