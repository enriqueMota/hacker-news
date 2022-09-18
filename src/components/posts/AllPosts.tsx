import React, { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";
import useGetPosts from "../../api/useGetPosts";
import { Hit } from "../../models";
import Dropdown from "../layout/Dropdown";
import Post from "./Post";

interface AllPostsProps {}

const AllPosts: React.FunctionComponent<AllPostsProps> = () => {
  const [params, setParams] = useState({ page: 0, query: "reactjs" });
  const [posts, setPosts] = useState<Hit[]>();
  const { data } = useGetPosts(params);
  const notNullable = ["author", "story_title", "story_url", "created_at"];

  useEffect(() => {
    const newHits: Hit[] = [];
    if (posts?.length) {

      data?.hits.forEach((hit) => {
        let hasNull = false;
        for (let i = 0; i < notNullable.length; i++) {
          const key = notNullable[i];
          if (
            hit[key as keyof typeof hit] === undefined ||
            hit[key as keyof typeof hit] === null
          ) {
            hasNull = true;
            return;
          }
        }
        if (!hasNull) newHits.push(hit);
      });

      setPosts([...posts, ...(newHits as Hit[])]);
      return;
    }

    data?.hits.forEach((hit) => {
      let hasNull = false;
      for (let i = 0; i < notNullable.length; i++) {
        const key = notNullable[i];
        if (
          hit[key as keyof typeof hit] === undefined ||
          hit[key as keyof typeof hit] === null
        ) {
          hasNull = true;
          return;
        }
      }
      if (!hasNull) newHits.push(hit);
    });

    setPosts(newHits);
  }, [data?.hits]);

  return (
    <div>
      <Dropdown {...{ setParams }} />
      <div className="Post-Container">
        {posts?.map((hit, i) => (
          <React.Fragment key={`${hit?.story_id}-${i}`}>
            <Post {...{ hit }} />
            {posts?.length === i + 1 && (
              <Waypoint
                onEnter={() => {
                  setParams({ ...params, page: params?.page + 1 });
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
