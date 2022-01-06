import React from "react";
import CustomRange from "components/Footer/Player/CustomRange";
import { secondToTime } from "utils/utils";

const LowerPlayerArea = ({ state, controls }) => {
  return (
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
  );
};

export default LowerPlayerArea;
