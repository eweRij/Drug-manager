import { warning_toast } from "./toast";

export const setLoggedOut = () =>
  localStorage.setItem("isLogged", JSON.stringify(false)); //do obsługi isLogged ?

export const setLoggedIn = () =>
  localStorage.setItem("isLogged", JSON.stringify(true)); //do obsługi isLogged ?

export const getLogged = (): boolean =>
  JSON.parse(localStorage.getItem("isLogged") || "{}");

export const setUserLoggedOut = (): void => {
  setLoggedOut();
  warning_toast("Session has finished. You need to log in!", true);
  setTimeout(() => {
    window.location.reload();
  }, 3000);
};
