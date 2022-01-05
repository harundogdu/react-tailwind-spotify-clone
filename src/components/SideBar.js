import React from "react";
import Menu from "components/SideBar/Menu";
import Logo from "components/SideBar/Logo";
import SecondMenu from "components/SideBar/SecondMenu";
import Playlists from "components/SideBar/Playlists";
import DownloadApp from "components/SideBar/DownloadApp";
import Divide from "components/SideBar/Divide";

const SideBar = () => {
  return (
    <div className="w-60 flex flex-col h-fullSizeForSideBar flex-shrink-0 bg-black pt-6 fixed left-0 top-0 z-10">
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
