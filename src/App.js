import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
