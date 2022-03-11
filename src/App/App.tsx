//& Utility
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";

//& Page Elements/Components
import Cursor from "./Components/CursorFollower/CursorFollower";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
 

  return (
    <BrowserRouter>
      <Header />
      <Cursor />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
