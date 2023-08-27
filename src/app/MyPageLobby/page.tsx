import type { NextPage } from "next";

import MatchHistory from "./match/matchHistory";
import MyInfo from "./info/myInfo";

type MyPageFrameType = {
  onClose?: () => void;
};

const MyPageFrame: NextPage<MyPageFrameType> = ({ onClose }) => {
  return (
    <div className="z-30 absolute w-[62.5rem] h-[40.63rem] text-left text-[1rem] text-dimgray font-inria-sans">
      <div className="h-[40.63rem] w-[62.5rem] rounded-3xs [background:linear-gradient(240.36deg,_#f5f5f5,_#fafbff)]">
        <div className="h-[40.63rem] w-[62.5rem] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
        <MatchHistory />
        <MyInfo />
      </div>
    </div>
  );
};

export default MyPageFrame;
