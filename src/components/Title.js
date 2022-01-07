import React from "react";

const Title = ({ title, href = null, size = "md" }) => {
  return (
    <h2
      className={`text-white inline-block max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap  font-bold tracking-tighter mb-0 text-${size}`}
    >
      {title}
    </h2>
  );
};

export default Title;
