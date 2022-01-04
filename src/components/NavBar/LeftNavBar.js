import React from "react";
import { Icon } from "assets/icons/Icon";
import { useNavigate } from "react-router-dom";

const LeftNavBar = () => {
  let navigate = useNavigate();
  return (
    <div className="flex items-center justify-center gap-x-3">
      <button
        onClick={() => navigate(-1)}
        className="rounded-full bg-black p-1"
      >
        <Icon name="prev" />
      </button>
      <button
        onClick={() => navigate(+1)}
        className="rounded-full bg-black p-1"
      >
        <Icon name="next" />
      </button>
    </div>
  );
};

export default LeftNavBar;
