import React, { RefObject, useEffect, useRef, useState } from "react";
import useGetPosts from "../../api/useGetPosts";

interface AllPostsProps {}

const AllPosts: React.FunctionComponent<AllPostsProps> = () => {
  const dropdownContentRef = useRef<any>(null);
  const dropdownRef = useRef<any>(null);
  const [params, setParams] = useState({
    page: 0,
    query: "reactjs",
  });
  const { data } = useGetPosts(params);
  const openDropdown = () => {
    dropdownContentRef!.current!.style!.display = "block";
  };
  const closeDropdown = () => {
    dropdownContentRef!.current!.style!.display = "none";
  };
  const handleClick = () => {
    closeDropdown();
  };
  

  return (
    <div id="parent">
      <div
        onBlur={closeDropdown}
        onClick={openDropdown}
        ref={dropdownRef}
        className="dropdown"
      >
        <button className="dropbtn">
          <span>Select your news</span>
          <img
            height={10}
            src="/img/arrow-down-sign-to-navigate.png"
            alt="down-arrow"
          />
        </button>
        <div ref={dropdownContentRef} className="dropdown-content">
          <div onClick={handleClick} className="dropdown-option">
            <img src="/img/image-138.png" alt="angular-logo" />
            <span>Angular</span>
          </div>
          <div onClick={handleClick} className="dropdown-option">
            <img src="/img/image-140.png" alt="reactjs-logo" />
            <span>Reactjs</span>
          </div>
          <div onClick={handleClick} className="dropdown-option">
            <img src="/img/image-141.png" alt="vuejs-logo" />
            <span>Vuejs</span>
          </div>
        </div>
      </div>
      {/* {data?.hits.map((hit) => (
        <>
          <span>{hit?._highlightResult?.comment_text?.value}</span>
          <br />
          <br />
        </>
      ))} */}
    </div>
  );
};

export default AllPosts;
