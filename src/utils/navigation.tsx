import { Dispatch } from "react";
import { NavigateFunction } from "react-router-dom";
import { setLogged } from "../store/features/user/userSlice";
import { setUserLoggedOut } from "./auth";

export const handleLogOut = (
  dispatch: Dispatch<any>,
  navigate: NavigateFunction
) => {
  setUserLoggedOut();
  dispatch(setLogged());
  navigate("/");
};

export const pages = [
  { name: "Profile", link: "/profile" },
  { name: "Drug Manager", link: "/drugmanager" },
  { name: "Home", link: "/home" },
];
export const settings = [
  { name: "Profile", link: "/profile" },
  { name: "Logout", link: "/" },
];
