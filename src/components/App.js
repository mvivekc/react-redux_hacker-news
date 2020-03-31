import React from "react";
import "./App.css";

import Stories from "./Stories";
import SearchStories from "./SearchStories";

const App = () => {
  return (
    <div className="app">
      <div className="interaction">
        <SearchStories />
      </div>
      <Stories />
    </div>
  );
};

export default App;