import React, { useState } from "react";

interface DropdownProps {
  setParams: React.Dispatch<
    React.SetStateAction<{
      page: number;
      query: string;
    }>
  >;
}

/**
 * Dropdown component
 * @param {Function} setParams Changes the params state
 * @returns JSX element
 */
const Dropdown: React.FunctionComponent<DropdownProps> = ({ setParams }) => {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState("reactjs");

  const handleOpen = () => {
    setOpen(!open);
  };

  /**
   * Handles the click event on the dropdown options and manages localStorage
   * @param technology technology to be queried on the API
   */
  const handleClick = (technology: string) => {
    setParams({
      page: 0,
      query: technology,
    });
    window?.localStorage.setItem("selected_filter", technology);
    setFilter(technology);
    setOpen(!open);
  };

  return (
    <div
      onBlur={() => {
        setTimeout(() => {
          handleOpen();
        }, 200);
      }}
      onClick={handleOpen}
      className="dropdown"
    >
      <button className="dropbtn">
        <span>{filter}</span>
        <img
          height={10}
          src="/img/arrow-down-sign-to-navigate.png"
          alt="down-arrow"
        />
      </button>
      <div
        style={{ display: open ? "block" : "none" }}
        className="dropdown-content"
      >
        <div onClick={() => handleClick("angular")} className="dropdown-option">
          <img src="/img/image-138.png" alt="angular-logo" />
          <span>Angular</span>
        </div>
        <div onClick={() => handleClick("reactjs")} className="dropdown-option">
          <img src="/img/image-140.png" alt="reactjs-logo" />
          <span>Reactjs</span>
        </div>
        <div onClick={() => handleClick("vuejs")} className="dropdown-option">
          <img src="/img/image-141.png" alt="vuejs-logo" />
          <span>Vuejs</span>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
