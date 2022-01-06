import React from "react";
import CustomRange from "components/Footer/Player/CustomRange";
import { Icon } from "assets/icons/Icon";

const RightFooter = ({ state, controls }) => {
  const handleVolumeClick = () => {
    if (state.muted) {
      controls.unmute();
    } else {
      controls.mute();
    }
  };

  const volumeIcon = React.useMemo(() => {
    if (state.volume === 0 || state.muted) {
      return "volumeMuted";
    } else if (state.volume > 0 && state.volume < 0.33) {
      return "volumeLow";
    } else if (state.volume >= 0.33 && state.volume < 0.66) {
      return "volumeNormal";
    }
    return "volumeFull";
  }, [state.volume, state.muted]);

  return (
    <div className="flex min-w-[180px] w-[30%] justify-end">
      <button className="h-8 w-8 flex items-center justify-center bg-transparent border-none">
        <Icon name="lyrics" size={16} />
      </button>
      <button className="h-8 w-8 flex items-center justify-center bg-transparent border-none">
        <Icon name="queue" size={16} />
      </button>
      <button className="h-8 w-8 flex items-center justify-center bg-transparent border-none">
        <Icon name="device" size={16} />
      </button>

      <div className="flex w-32 h-8 items-center justify-between gap-x-2">
        <button
          onClick={handleVolumeClick}
          className="h-8 w-8 flex items-center justify-center bg-transparent border-none"
        >
          <Icon name={volumeIcon} size={16} />
        </button>
        <CustomRange
          step={0.1}
          min={0}
          max={1}
          value={`${state.muted ? 0 : state?.volume}`}
          onChange={(value) => controls.volume(value)}
        />
      </div>

      <button className="h-8 w-8 flex items-center justify-center bg-transparent border-none">
        <Icon name="fullScreen" size={16} />
      </button>
    </div>
  );
};

export default RightFooter;
