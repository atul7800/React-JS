import React from "react";
import { RefCreateContext } from "../App";

function ComponentA() {
  return (
    <>
      <RefCreateContext.Consumer>
        {(name) => {
          return (
            <>
              <h1>Hi {name} from Component A</h1>;
            </>
          );
        }}
      </RefCreateContext.Consumer>
    </>
  );
}

export default ComponentA;
