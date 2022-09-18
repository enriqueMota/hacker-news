import React from "react";

interface HeaderProps {}

/**
 * Container for the header of the web page.
 * @returns The header of the web page
 */
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
