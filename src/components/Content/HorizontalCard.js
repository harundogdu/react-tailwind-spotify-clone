import React from "react";
import { Icon } from "assets/icons/Icon";

const HorizontalCard = ({ items }) => {
  return (
    <div className="grid grid-cols-4 gap-x-5 gap-y-4">
      {items.map((item, index) => (
        <div
          key={item.id}
          className="h-20 flex items-center justify-center rounded bg-bgGradient w-full hover:bg-bgHorizontalCard cursor-pointer group transition-all"
        >
          <div className="w-20 h-20">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-tl-lg rounded-bl-lg w-20 h-20 object-cover"
            />
          </div>
          <div className="p-4 flex flex-1 items-center justify-between text-white">
            <p className="font-bold overflow-hidden overflow-ellipsis ">
              {item.title}
            </p>
            <button className="hidden group-hover:flex bg-brandColor rounded-full p-2">
                <Icon name="playerGreen" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HorizontalCard;
