import { Icon } from "assets/icons/Icon";
import React from "react";
import { useSelector } from "react-redux";

const LeftFooter = () => {
  const current = useSelector((state) => state.player.current);


  return (
    <div className="min-w-[180px] w-[30%] h-14">
       {/* {current && (
        <div className="flex items-center justify-between">
          <div className="w-14 h-14">
            <img
              className="w-full h-full"
              src={"current?.image"}
              alt={"current?.title"}
            />
          </div>
          <div className="flex justify-between items-center">
            <button>
              <Icon name="heart" />
            </button>
            <button>
              <Icon name="pictureInPicture" />
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default LeftFooter;
