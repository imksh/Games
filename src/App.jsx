import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import {Toaster} from "react-hot-toast"
import Ludo from './pages/Ludo';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ludo" element={<Ludo />} />
    </Routes>
    <Toaster />
    </>
  );
};

export default App;
