'use client';

import type { NextPage } from "next";
import LeftSideButtons from "./button/leftSideButtons";
import MyPageButton from "./button/myPageButton";

import MyInfoFrame from "./frame/myInfoFrame";
import ChatFrame from "./frame/chatFrame";

const GameLobby: NextPage = () => {

  return (
    <>
      <div className="relative w-full h-[52rem] text-left text-[2rem] text-dimgray font-inria-sans">
        <div className="absolute top-[0rem] left-[0rem] w-[80rem] h-[52rem]">
          <div className="absolute top-[2.31rem] left-[3.25rem] w-[73.69rem] h-[46.13rem]">
            <div className="absolute h-[112.74%] w-[108.57%] top-[-5.01%] right-[-4.16%] bottom-[-7.72%] left-[-4.41%] [background:linear-gradient(240.36deg,_#f5f5f5,_#fafbff)]" />
            <div className="absolute h-[88.08%] w-[25.45%] top-[11.92%] right-[0%] bottom-[0%] left-[74.55%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
            </div>

            <LeftSideButtons />
            <MyPageButton />

          </div>
          <div className="absolute h-[78.13%] w-[62.5%] top-[15.02%] right-[28.2%] bottom-[6.85%] left-[9.3%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
        </div>

        <MyInfoFrame />
        {/* <ChatFrame /> 지워도 됨 */}

      </div>
    </>
  );
};

export default GameLobby;
