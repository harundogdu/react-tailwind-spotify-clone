import React from "react";

const SongCard = ({ songs }) => {
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

  return (
    <div className="grid grid-cols-6 gap-6 overflow-y-hidden w-full h-full">
      {songs.map((song) => (
        <div
          key={song.id}
          className="bg-bgFooter flex-1 items-center justify-center rounded isolate p-4 relative w-full transition-colors
          cursor-pointer hover:bg-bgSettingsHover duration-300"
        >
          <div className="flex items-center justify-center mb-4">
            <div
              className={` bg-bgShadow w-songRem h-songRem object-cover shadow-2xl ${imageStyle(
                song
              )}`}
            >
              <img
                className={`w-full h-full object-cover ${imageStyle(song)}`}
                src={song.image}
                alt=""
              />
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
