import React from "react";
import UpperSection from "components/Content/UpperSection";
import LowerSection from "components/Content/LowerSection";
const HomePage = () => {
  return (
    <div className="flex flex-col ">
      <div className="grid gap-6 pt-6 px-8 ">
        <UpperSection title={"İyi akşamlar"} />
        <LowerSection />
      </div>
    </div>
  );
};

export default HomePage;
