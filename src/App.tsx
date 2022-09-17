import React, { useState } from "react";
import Header from "./components/Header";
import "./styles/index.css";

const App: React.FC = () => {
  const [showAll, setShowAll] = useState(true);

  const toggleView = () => {
    setShowAll(!showAll);
  };

  return (
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
      {showAll && <>all</>}
      {!showAll && <>my faves</>}
    </div>
  );
};

export default App;
