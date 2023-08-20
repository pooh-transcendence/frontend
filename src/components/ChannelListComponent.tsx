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
    else
    {
      actions.setShowChannelPassword(true);
      actions.setTargetChannel(channel);
    }
  }
  return (
    <>
      <div className="relative w-[43.56rem] h-[2.56rem] text-[#555555]">
        <img
          className="absolute top-[2.31rem] left-[2.69rem] w-[40.88rem] h-[0.13rem]"
          alt=""
          src="/line-2.svg"
        />
        <img
          className="absolute h-[78.05%] w-[4.59%] top-[0%] right-[95.41%] bottom-[21.95%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/pngegg-4@2x.png"
        />
        <div className="absolute top-[0.94rem] left-[30.94rem] inline-block w-[9.31rem] h-[1.31rem]">
          {channel.ownerNickname}
        </div>
        <div className="absolute top-[0.06rem] left-[3.19rem] flex flex-row flex-wrap items-end justify-center gap-[0.75rem] text-left text-[1.5rem]">
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
