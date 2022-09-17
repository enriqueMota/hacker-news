import React, { RefObject, useEffect, useRef, useState } from "react";
import useGetPosts from "../../api/useGetPosts";
import Dropdown from "../layout/Dropdown";
import Post from "./Post";

interface AllPostsProps {}

const AllPosts: React.FunctionComponent<AllPostsProps> = () => {
  const [params, setParams] = useState({
    page: 0,
    query: "reactjs",
  });
  const { data } = useGetPosts(params);
  


  return (
    <div id="parent">
      <Dropdown {...{ setParams }} />
      {data?.query}
      <Post />
      {/* {data?.hits.map((hit) => (
        <>
          <span>{hit?.}</span>
          <br />
          <br />
        </>
      ))} */}
    </div>
  );
};

export default AllPosts;
