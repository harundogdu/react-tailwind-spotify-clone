import React from "react";
import UpperSection from "components/Content/UpperSection";
const HomePage = () => {
  return (
    <div className="flex flex-col bg-transparent ">
      <div className="grid gap-6 pt-6 px-8">
        <UpperSection title={"İyi akşamlar"} />
      </div>
    </div>
  );
};

export default HomePage;
