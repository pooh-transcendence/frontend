'use client';

import { useState, useCallback } from "react";


export default function LeftSideButtons() {
    const [isMyPageFrameOpen, setMyPageFrameOpen] = useState(false);

    const onSideButton31Click = useCallback(() => {
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
                src="/sidebutton3.svg"
            />

            <img
                className="absolute h-[9.49%] w-[5.94%] top-[26.56%] right-[94.06%] bottom-[63.96%] left-[0%] rounded-tl-3xs rounded-tr-none rounded-b-none max-w-full overflow-hidden max-h-full cursor-pointer"
                alt=""
                src="/sidebutton31.svg"
                onClick={onSideButton31Click}
            />
    </>
    );
}