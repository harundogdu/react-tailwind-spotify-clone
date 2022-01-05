import React from "react";
import songData from "assets/data/songs.json";
import LowerSectionContent from "components/Content/LowerSectionContent";
import { randomArrayShuffle } from "utils/utils";

const LowerSection = () => {
  const [songs, setSongs] = React.useState([]);
  React.useEffect(() => {
    setSongs(randomArrayShuffle(songData, true));
  }, []);
  return (
    <div className="min-h-[300px] w-full flex flex-col items-center gap-y-4">
      <LowerSectionContent
        title={"Hoşuna gidebilecek programlar"}
        songs={songs}
      />
      <LowerSectionContent title={"Harun için derlendi"} songs={songs} />
      <LowerSectionContent title={"Yakında çalınanlar"} songs={songs} />
    </div>
  );
};

export default LowerSection;
