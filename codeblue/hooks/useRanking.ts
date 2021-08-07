import { useQuery } from "react-query";
import requestAxios from "../utils/requests";
import { UserReturn } from "./useLoggedUser";

export interface GetUserRankInfo {
  qtd: number;
  token: string;
}

export const GET_USERS_RANK = "getUsersRank";

export const getUsersRank = async (
  info: GetUserRankInfo
): Promise<UserReturn[]> => {
  const { data } = await requestAxios({
    url: `/api/Users/rank/${info.qtd}`,
    method: "GET",
    headers: {
      Authorization: `Bearer ${info.token}`,
    },
  });
  return data;
};

export const useGetUsersRank = (info: GetUserRankInfo) => {
  return useQuery([GET_USERS_RANK, info], () => getUsersRank(info), {
    staleTime: 10 * 60 * 1000, //10 min
    enabled: true,
  });
};
