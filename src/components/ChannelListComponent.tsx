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
      <img className="channelImg w-8 h-8 left-0 top-0 absolute" src="/pngegg-4@2x.png" />
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
}
