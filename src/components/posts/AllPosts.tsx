import React, { useEffect, useState } from "react";
import useGetPosts from "../../api/useGetPosts";

interface AllPostsProps {}

const AllPosts: React.FunctionComponent<AllPostsProps> = () => {
  const [params, setParams] = useState({
    page: 0,
    query: "reactjs",
  });
  const { data } = useGetPosts(params);

  return (
    <div>
      holasdf
      {data?.hits.map((hit) => (
        <>
          <span>{hit?._highlightResult?.comment_text?.value}</span>
          <br />
          <br />
        </>
      ))}
    </div>
  );
};

export default AllPosts;
