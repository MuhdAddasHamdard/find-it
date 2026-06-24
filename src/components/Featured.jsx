import React from "react";

const Featured = () => {
  return (
    <div>
      <section>
        <header className=" container p-4 flex-col lg:flex-row lg:justify-between lg:items-center">
          <div className="flex  flex-col lg:flex-row lg:justify-between">
            <div>
              <span className="uppercase text-2xl"> featured properties </span>
              <h2 className="text-4xl font-semibold">
                Explore our featured listings
              </h2>
            </div>
            <div>
              <p className="mt-9  text-2xl">
                From modern city apartments to spacious family <br /> homes,
                find the one that feels just right.
              </p>
            </div>
          </div>
        </header>
      </section>
    </div>
  );
};

export default Featured;
