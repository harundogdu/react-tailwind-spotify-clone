/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Menu } from "@headlessui/react";
import { Icon } from "assets/icons/Icon";

const RightNavBar = () => {
  const items = [
    {
      id: 1,
      name: "Hesap",
      icon: true,
    },
    {
      id: 2,
      name: "Profil",
      icon: false,
    },
    {
      id: 3,
      name: "Oturumu Kapat",
      icon: false,
    },
  ];
  return (
    <Menu as={"div"} className={"relative"}>
      <Menu.Button
        className={
          "flex items-center justify-between gap-x-2 pr-3 bg-bgSideBar border-2 border-bgGradient p-1 rounded-2xl"
        }
      >
        <img
          src="https://avatars.githubusercontent.com/u/43449361?v=4"
          alt="Logo Image"
          className="w-6 h-6 rounded-full"
        />
        <span className="text-sm font-semibold">Harun</span>
        <Icon name="more" size={14} />
      </Menu.Button>
      <Menu.Items className="absolute top-full right-0 w-48 bg-bgLink rounded translate-y-2">
        {items.map((item) => (
          <Menu.Item key={item.id}>
            {({ active }) => (
              <a
                className={`h-10 flex items-center justify-between px-2 text-sm rounded ${
                  active && "bg-bgSettingsHover"
                }`}
                href="!#"
              >
                {item.name}
                {item.icon && <Icon name="account" size={16} />}
              </a>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default RightNavBar;
