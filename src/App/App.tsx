//& Utility
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";

//& Page Elements/Components
import Cursor from "./Components/CursorFollower/CursorFollower";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  const [x, setX] = useState();
  const [y, setY] = useState();

  useEffect(() => {
    const update = (e: any) => {
      setX(e.x);
      setY(e.y);
    };
    window.addEventListener("mousemove", update);
    window.addEventListener("touchmove", update);
    return () => {
      window.removeEventListener("mousemove", update);
      window.removeEventListener("touchmove", update);
    };
  }, [setX, setY]);

  return (
    <BrowserRouter>
      <Header />
      <Cursor posX={x} posY={y} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
