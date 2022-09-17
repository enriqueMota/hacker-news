import React, { useState } from "react";
import AllPosts from "./components/posts/AllPosts";
import Header from "./components/Header";
import "./styles/index.css";
import { QueryClient, QueryClientProvider } from "react-query";

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
        <div className="Toggle">
          <div
            onClick={toggleView}
            style={{
              color: showAll ? "var(--azure)" : "var(--gray)",
              border: showAll
                ? "1px solid var(--azure)"
                : "1px solid var(--gray)",
            }}
            className="Rectangle"
          >
            <span className="All Text-Style-2">All</span>
          </div>
          <div
            onClick={toggleView}
            style={{
              color: !showAll ? "var(--azure)" : "var(--gray)",
              border: !showAll
                ? "1px solid var(--azure)"
                : "1px solid var(--gray)",
            }}
            className="Rectangle"
          >
            <span className="My-faves">My faves</span>
          </div>
        </div>
        <div className="container">
          {showAll && <AllPosts />}
          {!showAll && <>my faves</>}
        </div>
      </div>
    </QueryClientProvider>
  );
};

export default App;
