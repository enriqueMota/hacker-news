import React from "react";

interface PostToggleProps {
  toggleView: () => void;
  showAll: boolean;
}

/**
 * Toggle switch component
 * @param {Function} toggleView Switches between all posts and favorite posts
 * @param {Boolean} showAll Truthy if the showAll view is visible
 * @returns The toggle buttons
 */
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
        <span data-testid='all-posts-button' className="All Text-Style-2">All</span>
      </div>
      <div
        onClick={toggleView}
        style={{
          color: !showAll ? "var(--azure)" : "var(--gray)",
          border: !showAll ? "1px solid var(--azure)" : "1px solid var(--gray)",
        }}
        className="Rectangle"
      >
        <span data-testid='favorite-posts-button' className="My-faves">My faves</span>
      </div>
    </div>
  );
};

export default PostToggle;
