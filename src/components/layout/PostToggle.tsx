import React from "react";

interface PostToggleProps {
  toggleView: () => void;
  showAll: boolean;
}

const PostToggle: React.FunctionComponent<PostToggleProps> = ({
  toggleView,
  showAll,
}) => {
  return (
    <div className="Toggle">
      <div
        onClick={toggleView}
        style={{
          color: showAll ? "var(--azure)" : "var(--gray)",
          border: showAll ? "1px solid var(--azure)" : "1px solid var(--gray)",
        }}
        className="Rectangle"
      >
        <span className="All Text-Style-2">All</span>
      </div>
      <div
        onClick={toggleView}
        style={{
          color: !showAll ? "var(--azure)" : "var(--gray)",
          border: !showAll ? "1px solid var(--azure)" : "1px solid var(--gray)",
        }}
        className="Rectangle"
      >
        <span className="My-faves">My faves</span>
      </div>
    </div>
  );
};

export default PostToggle;
