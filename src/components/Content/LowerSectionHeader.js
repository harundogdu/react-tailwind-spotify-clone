import React from "react";

const LowerSectionHeader = ({ title }) => {
  return (
    <div className="w-full h-14 flex items-center justify-between">
      <h2 className="text-2xl font-bold tracking-tighter hover:underline transition-all">
        <a
          href="!#"
          className="text-white inline-block w-full overflow-hidden overflow-ellipsis whitespace-nowrap"
        >
          {title}
        </a>
      </h2>
      <a href="!#" className=" ml-2 text-bgText">
        <span className="text-xs font-bold uppercase tracking-widest">
          Hepsini Gör
        </span>
      </a>
    </div>
  );
};

export default LowerSectionHeader;
