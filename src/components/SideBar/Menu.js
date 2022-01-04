import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Icon } from "assets/icons/Icon";

const Menu = () => {
  const [activeLink, setActiveLink] = React.useState("");
  let location = useLocation();
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav className="mt-2">
      <ul>
        <li className="px-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "h-10 px-4 transition-colors flex gap-4 items-center rounded bg-bgLink text-white group"
                : "h-10 px-4 transition-colors flex gap-4 items-center group text-bgText "
            }
          >
            <Icon name={"home"} active={activeLink === "/"} />
            <span className="text-sm font-bold tracking-normal group-hover:text-white ">
              Ana sayfa
            </span>
          </NavLink>
        </li>
        <li className="px-2">
          <NavLink
            to="/search"
            className={({ isActive }) =>
              isActive
                ? "h-10 px-4 transition-colors flex gap-4 items-center rounded bg-bgLink text-white group"
                : "h-10 px-4 transition-colors flex gap-4 items-center group text-bgText "
            }
          >
            <Icon name={"search"} active={activeLink === "/search"} />
            <span className="text-sm font-bold tracking-normal group-hover:text-white">
              Ara
            </span>
          </NavLink>
        </li>
        <li className="px-2">
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
                ? "h-10 px-4 transition-colors flex gap-4 items-center rounded bg-bgLink text-white group"
                : "h-10 px-4 transition-colors flex gap-4 items-center group text-bgText "
            }
          >
            <Icon name={"collection"} active={activeLink === "/collection"} />
            <span className="text-sm font-bold tracking-normal group-hover:text-white">
              Kitaplığın
            </span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
