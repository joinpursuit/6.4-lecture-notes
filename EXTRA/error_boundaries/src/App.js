import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Heros from "./Heros";
import ErrorBoundaries from "./ErrorBoundaris";
import Counter from "./Counter";
import CounterErrorBoundaries from "./CounterErrorBoundaries";
import Person from "./Person";

function App() {
  const people = [
    { names: { firstName: "corey", lastName: "Ladovsky" } },
    { age: 19 },
    { names: { firstName: "Alejo", lastName: "Franco" } },
  ];

  return (
    <div className="App">
      <CounterErrorBoundaries>
        <Counter />
      </CounterErrorBoundaries>

      <CounterErrorBoundaries>
        <Counter />
      </CounterErrorBoundaries>

      {people.map((person) => {
        return (
          <ErrorBoundaries>
            <Person names={person.names} />
          </ErrorBoundaries>
        );
      })}
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
