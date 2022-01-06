import React from "react";
import { Icon } from "assets/icons/Icon";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "redux/player/playerSlice";

const HorizontalCard = ({ items }) => {
  const dispatch = useDispatch();
  const { current, playing, controls } = useSelector((state) => state.player);

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
    <div className="grid grid-cols-4 gap-x-5 gap-y-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="h-20 flex items-center justify-center rounded rounded-tl-lg rounded-bl-lg bg-bgGradient w-full hover:bg-bgHorizontalCard cursor-pointer group transition-all"
        >
          <div className="w-20 h-20">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-tl-lg rounded-bl-lg w-20 h-20 object-cover"
            />
          </div>
          <div className="p-4 flex flex-1 items-center justify-between text-white">
            <p className="font-bold overflow-hidden overflow-ellipsis w-32">
              {item.title}
            </p>
            <button
              onClick={() => updateCurrent(item)}
              className={`${
                current.id === item.id ? "flex" : "hidden"
              }  group-hover:flex bg-brandColor rounded-full p-2`}
            >
              <Icon
                name={`${current.id === item.id && playing ? "pause" : "playerGreen"}`}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCard;
