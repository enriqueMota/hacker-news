import axios, { AxiosInstance } from "axios";
import qs from "qs";

/**
 * Creates a custom axios instance
 * @param {string} baseURL URL of the request
 */
const customAxios = (baseURL: string): AxiosInstance => {
  return axios.create({
    baseURL,
    paramsSerializer: (params) => qs.stringify(params, { skipNulls: true }),
  });
};

export default customAxios;
