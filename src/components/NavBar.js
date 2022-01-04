import React from "react";
import LeftNavBar from "components/NavBar/LeftNavBar";
import RightNavBar from "components/NavBar/RightNavBar";
import { useMatch } from "react-router-dom";

const Navbar = () => {
  const searchRoute = useMatch("/search");
  const collectionRoute = useMatch("/collection");

  return (
    <div className="flex items-center justify-between h-16  py-4 px-8">
      <div className="flex items-center justify-center gap-x-4">
        <LeftNavBar />
        {searchRoute && <div>Arama sayfası</div>}
        {collectionRoute && <div>Kitaplığın sayfası</div>}
      </div>
      <RightNavBar />
    </div>
  );
};

export default Navbar;
