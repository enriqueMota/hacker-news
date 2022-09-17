import React, { RefObject, useEffect, useRef, useState } from "react";
import useGetPosts from "../../api/useGetPosts";
import Dropdown from "../layout/Dropdown";
import Post from "./Post";

interface AllPostsProps {}

const AllPosts: React.FunctionComponent<AllPostsProps> = () => {
  const [params, setParams] = useState({ page: 0, query: "reactjs" });
  const { data } = useGetPosts(params);

  return (
    <div>
      <Dropdown {...{ setParams }} />
      <div className="Post-Container">
        {data?.hits?.map((hit, i) => (
          <Post key={`${hit?.story_id}-${i}`} {...{ hit }} />
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
