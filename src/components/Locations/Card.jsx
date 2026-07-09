import React from "react";
import { locations } from "../../../mock";

const Card = () => {
  return (
    <div>
      <div className="mt-10">
        <div className={`flex flex-col gap-10 lg:grid lg:grid-cols-3`}>
          {locations.slice(0, 3).map((location) => {
            return (
              <div className={` font-semibold  rounded-2xl`} key={location.id}>
                <img
                  className="rounded-2xl w-full"
                  src={location.img}
                  alt={location.title}
                />
                <div className="mt-4 flex flex-col gap-6">
                  <h3 className="text-2xl">{location.title}</h3>
                  <h4 className="text-[#333333]">{location.subTitle}</h4>
                </div>
              </div>
            );  
          })}
        </div>
        <div className="grid lg:grid-cols-2 gap-10">
          {locations.slice(3).map((location) => {
            return (
              <div className={` font-semibold  rounded-2xl`} key={location.id}>
                <img
                  className="rounded-2xl w-full "
                  src={location.img}
                  alt={location.title}
                />
                <div className="mt-4 flex flex-col gap-6">
                  <h3 className="text-2xl">{location.title}</h3>
                  <h4 className="text-[#333333]">{location.subTitle}</h4>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
