import React, { useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function App() {
  const [count, setCount] = React.useState(0);
  const [coin, setCoin] = React.useState(50);

  const increaseCount = useCallback((n) => {
    setCount((c) => c + n);
  }, []);

  const increaseCoins = useCallback((n) => {
    setCoin((pc) => pc + n);
  }, []);

  return (
    <div className="App">
      <Title text="useCallback Hook" />

      <Count text="Count: " value={count} />
      <Button forWhat="Count" onClick={increaseCount} n={5} />

      <Count text="Coins: " value={coin} />
      <Button forWhat="Coins" onClick={increaseCoins} n={1} />
    </div>
  );
}

export default App;
