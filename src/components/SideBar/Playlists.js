import React from "react";

const Playlists = () => {
  return (
    <div className="py-2  h-80 w-full overflow-y-scroll">
      <ul className="grid gap-y-0.5 ">
        {new Array(40).fill(0).map((_, index) => (
          <li className="flex items-center py-1 px-2 " key={index}>
            <a
              href="!#"
              className="px-4 text-sm block font-normal text-bgText hover:text-white transition-colors"
            >
              {++index}. Çalma Listem
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlists;
