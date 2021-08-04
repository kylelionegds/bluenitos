import { useQuery } from "react-query";
import requestAxios from "../utils/requests";

export interface MeReturn {
  id: string;
  userName: string;
  normalizedUserName: string;
  email: string;
  normalizedEmail: string;
  emailConfirmed: boolean;
  passwordHash: string;
  securityStamp: string;
  concurrencyStamp: string;
  phoneNumber: string;
  phoneNumberConfirmed: true;
  twoFactorEnabled: true;
  lockoutEnd: string;
  lockoutEnabled: boolean;
  accessFailedCount: number;
  nome: string;
  sobrenome: string;
  pontuacao: number;
  avatar: string;
  exercises: [
    {
      id: string;
      descricao: string;
      resultado: string;
      users: string[];
      pontosPremiacao: number;
    }
  ];
}

export const GET_ME_KEY = "me";

export const getMe = async (id: string): Promise<MeReturn> => {
  const { data } = await requestAxios({
    url: `/Users/${id}`,
    method: "GET",
  });
  return data;
};

export const useGetMe = (id: string) => {
  return useQuery([GET_ME_KEY, id], () => getMe(id), {
    staleTime: 15 * 60 * 1000, //15min
  });
};
