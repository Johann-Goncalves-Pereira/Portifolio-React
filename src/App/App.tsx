//& Utility
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState, Fragment } from "react";

//& Page Elements/Components
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Cursor from "./Components/Cursor/Cursor";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Cursor />
    </BrowserRouter>
  );
}

export default App;
