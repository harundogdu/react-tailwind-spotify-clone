import React from "react";
import LowerSectionHeader from "components/Content/LowerSectionHeader";
import SongCard from "components/Content//SongCard";
const LowerSectionContent = ({ songs, title }) => {  
  return (
    <>
      <LowerSectionHeader title={title} />
      <SongCard songs={songs} />
    </>
  );
};

export default LowerSectionContent;
