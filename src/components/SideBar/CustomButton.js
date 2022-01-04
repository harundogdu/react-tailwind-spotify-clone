import React from "react";
import Link from "components/SideBar/Link";

const CustomButton = ({text, icon = "default"}) => {
  return (
    <button className="flex items-center bg-transparent text-white cursor-pointer border-none min-h-max opacity-70 w-full transition-opacity py-2 px-2 h-10">
      <Link text={text} icon={icon} />
    </button>
  );
};

export default CustomButton;
