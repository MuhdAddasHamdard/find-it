import React, { useRef, useState } from "react";

const HeroLogic = () => {
  const video = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  console.log(video);

  const handleVideo = () => {
    video.current.play();
    setIsPlaying(true);
  };
  const handlePause = () => {
    video.current.pause();
    setIsPlaying(false);
  };
  return { video, isPlaying, handleVideo, handlePause };
};

export default HeroLogic;
