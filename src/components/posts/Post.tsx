import React from "react";

interface PostProps {}

const Post: React.FunctionComponent<PostProps> = () => {
  return (
    <div className="Post">
      <div className="Post-Details">
        <div className="Post-Time">
          <img src="img/iconmonstr-time-2.svg" className="iconmonstr-time-2" />
          <span className="Post-Time-Detail">1 hour ago by author</span>
        </div>
        <span className="Post-Title">From chaos to free will</span>
      </div>
      <div className="Like-Duo">
        <div className="Like-Box" />
        <img
          className="iconmonstr-favorite-2"
          src="img/iconmonstr-favorite-2.svg"
          alt="like button"
        />
      </div>
    </div>
  );
};

export default Post;
