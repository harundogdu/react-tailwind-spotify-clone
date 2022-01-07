import React from "react";
import LeftNavBar from "components/NavBar/LeftNavBar";
import RightNavBar from "components/NavBar/RightNavBar";
import { useMatch } from "react-router-dom";
import SearchBox from "components/Search/SearchBox";

const Navbar = () => {
  const searchRoute = useMatch("/search");
  const collectionRoute = useMatch("/collection");
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
  }, [scrollY]);

  return (
    <div
      className={`flex items-center justify-between h-16 py-4 px-8 w-full z-30 sticky top-0 transition-colors border-white border-b border-opacity-0 ${
        scrollY > 0 ? " bg-bgNavbarActive border-opacity-10" : ""
      } `}
    >
      <div className="flex items-center justify-center gap-x-4">
        <LeftNavBar />
        {searchRoute && <SearchBox />}
        {collectionRoute && <div>Kitaplığın sayfası</div>}
      </div>
      <RightNavBar />
    </div>
  );
};

export default Navbar;
