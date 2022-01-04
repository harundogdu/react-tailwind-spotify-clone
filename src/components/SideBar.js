import React from "react";
import Menu from "components/SideBar/Menu";
import Logo from "components/SideBar/Logo";
import SecondMenu from "components/SideBar/SecondMenu";
import Playlists from "components/SideBar/Playlists";
import DownloadApp from "components/SideBar/DownloadApp";
import Divide from "components/SideBar/Divide";

const SideBar = () => {
  return (
    <div className="w-60 flex flex-col flex-shrink-0 bg-black pt-6 min-h-fullSizeForSideBar">
      <Logo />
      <Menu />
      <SecondMenu />
      <Divide />
      <Playlists />
      <DownloadApp />      
    </div>
  );
};

export default SideBar;
