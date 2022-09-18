import React, { useEffect, useState } from "react";
import { Hit } from "../../models";
import { timeAgo } from "../../utils/time";

interface PostProps {
  hit: Hit;
}
/**
 * Post component with all post info
 * @param {Hit} hit The current hit on the list
 * @returns JSX element
 */
const Post: React.FunctionComponent<PostProps> = ({ hit }) => {
  const [likedPosts, setLikedPosts] = useState<Hit[]>();

  useEffect(() => {
    const likedPosts: Hit[] = JSON.parse(
      window.localStorage.getItem("liked_posts") as string
    );
    setLikedPosts(likedPosts);
  }, []);

  /**
   * Handles the click event on the post
   * @param {React.MouseEvent} e React click event
   * @returns early
   */
  const handleClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;

    // if the target is a disliked like button, 
    // then like it and then save it on localStorage
    if (target?.classList?.contains("iconmonstr-favorite-2")) {
      const localPosts = JSON.parse(window.localStorage.getItem("liked_posts") as string);
      const withTargetPost = [...localPosts, hit];
      setLikedPosts(withTargetPost);
      window.localStorage.setItem("liked_posts", JSON.stringify(withTargetPost));
      return;
    }

    // if the target is a liked like button,
    // then dislike it and then save the list on localStorage
    if (target?.classList?.contains("iconmonstr-favorite-3")) {
      const localPosts = JSON.parse(window.localStorage.getItem("liked_posts") as string);
      const withoutTargetPost = localPosts?.filter(
        (post: Hit) => post?.story_id !== hit?.story_id
      );
      setLikedPosts(withoutTargetPost);
      window.localStorage.setItem("liked_posts", JSON.stringify(withoutTargetPost));
      return;
    }

    // Open the story_url on another tab
    window.open(hit?.story_url as string, "_blank");
  };

  // checks wether or not the post exists
  const isPostLiked = () =>
    likedPosts?.find((post) => post?.story_id === hit?.story_id);

  return (
    <div onClick={handleClick} className="Post">
      <div className="Post-Details">
        <div className="Post-Time">
          <img src="img/iconmonstr-time-2.svg" className="iconmonstr-time-2" />
          <span className="Post-Time-Detail">
            {timeAgo(hit?.created_at.toString())} by {hit?.author}
          </span>
        </div>
        <span className="Post-Title">{hit?.story_title}</span>
      </div>
      <div className="Like-Duo">
        <div className="Like-Box" />
        <img
          className={`iconmonstr-favorite-${isPostLiked() ? "3" : "2"}`}
          src={`img/iconmonstr-favorite-${isPostLiked() ? "3" : "2"}.svg`}
          alt="like button"
        />
      </div>
    </div>
  );
};

export default Post;
