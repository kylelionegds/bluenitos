import { useMutation } from "react-query";
import requestAxios from "../utils/requests";

export type RegisterData = {
  Username: string;
  Email: string;
  PasswordHash: string;
  Nome: string;
  Sobrenome: string;
};

export const REGISTER_KEY = "registerUser";

export const register = async (info: RegisterData) => {
  const { data } = await requestAxios({
    url: "/api/auth/Register",
    method: "POST",
    data: info,
  });
  return data;
};

export const useRegister = () => {
  return useMutation(register);
};
