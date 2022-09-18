import React, { useEffect, useState } from "react";
import { Waypoint } from "react-waypoint";
import useGetPosts from "../../api/useGetPosts";
import { Hit } from "../../models";
import Dropdown from "../layout/Dropdown";
import Post from "./Post";

interface AllPostsProps {}

/**
 * All posts component
 * @returns The rendered list of all posts
 */
const AllPosts: React.FunctionComponent<AllPostsProps> = () => {
  const [params, setParams] = useState({ page: 0, query: "reactjs" });
  const [posts, setPosts] = useState<Hit[]>();
  const { data } = useGetPosts(params);
  const notNullable = ["author", "story_title", "story_url", "created_at"];

  useEffect(() => {

    // creating an empty array that will contain all the posts that are not null;
    const newHits: Hit[] = [];

    // if there are no posts, then this scoped code would be ignored
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

    // Looping through all the posts from the response
    data?.hits.forEach((hit) => {
      // creating a boolean to know if the current hit is null or not
      let hasNull = false;

      // Looping through all the not nullable keys
      for (let i = 0; i < notNullable.length; i++) {

        const key = notNullable[i];

        // Checking if the current key has a null or undefined value
        if (
          hit[key as keyof typeof hit] === undefined ||
          hit[key as keyof typeof hit] === null
        ) {
          // if so, set the variable to true
          hasNull = true;
          return;
        }
      }
      // if none of the not nullable keys are null, then push this hit unto the new array
      if (!hasNull) newHits.push(hit);
    });

    // and finally onto the state, the same process but slightly different happens if there are already a list of posts
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
              // React component that appears only at the bottom of the page
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
