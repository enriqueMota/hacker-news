import { Post, QueryParams } from "../models";
import server from "./server";

export const hackerApi = server("https://hn.algolia.com/api/v1/search_by_date");

export const getPosts = async (params: QueryParams): Promise<Post> => {
  const response = await hackerApi.get("/", { params });
  return response.data;
};
