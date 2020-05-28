import React, { useState } from "react";

function App() {
  const [val, setVal] = useState("");
  const inputRef = React.useRef(0);

  const showInputValue = () => {
    console.log(inputRef.current.value);
  };

  React.useEffect(() => {
    console.log("component updated", new Date().toDateString());
    console.log(val);

    // inputRef.current++;
  });

  return (
    <div className="App">
      <h1>UseRef hook #Buggged</h1>
      <input
        type="text"
        placeholder="Type something"
        onChange={(e) => setVal(e.target.value)}
        ref={inputRef}
      />
      <br /> <br />
      <button onClick={showInputValue}>Log The Text Field</button>
    </div>
  );
}

export default App;
