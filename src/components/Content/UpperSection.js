import React from "react";
import songsData from "assets/data/songs.json";
import HorizontalCard from "components/Content/HorizontalCard";
import { randomArrayShuffle } from "utils/utils";
import Title from "components/Title";

const UpperSection = ({ title }) => {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    setItems(randomArrayShuffle(songsData, true));
  }, []);

  return (
    <div>
      <Title title={title} size="3xl" />
      <HorizontalCard items={items} />
    </div>
  );
};

export default UpperSection;
