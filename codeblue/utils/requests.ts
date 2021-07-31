import axios, { AxiosRequestConfig } from "axios";
import { getToken, handleLogout } from "./authenticated";

const { REACT_APP_BASE_URL } = process.env;

const api = axios.create({
  baseURL: REACT_APP_BASE_URL,
  timeout: 60000,
});
api.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (401 === error?.response?.status) {
      handleLogout();
    } else {
      return Promise.reject(error);
    }
  }
);
export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}
/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response: Response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response: Response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new ResponseError(response);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export async function request(
  url: string,
  options?: RequestInit
): Promise<{} | { err: ResponseError }> {
  const fetchResponse = await fetch(url, options);
  const response = checkStatus(fetchResponse);
  return parseJSON(response);
}

export default async function requestAxios(config: AxiosRequestConfig) {
  if (config.method === "GET") {
    config.data = "";
  }

  const token = getToken();

  if (token !== null) {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return await api.request(config);
}
