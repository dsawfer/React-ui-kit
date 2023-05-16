import React, { useState } from "react";
import { Button } from "./components/Button/Button";

function App() {
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <>
      <Button
        onClick={() => {
          console.log("Button works!");
        }}
        disabled={disabled}
      >
        Button
      </Button>
      <Button
        onClick={() => {
          console.log("Toggle button works!");
          setDisabled(!disabled);
        }}
      >
        Toggle first button
      </Button>
    </>
  );
}

export default App;
