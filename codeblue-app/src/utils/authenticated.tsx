import { ApplicationPaths } from "../types";
import { clearVerifiedStatus } from "./verified";

export const TOKEN_KEY = "@CODEBLUE_ID";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const handleLogout = () => {
  logout();
  clearVerifiedStatus();

  if (window.location.pathname !== ApplicationPaths.LOGIN) {
    window.location.reload();
    window.location.href = ApplicationPaths.LOGIN;
  }
};
