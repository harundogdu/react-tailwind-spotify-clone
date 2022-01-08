/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useAudio } from "react-use";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying } from "redux/player/playerSlice";
import { Icon } from "assets/icons/Icon";
import { secondToTime } from "utils/utils";
import CustomRange from "./Footer/Player/CustomRange";

const Footer = () => {
  const dispatch = useDispatch();
  const { current } = useSelector((state) => state.player);
  const [heartIcon, setHeartIcon] = React.useState("heart");

  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
    autoPlay: false,
  });

  const handleHeartClick = () => {
    setHeartIcon(heartIcon === "heart" ? "heartFilled" : "heart");
  };

  useEffect(() => {
    controls.play();
    setHeartIcon("heart");
  }, [current]);

  useEffect(() => {
    dispatch(setPlaying(state.playing));
    dispatch(setControls(controls));
  }, [state.playing]);

 /*  useEffect(() => {
    dispatch(setControls(controls));
  }, []); */

  const handleClick = () => {
    if (state.playing) {
      controls.pause();
    } else {
      controls.play();
    }
  };

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
    <div className="w-full h-24 flex flex-shrink-0 bg-bgFooter  fixed bottom-0 left-0 z-20">
      <footer className="bg-bgFooter h-auto flex flex-cols border-t border-bgLink min-w-[620px] w-full">
        <div className="flex items-center justify-between px-4 w-full">
          {/* lf */}
          <div className="min-w-[180px] w-[30%] h-14">
            {current && (
              <div className="flex items-center gap-x-4">
                <div className="w-14 h-14 ">
                  <img
                    className="w-full h-full"
                    src={current?.image}
                    alt={current?.title}
                  />
                </div>
                <div className="flex flex-col ">
                  <h6 className="text-sm font-bold">{current.title}</h6>
                  <span className="text-xs text-bgText">{current.artist}</span>
                </div>
                <div className="flex justify-between items-center gap-x-3 ">
                  <button
                    onClick={handleHeartClick}
                    className={heartIcon === "heart" ? "" : "text-brandColor"}
                  >
                    <Icon name={heartIcon} size={16} />
                  </button>
                  <button>
                    <Icon name="pictureInPicture" size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* lf */}

          {/* player */}
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
                  <Icon name={state.playing ? "pause" : "play"} size={16} />
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
          {/* player */}

          {/* rf */}
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
          {/* rf */}
        </div>
      </footer>
    </div>
  );
};

export default Footer;
