import React from "react";
import { Icon } from "assets/icons/Icon";
const DownloadApp = () => {
  return (
    <div className="flex items-center px-2 h-10 group transition-colors">
      <a href="!#" className="h-10 px-4 cursor-pointer flex items-center">
        <Icon name={"downloadApp"} size={20} />
        <span className="ml-5 text-sm font-bold text-bgText group-hover:text-white">
          Uygulamayı Yükle
        </span>
      </a>
    </div>
  );
};

export default DownloadApp;
