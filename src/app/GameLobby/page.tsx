'use client';

import type { NextPage } from "next";
import { useState, useCallback } from "react";
import MyPageFrame from "@/components/my-page-frame";
import PortalPopup from "@/components/portal-popup";
import LeftSideButton from "./button/leftSideButton";

import MyInfoFrame from "./frame/myInfoFrame";
import ChatFrame from "./frame/chatFrame";

const GameLobby: NextPage = () => {
  const [isMyPageFrameOpen, setMyPageFrameOpen] = useState(false);

  const onSideButton21Click = useCallback(() => {
    // Please sync "channelLobby" to the project
  }, []);

  const openMyPageFrame = useCallback(() => {
    setMyPageFrameOpen(true);
  }, []);

  const closeMyPageFrame = useCallback(() => {
    setMyPageFrameOpen(false);
  }, []);

  return (
    <>
      <div className="relative w-full h-[52rem] text-left text-[2rem] text-dimgray font-inria-sans">
        <div className="absolute top-[0rem] left-[0rem] w-[80rem] h-[52rem]">
          <div className="absolute top-[2.31rem] left-[3.25rem] w-[73.69rem] h-[46.13rem]">
            <div className="absolute h-[112.74%] w-[108.57%] top-[-5.01%] right-[-4.16%] bottom-[-7.72%] left-[-4.41%] [background:linear-gradient(240.36deg,_#f5f5f5,_#fafbff)]" />
            <div className="absolute h-[88.08%] w-[25.45%] top-[11.92%] right-[0%] bottom-[0%] left-[74.55%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
            </div>
            <LeftSideButton />
            <div
              className="absolute h-[6.23%] w-[19.34%] top-[1.08%] right-[3.14%] bottom-[92.68%] left-[77.52%] flex flex-row py-[0rem] px-[0.06rem] box-border items-center justify-start gap-[0.5rem] cursor-pointer"
              onClick={openMyPageFrame}
            >
              <img
                className="relative w-[2.5rem] h-[2.5rem] object-cover z-[0]"
                alt=""
                src="/pngegg-1@2x.png"
              />
              <div className="relative inline-block w-[11.13rem] h-[2.88rem] shrink-0 z-[1]">
                mynameis2
              </div>
              <div className="absolute my-0 mx-[!important] h-[6.52%] w-[101.32%] top-[107.47%] right-[-0.22%] bottom-[-13.99%] left-[-1.1%] box-border z-[2] border-t-[3px] border-solid border-dimgray" />
            </div>
          </div>
          <div className="absolute h-[78.13%] w-[62.5%] top-[15.02%] right-[28.2%] bottom-[6.85%] left-[9.3%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
        </div>
        <MyInfoFrame />
        <ChatFrame />
      </div>
      {isMyPageFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMyPageFrame}
        >
          <MyPageFrame onClose={closeMyPageFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default GameLobby;
