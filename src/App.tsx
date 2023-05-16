import React, { useState } from "react";
import { Button } from "./components/Button/Button";
import { Link } from "./components/Link/Link";
import { Input } from "./components/Input/Input";

function App() {
  const [disabled, setDisabled] = useState<boolean>(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "20px 20px",
          alignItems: "center",
          padding: "20px",
        }}
      >
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
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px 20px",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Link href="https://www.google.com/">Ссылка на google</Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "20px 4px",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Input onInput={(e) => console.log(e.target.value)}></Input>
        <Button>Button with input</Button>
      </div>
    </>
  );
}

export default App;
