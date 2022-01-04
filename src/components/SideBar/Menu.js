import React from "react";
import Link from "components/SideBar/Link";

const Menu = () => {
  return (
    <nav className="mt-2">
      <ul>
        <li className="px-2">
          <Link isActive={true} text={"Ana sayfa"} icon={"home"} />
        </li>
        <li className="px-2">
          <Link text={"Ara"} icon={"search"} />
        </li>
        <li className="px-2">
          <Link text={"Kitaplığın"} icon={"collection"} />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
