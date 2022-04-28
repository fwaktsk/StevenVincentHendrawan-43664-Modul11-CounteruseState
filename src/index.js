import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

//not working
//var count = 0;
/*function increase() {
  console.log(++count);
} */

//Working, without useState
//var count = 0;
/*function increase() {
  console.log(++count);
  root.render(
    <div className="container">
      <h1>{count}</h1>
      <button onClick={increase}>+</button>
    </div>
  );
}

root.render(
  <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
  </div>
);*/

root.render(<App />);
