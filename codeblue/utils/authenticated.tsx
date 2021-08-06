import { useQueryClient } from "react-query";
import { ApplicationPaths } from "../types";
import { clearVerifiedStatus } from "./verified";
import nookies from "nookies";
import { NextPageContext } from "next";

export const TOKEN_KEY = "@CODEBLUE_ID";
export const getToken = (ctx: NextPageContext) => nookies.get(ctx, TOKEN_KEY);
export const setToken = (ctx: NextPageContext, token: string) => {
  nookies.set(ctx, TOKEN_KEY, token, {
    maxAge: 24 * 60 * 60 * 1,
  });
};
export const logout = (ctx: NextPageContext) => {
  nookies.destroy(ctx, TOKEN_KEY);
};

export const handleLogout = (ctx: NextPageContext) => {
  const queryClient = useQueryClient();
  queryClient.clear();
  logout(ctx);
  clearVerifiedStatus();

  if (window.location.pathname !== ApplicationPaths.LOGIN) {
    window.location.reload();
    window.location.href = ApplicationPaths.LOGIN;
  }
};
