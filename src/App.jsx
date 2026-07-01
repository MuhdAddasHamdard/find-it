import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Featured from "./components/Featured";

function App() {
  return (
    <div className="container mx-auto p-3">
      <Header />
      <Hero />
      <Featured />
    </div>
  );
}

export default App;
