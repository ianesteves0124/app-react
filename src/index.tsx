import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./mainpages/Home";
import About from "./mainpages/About";
import TC from "./mainpages/TC";
import Contact from "./mainpages/Contact";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <NavigationBar />
    <Routes>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="tc" element={<TC />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
