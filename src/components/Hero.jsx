import React, { useRef, useState } from "react";
import { CiStar } from "react-icons/ci";

const Hero = () => {
  const video = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideo = () => {
    video.current.play();
    setIsPlaying(true);
  };
  const handlePause = () => {
    video.current.pause();
    setIsPlaying(false);
  };
  return (
    <div>
      <section>
        <header className="text-center container mx-auto">
          <div className="flex mt-28  items-center justify-center ">
            <CiStar className="h-5 break-before-left bg-black rounded-full w-5 text-4xl text-white" />{" "}
            <span className="p-1 bg-slate-100  rounded-full">
              Your trusted partner in real estate
            </span>
          </div>

          <h1 className="text-3xl lg:text-7xl mt-4 font-semibold">
            Your dream home,
            <br />
            just a step away
          </h1>

          <p className="m-4">
            Discover handpicked properties that match your lifestyle, whether
            you're buying, selling, or investing.
          </p>
        </header>
        <div className="relative p-8 container mx-auto">
          <video
            ref={video}
            className="rounded-2xl mt-16 cursor-pointer"
            src="https://framerusercontent.com/assets/RKRfBg4NDpw33ha8GkP2aF67W0.mp4"
            loop
            preload="metadata"
            poster="https://framerusercontent.com/images/dVozVGlwKlZNt29agfYgRbavVPc.png?width=2560&height=1440"
            onClick={handlePause} // click video to pause
          />

          {!isPlaying && (
            <svg
              onClick={handleVideo}
              className=" cursor-pointer top-1/2  left-1/2 absolute -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#5D696D] rounded-full p-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
              fill="white"
            >
              <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z" />
            </svg>
          )}
        </div>
      </section>
    </div>
  );
};

export default Hero;
