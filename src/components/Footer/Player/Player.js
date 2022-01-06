import React from "react";
import UpperPlayerArea from "./UpperPlayerArea";
import LowerPlayerArea from "./LowerPlayerArea";
import { Icon } from "assets/icons/Icon";
import { secondToTime } from "utils/utils";
import CustomRange from "./CustomRange";
import { useSelector } from "react-redux";
const Player = ({ audio, state }) => {
  const controls = useSelector((state) => state.player.controls);
  const handleClick = () => {
    if (state.playing) {
      controls.pause();
    } else {
      controls.play();
    }
  };
  return (
    <div className="min-w-[772px] w-[40%]">
      <div className="flex flex-col items-center justify-center">
        {/* upper */}
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
        {/* upper */}
        {/* lower */}
        <div className=" w-[600px] flex items-center justify-between gap-x-2">
          <div className="m-w-[40px] text-right text-[11px] tracking-widest">
            {secondToTime(state.time)}
          </div>
          <div className="h-2 w-full flex items-center justify-center">
            <CustomRange
              step={0.1}
              min={0}
              max={state?.duration || 1}
              value={state?.time}
              onChange={(value) => controls.seek(value)}
            />
          </div>
          <div className="m-w-[40px] text-left text-[11px] tracking-widest">
            {secondToTime(state?.duration)}
          </div>
        </div>
        {/* lower */}
      </div>
    </div>
  );
};

export default Player;
