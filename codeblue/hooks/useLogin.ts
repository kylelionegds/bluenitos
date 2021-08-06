import { useMutation } from "react-query";
import requestAxios from "../utils/requests";

export type LoginData = {
  Email: string;
  PasswordHash: string;
};

export const LOGIN_KEY = "loginUser";

export const login = async (info: LoginData): Promise<string> => {
  const { data } = await requestAxios({
    url: "/Auth/Token",
    method: "POST",
    data: info,
  });

  return data;
};

export const useLogin = () => {
  return useMutation(login);
};
