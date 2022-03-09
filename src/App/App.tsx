import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
