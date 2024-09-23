import { useState } from "react";

import TipCalculator from "./components/tipcalculator";
// import Example from "./components/Layout";

function App() {
  return (
    <>
      <main className="flex flex-col items-center">
        <TipCalculator />
        {/* <Example /> */}
      </main>
    </>
  );
}

export default App;
