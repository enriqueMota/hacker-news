import React, { useEffect, useState } from "react";
import { Hit } from "../../models";
import Post from "./Post";

interface FavPostsProps {}

const FavPosts: React.FunctionComponent<FavPostsProps> = () => {
  const [favPosts, setFavPosts] = useState<Hit[]>();

  useEffect(() => {
    const posts = JSON.parse(
      window.localStorage.getItem("liked_posts") as string
    );
    setFavPosts(posts as Hit[]);
  }, [window.localStorage]);

  return (
    <>
      {favPosts?.map((hit: Hit, i) => (
        <div key={`${hit?.story_id}-${i}`} className="Post-Container">
          <Post {...{ hit }} />
        </div>
      ))}
    </>
  );
};

export default FavPosts;
