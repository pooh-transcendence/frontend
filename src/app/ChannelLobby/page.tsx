'use client';

import type { NextPage } from "next";

import LeftSideButtons from "../ChannelLobby/button/leftSideButtons";
import MyPageButton from "./button/myPageButton";
import ChannelRoomList from "./channelRoom/channelRoomList";

import CreateListFrame from "./frame/createListFrame";
import FriendList from "./friendList/friendList";

const ChannelLobby: NextPage = () => {

  return (
    <div className="absolute w-[50rem] h-[40.63rem] text-[1.25rem] text-[#555555]">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
      <div className="absolute top-[1.19rem] left-[1.69rem] w-[46.56rem] h-[37.88rem]">
        <ChannelRoomList />
        <CreateListFrame />
      </div>
    </div>
  );
  return (
    <>
      <div className="relative bg-white w-full h-[52rem] overflow-hidden text-left text-[2rem] text-dimgray font-inria-sans">
        <div className="absolute top-[0rem] left-[0rem] w-[80rem] h-[52rem]">
          <div className="absolute h-[88.7%] w-[92.11%] top-[4.45%] right-[3.83%] bottom-[6.85%] left-[4.06%]">
            <div className="absolute h-[112.74%] w-[108.57%] top-[-5.01%] right-[-4.16%] bottom-[-7.72%] left-[-4.41%] [background:linear-gradient(240.36deg,_#f5f5f5,_#fafbff)]" />
            <div className="absolute h-[88.08%] w-[25.45%] top-[11.92%] right-[0%] bottom-[0%] left-[74.55%]">
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
            </div>
            <LeftSideButtons />
            <MyPageButton />
          </div>
          <div className="absolute h-[78.13%] w-[62.5%] top-[15.02%] right-[28.2%] bottom-[6.85%] left-[9.3%]">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
          </div>
        </div>
        <div className="absolute top-[7.81rem] left-[7.44rem] w-[50rem] h-[40.63rem] text-[1.25rem]">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
          <div className="absolute top-[1.19rem] left-[1.69rem] w-[46.56rem] h-[37.88rem]">
            <ChannelRoomList />
            <CreateListFrame />
          </div>
        </div>
        {/* <FriendList /> 지워도 됨 */}
      </div>
    </>
  );
};

export default ChannelLobby;
