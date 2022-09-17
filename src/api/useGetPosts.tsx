import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { getPosts } from ".";
import { QueryParams } from "../models";

/**
 * Hook that is called to get the posts
 * @param params list of params to query posts
 * @returns list of posts
 */
const useGetPosts = (params: QueryParams) => {

  const query = useQuery("getPosts", () => getPosts(params));

  useEffect(() => {
    query.refetch();
  }, [params]);

  return query;
};

export default useGetPosts;
