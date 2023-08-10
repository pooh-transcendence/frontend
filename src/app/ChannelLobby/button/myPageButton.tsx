'use client';

import type { NextPage } from "next";
import { useState, useCallback } from "react";
import MyPageLobby from "@/app/MyPageLobby/page";
import PortalPopup from "@/components/portal-popup";

export default function LeftSideButton() {
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

            {isMyPageFrameOpen && (
              <PortalPopup
                overlayColor="rgba(113, 113, 113, 0.3)"
                placement="Centered"
                onOutsideClick={closeMyPageFrame}
              >
                <MyPageLobby onClose={closeMyPageFrame} />
              </PortalPopup>
            )}
        </>
    );
};