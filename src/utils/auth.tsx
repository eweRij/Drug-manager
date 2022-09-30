import { success_toast } from "./toast";

export const setLoggedOut = () =>
  localStorage.setItem("isLogged", JSON.stringify(false)); //do obsługi isLogged ?

export const setLoggedIn = () =>
  localStorage.setItem("isLogged", JSON.stringify(true)); //do obsługi isLogged ?
export const setUserId = (id: string): void => {
  localStorage.setItem("id", JSON.stringify(id));
};

//do obsługi isLogged ?
export const getUserId = (): string =>
  JSON.parse(localStorage.getItem("id") || "null");
export const removeUserId = (): void => localStorage.removeItem("id"); //do obsługi isLogged ?

export const getLogged = (): any =>
  JSON.parse(localStorage.getItem("isLogged") || "null");

export const setUserLoggedOutByVerification = (): void => {
  setLoggedOut();
  removeUserId();
  setTimeout(() => {
    window.location.reload();
  }, 3000);
};
export const setUserLoggedOut = (): void => {
  setLoggedOut();
  removeUserId();
  success_toast("You were successfully logged out. See you again!", true);
};
