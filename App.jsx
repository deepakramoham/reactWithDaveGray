import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const name = "Dave";

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>html</p>
      <p>{"Dave"}</p>
      <p>Dave</p>
      <p>"dave"</p>
      <p>{"1"}</p>
      <p>"1"</p>
      <p>1</p>
      <p>{[1, 2, 3]}</p>
      <p>[1,2,3]</p>
     { <p>"[1,2,3]"</p>}
      <p>{name}</p>
      <p>name</p>
      {/*<p> {{a:1,b:2}}</p> {Objects are not valid as a React child}*/}
      {/*<p>{2===4}</p> */}
      {/*we use curly braces to put javascript expressions in jsx. however we cannot render objects using curly braces. This would give error */}
      {/* we cannot  use curly braces to boolean also*/}
      <p>"shift+alt+a -- to comment"</p>
      {/*shift+alt+a - > to comment*/}
      <p></p>
    </>
  );
}

export default App;
