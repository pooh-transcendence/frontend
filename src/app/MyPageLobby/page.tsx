import type { NextPage } from "next";

import MatchHistory from "./match/matchHistory";
import MyInfo from "./info/myInfo";

type MyPageFrameType = {
  onClose?: () => void;
};

const MyPageFrame: NextPage<MyPageFrameType> = ({ onClose }) => {
  return (
    <div className="relative w-[62.5rem] h-[40.63rem] text-left text-[1rem] text-dimgray font-inria-sans">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [background:linear-gradient(240.36deg,_#f5f5f5,_#fafbff)]">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
        <MatchHistory />
        <MyInfo />
      </div>
    </div>
  );
};

export default MyPageFrame;
