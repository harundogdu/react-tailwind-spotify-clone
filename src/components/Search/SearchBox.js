import { Icon } from "assets/icons/Icon";
import React from "react";

const SearchBox = () => {
  return (
    <div className="ml-4 w-[23rem] h-10  flex items-center justify-center">
      <label htmlFor="search-box" className="w-full relative">
        <input
          type="text"
          placeholder="Sanatçılar, şarkılar veya podcast'ler"
          className="border-0 w-full rounded-full text-black h-10 py-[6px] px-12 text-sm outline-none"
          id="search-box"
        />
        <div className="absolute top-2 right-3 left-3">
          <Icon name="search" style={{ color: "black" }} size={24} />
        </div>
      </label>
    </div>
  );
};

export default SearchBox;
