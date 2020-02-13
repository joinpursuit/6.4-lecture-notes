import React from "react";
// import Person from "./components/Person";
import People from "./components/People";
import Clicker from "./components/Clicker";
import "./App.css";

const App = () => {
  return (
    <>
      <People people={[{name: "corey"}, {name: "jon"}, {name: "jhenya"}]} />
      {/* <Person name={"Corey"} age={100} />
      <Person name={"Jon"} age={100} />
      <Person name={"Jhenya"} age={100} /> */}
      <Clicker />
    </>
  );
};

export default App;
