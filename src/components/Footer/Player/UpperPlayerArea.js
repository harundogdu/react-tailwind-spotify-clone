import React from "react";
import { Icon } from "assets/icons/Icon";
import { useSelector } from "react-redux";

const UpperPlayerArea = ({ audio, state}) => {
  const controls = useSelector((state) => state.player.controls);

  const handleClick = () => {
    if (state.playing) {
      controls.pause();
    } else {
      controls.play();
    }
  };
  return (
    <div className="flex flex-nowrap w-full mb-3 gap-2">
      <div className="flex flex-1 gap-2 justify-end">
        <button className="h-8 w-8 flex items-center justify-center bg-transparent border-none">
          <Icon name="shuffle" size={16} />
        </button>
        <button className="h-8 w-8 flex items-center justify-center bg-transparent border-none">
          <Icon name="playerPrev" size={16} />
        </button>
      </div>
      {audio}
      <button
        onClick={handleClick}
        className="h-8 w-8 flex items-center justify-center border-none text-black rounded-full transition-all bg-white hover:scale-105"
        title={state.playing ? "Duraklat" : "Çal"}
      >
        <Icon name={`${state.playing ? "pause" : "play"}`} size={16} />
      </button>

      <div className="flex flex-1 gap-2">
        <button className="h-8 w-8 flex items-center justify-center bg-transparent border-none">
          <Icon name="playerNext" size={16} />
        </button>
        <button className="h-8 w-8 flex items-center justify-center bg-transparent border-none">
          <Icon name="repeat" size={16} />
        </button>
      </div>
    </div>
  );
};

export default UpperPlayerArea;
