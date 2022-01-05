import React from "react";
import songsData from "assets/data/songs.json";
import HorizontalCard from "components/Content/HorizontalCard";
import { randomArrayShuffle } from "utils/utils";

const UpperSection = ({ title }) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setItems(randomArrayShuffle(songsData,true));
  }, []);

  return (
    <div>
      <h2 className="text-white inline-block max-w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-3xl font-bold tracking-tighter mb-4">
        {title}
      </h2>
      <HorizontalCard items={items} />
    </div>
  );
};

export default UpperSection;
