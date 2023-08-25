import { api_get } from "@/app/api";
import ChannelListComponent from "@/components/ChannelListComponent";
import { useContext, useEffect, useState } from "react";
import { socket, api_post } from "@/app/api";
import { UserContext, targetChannelInfo } from "@/app/UserContext";

function InputPassword() {
  const { state, actions } = useContext(UserContext);
  const [text, setText] = useState("");
  const handleOnKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      submitPassword();
    }
  }
  const submitPassword = () => {
    console.log("submitPassword", text);
    api_post("/channel/join", {userId: Number(state.userInfo.id), channelId: Number(state.targetChannel.id), password: text}).then(() => {
      actions.setShowChannelPassword(false);
    }).catch((e) => {console.log("wrongPw", e)});
  }
  const onChange = (e: any) => { setText(e.target.value); }
  const cancelHandler=() => {
    actions.setShowChannelPassword(false);
  }

  // console.log(state.targetChannel);
  return (
    <>
      <div className="Inputpassword top-[15.69rem] left-[12.94rem] w-[385px] h-[147px] relative">
        <img src="input_password_line.svg" className="absolute z-10 top-[6.94rem] left-[2.37rem]" />
        <div className="Bg w-[385px] h-[147px] left-0 top-0 absolute bg-white rounded-[10px] shadow" />
        <button onClick={cancelHandler}>
          <img src="cancel.svg" className="w-6 h-6 left-[355px] top-[5px] absolute" />
        </button>
        <div className="Title left-[38px] top-[33px] absolute justify-end items-baseline gap-2 inline-flex">
          <div className="Name text-neutral-600 text-[25px] font-normal">{state.targetChannel.channelName}</div>
          <img src="vbar_for_channel_password.svg" />
          <div className="Ownername w-[117px] h-[21px] text-neutral-600 text-sm font-normal">{state.targetChannel.ownerNickname}<br /></div>
        </div>
        <div className="Input h-[25px] left-[38px] top-[86px] absolute">
          <div className="Frame88 w-[102px] h-[25px] left-[59px] top-0 absolute justify-center items-center inline-flex">
            <form onKeyDown={handleOnKeyPress}>
              <input onChange={onChange} value={text} type="password" className="outline-none text-center text-neutral-600 leading-[25.20px]" />
            </form>
          </div>
        </div>
        <button onClick={submitPassword}>
          <div className="Joinbutton w-16 h-8 left-[282px] top-[57px] absolute justify-center items-center inline-flex gap-1">
            <img src="unlock.svg" className="w-8 h-8 relative flex-col justify-start items-start flex" />
            <div className="Join w-8 h-[23px] text-neutral-600 font-bold italic leading-[25.20px]">join</div>
          </div>
        </button>
      </div>
    </>
  );
}

export default function ChannelRoomList() {

  const [channels, setChannels] = useState<targetChannelInfo[]>([]);
  const { state, actions } = useContext(UserContext);

  useEffect(() => {
    socket.emit("visibleChannel");
    socket.once("visibleChannel", (res: targetChannelInfo[]) => {
      setChannels(res);
    });

    return () => {
      // socket.off("visibleChannel");
    }
  }, []);

  useEffect(() => {
    const addChannelToAllChannelList = (newChannel : targetChannelInfo) => {  
      console.log("addChannelToAllChannelList", newChannel); // <- need to check
      setChannels([...channels, newChannel]);
    }
    const deleteChannelToAllChannelList = (deletedChannel: targetChannelInfo) => {
      console.log("deleteChannelToAllChannelList", deletedChannel);
      setChannels(channels.filter((chan) => chan.id != deletedChannel.id));
    }
    socket.on("addChannelToAllChannelList", addChannelToAllChannelList);
    socket.on("deleteChannelToAllChannelList", deleteChannelToAllChannelList);
    
    return () => {
      socket.off("addChannelToAllChannelList", addChannelToAllChannelList);
      socket.off("deleteChannelToAllChannelList", deleteChannelToAllChannelList);
    }
  }, [channels]);

  return (
    <>
      <img
        className="absolute top-[0.7rem] w-[46.6rem] h-[37.7rem]"
        alt=""
        src="/listframe.svg"
      />
      <div className="absolute h-[4.13%] w-[33.15%] top-[1.5%] right-[60.27%] bottom-[95.87%] left-[6.58%]">
        <div className="absolute h-full w-full top-[0%] left-[0%] inline-block">
          channel list
        </div>
      </div>
      <img
        className="absolute h-[3.8%] w-[3.09%] top-[1.97%] right-[94.77%] bottom-[95.74%] left-[2.15%]  max-w-full max-h-full"
        alt=""
        src="/vector1.svg"
      />
      {/* <div className="scrollbar-hide overflow-auto w-[33.1rem] h-[43.6rem] absolute flex-col justify-start text-right items-end gap-[0.81rem] text-[0.81rem] text-[#555555] inline-flex"> */}
      <div className="absolute h-[43.6rem] w-[33.1rem] top-[10.24%] right-[2.82%] bottom-[3.3%] left-[3.62%] overflow-y-auto flex flex-col items-start justify-start gap-[0.81rem] text-right text-[0.81rem] text-[#555555]">
        <div className="flex flex-col items-center justify-center text-center text-[1rem]">
          <div className="relative">public</div>
        </div>
        {
          channels.filter((elem) => elem.channelType === "PUBLIC").map((elem) => {
            return <ChannelListComponent key={elem.id} channel={elem} />
          })
        }

        <div className="flex flex-col items-center justify-center text-center text-[1rem] gap-[0.81rem]">
          <div className="relative">protected</div>
        </div>
        {
          channels.filter((elem) => elem.channelType === "PROTECTED").map((elem) => {
            return <ChannelListComponent key={elem.id} channel={elem} />
          })
        }
      </div>
      {/* inputChannelPassword modal*/}
      {
        state.showChannelPassword && (
          <div>
            <InputPassword />
          </div>
        )
      }
    </>
  );
}