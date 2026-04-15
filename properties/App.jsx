import React from "react";
import Heading from "./Heading";
import List from "./List";

function App(prop) {
  return (
    <div>
      <h1>{prop.status}</h1>
      <Heading />
      <List />
      <List />
    </div>
  );
}

export default App;

// export {exp1,exp2}; name should be same in import file. not like default file
