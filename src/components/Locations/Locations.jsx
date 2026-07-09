import React from "react";
import { locations } from "../../../mock";
import Card from "./Card";

const Locations = () => {
  return (
    <div>
      <section className="container mx-auto">
        <header className="flex text-center flex-col gap-3.5 items-center justify-center">
          <span className="uppercase">Explore Cities</span>
          <h1 className="text-3xl font-semibold">Our location for you</h1>
          <p>
            Each neighborhood has its own story. Discover the areas that match
            your lifestyle — whether you seek vibrant city energy, peaceful
            family communities, or exclusive luxury living.
          </p>
        </header>
        <div>
          <Card />
        </div>
      </section>
    </div>
  );
};

export default Locations;
