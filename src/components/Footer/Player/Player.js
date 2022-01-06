import React from "react";
import UpperPlayerArea from "./UpperPlayerArea";
import LowerPlayerArea from "./LowerPlayerArea";
const Player = ({ audio, state, controls }) => {
  return (
    <div className="min-w-[772px] w-[40%]">
      <div className="flex flex-col items-center justify-center">
        <UpperPlayerArea audio={audio} state={state} controls={controls} />
        <LowerPlayerArea state={state} controls={controls} />
      </div>
    </div>
  );
};

export default Player;
