/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Icon } from "assets/icons/Icon";

const Link = ({ isActive = false, link = "!#", icon = null, text }) => {
  return (
    <a
      href={link}
      className={`${
        isActive
          ? "h-10 px-4 transition-colors flex gap-4 items-center rounded bg-bgLink text-white group"
          : "h-10 px-4 transition-colors flex gap-4 items-center group text-bgText "
      }`}
    >
      <Icon name={icon} active={isActive} />
      <span className="text-sm font-bold tracking-normal group-hover:text-white ">
        {text}
      </span>
    </a>
  );
};

export default Link;
