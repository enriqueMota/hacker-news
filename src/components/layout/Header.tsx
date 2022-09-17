import React from "react";

interface HeaderProps {}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (
    <div className="Rectangle-2-Copy">
      <img
        className="HACKER-NEWS"
        src="/img/hacker-news.png"
        alt="hacker-news-logo"
      />
    </div>
  );
};

export default Header;
