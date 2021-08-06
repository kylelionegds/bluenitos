import { useMutation, useQuery } from "react-query";
import requestAxios, { request } from "../utils/requests";
import { UserReturn } from "./useLoggedUser";

export type GetChallengesData = {
  id: number;
  descricao: string;
  resultado: string;
  users: UserReturn[];
  pontosPremiacao: number;
};

/* GET CHALLENGES */

export const GET_CHALLENGES = "getChallenges";

export const getChallenges = async (): Promise<GetChallengesData[]> => {
  const { data } = await requestAxios({
    url: "/api/Exercises",
    method: "GET",
  });
  return data;
};

export const useGetChallenges = () => {
  return useQuery(GET_CHALLENGES, () => getChallenges());
};

/* UPDATE CHALLENGE */

export const UPDATE_CHALLENGE = "updateChallenge";

export type UpdateChallengeData = {
  descricao: string;
  resultado: string;
  pontosPremiacao: number;
};

export const updateChallenge = async (
  info: UpdateChallengeData
): Promise<GetChallengesData> => {
  const { data } = await requestAxios({
    url: `/api/Exercises`,
    method: "PUT",
    data: info,
  });
  return data;
};

export const useUpdateChallenge = () => {
  useMutation(updateChallenge);
};

/* GET EXERCISE */

export const GET_CHALLENGE = "getChallenge";

interface GetChallengeInfo {
  challenge_id: string;
}

export const getChallenge = async (
  info: GetChallengeInfo
): Promise<GetChallengesData> => {
  const { data } = await requestAxios({
    url: `/api/Exercises/${info.challenge_id}`,
    method: "GET",
  });
  return data;
};

export const useGetChallenge = (info: GetChallengeInfo) => {
  return useQuery([GET_CHALLENGE, info], () => getChallenge(info));
};

/* CREATE CHALLENGE */

export type CreateChallengeData = UpdateChallengeData;

export const createChallenge = async (
  info: CreateChallengeData
): Promise<GetChallengesData> => {
  const { data } = await requestAxios({
    url: `/api/Exercises`,
    method: "POST",
    data: info,
  });
  return data;
};

export const useCreateChallenge = () => {
  useMutation(createChallenge);
};
