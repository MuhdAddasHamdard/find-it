import React from "react";
import { featured } from "./../../mock";

const Featured = () => {
  return (
    <div>
      <section>
        <header className=" container mx-auto p-4 flex-col mb-12 lg:flex-row lg:justify-between lg:items-center">
          <div className="flex  flex-col lg:flex-row lg:justify-between lg:items-center">
            <div>
              <span className="uppercase text-2xl lg:text-lg">
                {" "}
                featured properties{" "}
              </span>
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

        <div className="container mx-auto flex flex-col gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
          {featured.map((card, index) => {
            return (
              <div
                key={index}
                className={`relative bg-[#F2F4F7]  rounded-3xl ${index === 0 ? "md:col-span-2" : ""} `}
              >
                <img
                  className={`rounded-2xl w-full ${index === 1 ? "lg:h-[77%]" : ""}`}
                  src={card.img}
                  alt=""
                />
                <div className={` ${index === 1 ? "p-5" : "p-10"}`}>
                  <h3
                    className={`font-semibold text-2xl ${index === 1 ? "mt-1" : ""}`}
                  >
                    {card.title}
                  </h3>
                  <p>{card.address}</p>
                </div>
                <div className="absolute top-5 left-5 flex justify-between gap-3">
                  {card.tags.map((tag, index) => {
                    return (
                      <span
                        key={index}
                        className={
                          index === 0
                            ? `bg-black  rounded-full px-3 py-1 text-white `
                            : "bg-white  rounded-full px-3 py-1  "
                        }
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Featured;
