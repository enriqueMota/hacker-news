import React from "react";
import { render, act, screen, waitFor } from "@testing-library/react/pure";
import "@testing-library/jest-dom/extend-expect";
import PostToggle from "../components/layout/PostToggle";

const toggleView = jest.fn();

describe("App", () => {
  it("should render the all posts button", () => {
    act(() => {
      const a = render(<PostToggle showAll={false} toggleView={toggleView} />);
      // console.log(a.getByTestId("all-posts-button"));
      const allPostsButton = screen.getByText("All");
      waitFor(() => expect(allPostsButton).toBeInTheDocument());
    });
  });
});
