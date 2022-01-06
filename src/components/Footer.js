import React from "react";
import LeftFooter from "components/Footer/LeftFooter";
import RightFooter from "components/Footer/RightFooter";
import Player from "./Footer/Player/Player";
import { useAudio } from "react-use";

const Footer = () => {
  const [audio, state, controls, ref] = useAudio({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    autoPlay: false,
  });
  console.log(state);
  return (
    <div className="w-full h-24 flex flex-shrink-0 bg-bgFooter  fixed bottom-0 left-0 z-20">
      <footer className="bg-bgFooter h-auto flex flex-cols border-t border-bgLink min-w-[620px] w-full">
        <div className="flex items-center justify-between px-4 w-full">
          <LeftFooter />
          <Player audio={audio} state={state} controls={controls} />
          <RightFooter state={state} controls={controls} />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
