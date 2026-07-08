import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Benefits from "./components/Benefits";

function App() {
  return (
    <div className=" p-3">
      <Header />
      <Hero />
      <Featured />
      <Benefits />
    </div>
  );
}

export default App;
