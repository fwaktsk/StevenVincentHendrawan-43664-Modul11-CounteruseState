import React, { useState } from "react";

//useState with state[0]
/*function App() {
  const state = useState(123);

  console.log(state);
  console.log(state[0]);

  function increase() {
    // count++;
  }

  return (
    <div className="container">
      <h1>{state[0]}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}*/

//useState with Count
/*function App() {
  const [count] = useState(123);

  function increase() {
    // count++;
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}*/

//setState
/*function App() {
  const [count, setCount] = useState(123);

  function increase() {
    setCount(789);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}*/

//counterApp (termasuk tugas1)
function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}

export default App;
