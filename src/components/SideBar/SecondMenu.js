import React from "react";
import CustomButton from "components/SideBar/CustomButton";
const SecondMenu = () => {
  return (
    <div className="flex flex-col min-h-0 mt-6">
      <CustomButton text={"Çalma Listesi Oluştur"} />
      <CustomButton text={"Beğendiğin Şarkılar"} icon="like" />
    </div>
  );
};

export default SecondMenu;
