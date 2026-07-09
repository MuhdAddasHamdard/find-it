import { useState } from "react";
import "./App.css";
import {
  Header,
  Hero,
  Featured,
  Benefits,
  Locations,
  Process,
} from "./components";

function App() {
  return (
    <div className=" p-3">
      <Header />
      <Hero />
      <Featured />
      <Benefits />
      <Locations />
      <Process />
    </div>
  );
}

export default App;
