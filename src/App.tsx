import React, { useEffect, useState } from "react";
import AllPosts from "./components/posts/AllPosts";
import Header from "./components/layout/Header";
import "./styles/index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import PostToggle from "./components/layout/PostToggle";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 10,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      retry: false,
      onError: (error) => {
        console.error(error);
      },
    },
  },
});

const App: React.FC = () => {
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    if (
      window?.localStorage.hasOwnProperty("liked_posts") &&
      window?.localStorage.hasOwnProperty("selected_filter")
    ) {
      return;
    }

    window.localStorage.setItem("liked_posts", JSON.stringify([]));
    window.localStorage.setItem("selected_filter", "reactjs");
  }, []);

  /**
   * Toggles between all posts and the faves
   */
  const toggleView = () => {
    setShowAll(!showAll);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <div className="body">
        <Header />
        <PostToggle {...{ showAll, toggleView }} />
        <div className="container">
          {showAll && <AllPosts />}
          {!showAll && <>my faves</>}
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
