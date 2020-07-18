import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Heros from "./Heros";
import ErrorBoundaries from "./ErrorBoundaris";
import Counter from "./Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      {/* <ErrorBoundaries>
        <Heros hero={"superman"} />
      </ErrorBoundaries>
      <ErrorBoundaries>
        <Heros hero={"joker"} />
      </ErrorBoundaries>
      <ErrorBoundaries>
        <Heros hero={"wonder woman"} />
      </ErrorBoundaries> */}

    </div>
  );
}

export default App;
