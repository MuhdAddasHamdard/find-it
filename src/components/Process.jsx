import React from "react";
import { processes } from "../../mock";

const Process = () => {
  return (
    <div className="mt-20">
      <div className=' contanier mx-auto ps-5 py-12 bg-cover bg-center bg-no-repeat bg-[url("https://framerusercontent.com/images/zXIXkuZZJUSwdBhaihJHq7JZjw.jpg?scale-down-to=2048&width=4000&height=3126")]'>
        <div className="bg-[#FFFFFF] p-6  rounded-2xl w-[90%] sm:w-[20rem] lg:w-xl">
          {/* header of the card */}
          <div className=" ">
            <span className="uppercase">our process</span>
            <h3 className="text-3xl font-semibold">
              Simple steps to your dream home
            </h3>
            <p>
              We make buying, selling, or investing in property effortless.
              Here’s how we guide you every step of the way.
            </p>
          </div>
          {processes.map((process) => {
            return (
              <div className="flex  flex-col gap-3 mt-9" key={process.id}>
                <div className="flex items-center gap-9 text-2xl">
                  <span>{process.num}</span>
                  <h3>{process.title}</h3>
                </div>
                <p
                  className={`ps-13 ms-3 ${
                    process.id !== 2 ? "border-l-2 border-l-[#E5E5E5]" : ""
                  }`}
                >
                  {process.desc}
                </p>
              </div>
            );
          })}
          <button className="bg-black rounded-full p-3 text-white mt-12">
            Start your journey
          </button>
        </div>
      </div>
    </div>
  );
};

export default Process;
