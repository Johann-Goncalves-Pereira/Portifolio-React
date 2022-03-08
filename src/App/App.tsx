import { useState } from "react";
import logo from "./logo.svg";
import style from "./App.module.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className={style.App}>
      <header className={style.App__header}>
        <img src={logo} className={style.App__logo} alt="logo" />
        <p>Vite + React + PostCss + Sass + Open Props!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className={style.App__link}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className={style.App__link}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
