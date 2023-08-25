import { UserContext, targetChannelInfo } from "@/app/UserContext";
import { socket } from "@/app/api";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function ChannelListComponent({ channel }: { channel: targetChannelInfo }) {
  const { state, actions } = useContext(UserContext);

  const channelEnterHandler = () => {
    if (channel.channelType === "PUBLIC")
      socket.emit("joinChannel", { userId: state.userInfo.id, channelId: channel.id });
    else {
      actions.setShowChannelPassword(true);
      actions.setTargetChannel(channel);
    }
  }

  return (
    <div className="relative w-[697px] h-[41px]">
        <img
          className="relative top-[2.38rem] left-[2.75rem] w-[40.88rem]"
          alt=""
          src="/line-2.svg"
        />
      <img className="channelImg w-8 h-8 left-0 top-0 absolute" src="https://via.placeholder.com/32x32" />
      <div className="Owner w-[149px] h-[21px] left-[495px] top-[15px] absolute text-right text-neutral-600 text-[13px] font-normal">
        {channel.ownerNickname}
      </div>
      <div className="Frame1 left-[51px] top-[1px] absolute justify-center items-end gap-3 inline-flex">
        <div className="Name text-neutral-600 text-[24px] font-normal">
          {channel.channelName}
        </div>
        <div className="justify-center items-end gap-[3px] flex">
          <div className="text-neutral-600 text-[13px] font-normal">
            {channel.userCount}
          </div>
          <div className="text-neutral-600 text-[13px] font-normal">
            {channel.userCount === 1 ? "person" : "people"}
          </div>
        </div>
        <img
            className="w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src={channel.channelType == "PUBLIC" ? "lock.svg" : "lock_.svg"}
          />
      </div>
      <button onClick={channelEnterHandler}>
          <img
            className="w-8 h-8 left-[42.13rem] top-[0.25rem]"
            alt=""
            src="enterbutton.svg"
          />
        </button>
    </div>
  );
  return (
    <>
      <div className="w-[43.56rem] h-[2.56rem] text-[#555555]">
        <img
          className="relative top-[2.38rem] left-[2.75rem] w-[40.88rem] h-[0.13rem]"
          alt=""
          src="/line-2.svg"
        />
        <img
          className="h-[78.05%] w-[4.59%]"
          alt=""
          src="/pngegg-4@2x.png"
        />
        <div className="relative top-[0.94rem] left-[30.94rem] inline-block w-[9.31rem] h-[1.31rem]">
          {channel.ownerNickname}
        </div>
        <div className="relative top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
          <div className="relative">{channel.channelName}</div>
          <div className="flex flex-row items-end justify-center gap-[0.19rem] text-[0.81rem]">
            <div className="relative">{channel.userCount}</div>
            <div className="relative">{channel.userCount === 1 ? "person" : "people"}</div>
          </div>
          <img
            className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0"
            alt=""
            src={channel.channelType == "PUBLIC" ? "lock.svg" : "lock_.svg"}
          />
        </div>
        <button onClick={channelEnterHandler}>
          <img
            className="absolute h-[78.05%] w-[4.59%] top-[9.76%] right-[1%] bottom-[12.2%] left-[94.4%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="enterbutton.svg"
          />
        </button>
      </div>
    </>
  );
}
