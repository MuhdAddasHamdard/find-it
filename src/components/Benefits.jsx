import React from "react";
import { benefits, imagePositions, imgTags, list } from "../../mock";
import { div } from "prelude-ls";

const Benefits = () => {
  return (
    <section className="mt-20 bg-[#F2F4F7] py-20">
      <div className="container mx-auto flex flex-col items-center gap-20 lg:flex-row">
        {/* Images */}
        <div className="relative h-175 w-full lg:h-150 lg:w-1/2">
          {benefits.map((benefit, index) => (
            <img
              key={benefit.id ?? index}
              src={benefit.img}
              alt={benefit.alt ?? `Benefit ${index + 1}`}
              className={`absolute rounded-xl object-cover shadow-lg transition duration-300 hover:scale-105 ${imagePositions[index]}   `}
            />
          ))}

          <div className="h-200">
            {imgTags.map((tag) => {
              const Icon = tag.icon;
              return (
                <div
                  className={`z-50 relative w-50
                     ${tag.id === 0 ? "top-0 left-54" : ""}
                      ${tag.id === 1 ? "top-30 left-0" : ""}
                       ${tag.id === 2 ? "left-100 top-50" : ""}
                       ${tag.id === 3 ? "top-70 w-75" : ""}
                       ${tag.id === 4 ? "top-110 left-50" : ""}
                       
                       flex gap-4 items-center bg-[#FFFFFF] rounded-full p-3 `}
                  key={tag.id}
                >
                  <Icon />
                  <p>{tag.tag}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="w-full space-y-10 lg:w-1/2">
          <div className="space-y-5">
            <span className="text-sm font-medium uppercase tracking-widest text-gray-500">
              Our Benefits
            </span>

            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Building dreams, one home at a time
            </h2>

            <p className="leading-8 text-gray-600">
              Our mission goes beyond real estate—it’s about guiding you through
              one of life's biggest milestones with heart, expertise, and
              unwavering commitment.
            </p>
          </div>

          <ul className="space-y-5">
            {list.map((item, index) => (
              <li
                key={item.id ?? index}
                className="rounded-lg bg-white p-6 shadow-sm transition duration-300 hover:shadow-lg"
              >
                <h4 className="mb-2 text-2xl font-semibold">{item.title}</h4>

                <p className="list-[decimal-leading-zero] text-gray-600">
                  {item.desc}
                </p>
              </li>
            ))}
          </ul>

          <button className="rounded-full bg-black px-6 py-3 text-white transition duration-300 hover:bg-gray-800">
            More About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
