import { useMutation } from "react-query";
import requestAxios from "../utils/requests";

interface RegisterData {
  Username?: string;
  Email?: string;
  PasswordHash: string;
  Nome: string;
  Sobrenome: string;
  Avatar: string;
}

export const REGISTER_KEY = "registerUser";

export const register = async (info: RegisterData) => {
  const { data } = await requestAxios({
    url: "/api/Auth/Register",
    method: "POST",
    data: info,
  });
  return data;
};

export const useRegister = () => {
  return useMutation(register);
};
