import { Icon } from "assets/icons/Icon";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "redux/player/playerSlice";

const SongCard = ({ songs }) => {
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);

  const imageStyle = (item) => {
    switch (item.type) {
      case "album":
        return "rounded-xl";
      case "artist":
        return "rounded-full";
      case "playlist":
        return "rounded-lg";
      default:
        return "rounded";
    }
  };

  const updateCurrent = (item) => {
    if (current && current.id === item.id) {
      if (playing) {
        controls.pause();
      } else {
        controls.play();
      }
    } else {
      dispatch(setCurrent(item));
    }
  };

  return (
    <div className="grid grid-cols-6 gap-6 overflow-y-hidden w-full h-full">
      {songs.map((song) => (
        <div
          key={song.id}
          className="bg-bgFooter flex-1 items-center justify-center rounded isolate p-4 relative w-full transition-all
          cursor-pointer hover:bg-bgSettingsHover duration-300 group"
        >
          <div className="flex items-center justify-center mb-4">
            <div
              className={` bg-bgShadow w-songRem h-songRem object-cover shadow-2xl relative ${imageStyle(
                song
              )}`}
            >
              <img
                className={`w-full h-full object-cover ${imageStyle(song)}`}
                src={song.image}
                alt={song.title + "şarkısı"}
              />
              <button
                onClick={() => updateCurrent(song)}
                className={`${
                  current.id === song.id ? "flex" : "hidden"
                }  group-hover:flex bg-brandColor rounded-full p-2 transition-all absolute bottom-1 right-1`}
              >
                <Icon
                  name={`${
                    current.id === song.id && playing ? "pause" : "playerGreen"
                  }`}
                />
              </button>
            </div>
          </div>
          <div className="">
            <h3 className="font-bold tracking-normal line-clamp-1">
              {song.title}
            </h3>
            <span className="text-bgHorizontalCard mt-1 line-clamp-2 text-sm">
              {song.description}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongCard;
