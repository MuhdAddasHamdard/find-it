import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
}

export default App;
