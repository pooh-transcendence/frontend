'use client';

import type { NextPage } from "next";
import { useState, useCallback } from "react";
import MyPageFrame from "@/components/my-page-frame";
import PortalPopup from "@/components/portal-popup";


export default function LeftSideButtons() {
    const [isMyPageFrameOpen, setMyPageFrameOpen] = useState(false);

    const onSideButton21Click = useCallback(() => {
    // channelLobby 로 이동
    }, []);

    const openMyPageFrame = useCallback(() => {
    setMyPageFrameOpen(true);
    }, []);

    const closeMyPageFrame = useCallback(() => {
    setMyPageFrameOpen(false);
    }, []);

    return (
        <>
        <img
            className="absolute h-[9.49%] w-[5.94%] top-[17.48%] right-[94.06%] bottom-[73.04%] left-[0%] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs max-w-full overflow-hidden max-h-full"
            alt=""
            src="/sidebutton2.svg"
        />

        <img
            className="absolute h-[9.49%] w-[5.94%] top-[17.48%] right-[94.06%] bottom-[73.04%] left-[0%] rounded-tl-3xs rounded-tr-none rounded-br-none rounded-bl-3xs max-w-full overflow-hidden max-h-full"
            alt=""
            src="/sidebutton2.svg"
        />

        <img // 
            className="absolute h-[9.49%] w-[5.94%] top-[26.56%] right-[94.06%] bottom-[63.96%] left-[0%] rounded-tl-3xs rounded-tr-none rounded-b-none max-w-full overflow-hidden max-h-full cursor-pointer"
            alt=""
            src="/sidebutton21.svg"
            onClick={onSideButton21Click}
        />
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
}