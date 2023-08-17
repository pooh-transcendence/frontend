'use client'

import { UserContext } from "@/app/UserContext";
import { api_patch, api_post } from "@/app/api";
import { useContext, useState } from "react";

enum ChannelModeEnum {
  Public = "PUBLIC",
  Protected = "PROTECTED",
  Private = "PRIVATE",
}

export const CreateChannelModal = () => {
  const { state, actions } = useContext(UserContext);
  const [channelMode, setChannelMode] = useState<ChannelModeEnum>(ChannelModeEnum.Public);
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const onChangeName = (e: any) => {
    setName(e.target.value);
  };
  const onChangePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const togglePrivate = () => {
    if (channelMode === ChannelModeEnum.Private)
      setChannelMode(ChannelModeEnum.Public);
    else
      setChannelMode(ChannelModeEnum.Private);
  };
  const toggleProtected = () => {
    if (channelMode === ChannelModeEnum.Protected) {
      setChannelMode(ChannelModeEnum.Public);
      setPassword("");
    }
    else
      setChannelMode(ChannelModeEnum.Protected);
  };
  const createButtonHandler = () => {
    console.log("createChannel with ", name, password, channelMode);

    if (!name.length) return;
    if (channelMode === ChannelModeEnum.Protected && !password.length) return;

    api_post("/channel", {
      "channelInfo": {
        "channelType": "PUBLIC",
        "channelName": name,
        "ownerId": state.userInfo.id
      },
      "channelUserIds": [
        state.userInfo.id
      ]
    }).then((res) => {
      if(channelMode === ChannelModeEnum.Protected)
      {
        api_patch("/channel/password", {
          "channelId": res.data.data.id,
          "password": password,
        }).then((res) => console.log);
      }
    })
    actions.setShowCreateChannel(false);
  };

  if (channelMode === ChannelModeEnum.Protected)
    return (
      <div className="Property1Protected w-[385px] h-[197px] relative">
        <div className="Bg w-[385px] h-[197px] left-0 top-0 absolute bg-white rounded-[10px] shadow" />
        <button onClick={() => { actions.setShowCreateChannel(false) }}>
          <img src="cancel.svg" className="w-6 h-6 left-[355px] top-[5px] absolute" />
        </button>
        <img src="chat_add.svg" className="w-8 h-8 left-[22px] top-[17px] absolute" />
        <div className="left-[54px] top-[17px] absolute text-neutral-600 text-xl font-normal">create channel</div>

        { /* form */}
        <div className="w-[238px] h-7 left-[74px] top-[54px] absolute">
          <div className="left-0 top-[4px] absolute text-neutral-600 text-[15px] font-bold">name</div>
          <input type="text" onChange={onChangeName} className="channelName outline-none text-center w-[160px] h-[25px] left-[70px] top-0 absolute justify-center items-center gap-[5px] inline-flex" />
        </div>

        <div className="w-[238px] h-[25px] left-[74px] top-[90px] absolute">
          <div className="Pw left-0 top-[2px] absolute text-neutral-600 text-[15px] font-bold">pw</div>
          <input type="password" onChange={onChangePassword} maxLength={12} className="channelPassword outline-none text-center w-[160px] h-[25px] left-[70px] top-0 absolute justify-center items-center gap-[5px] inline-flex" />
        </div>
        <img src="createChannelLine_200px.svg" className="absolute top-[5rem] left-[7.5rem]" />
        <img src="createChannelLine_200px.svg" className="absolute top-[7.06rem] left-[7.5rem]" />

        {/* checkboxes */}
        <div className="left-[93px] top-[127px] absolute justify-center items-center gap-[29px] inline-flex">
          <button onClick={toggleProtected} className="Protectedbutton w-[94px] h-6 relative">
            <img src={channelMode === ChannelModeEnum.Protected ? "checkmarks1.svg":"checkmarks0.svg"} className="Checkmarks w-6 h-6 left-0 top-0 absolute flex-col justify-center items-center gap-2.5 inline-flex" />
            <div className="Protected left-[24px] top-0 absolute text-neutral-600 text-base font-bold">protected</div>
          </button>
          <button onClick={togglePrivate} className="PrivateButton w-[76px] h-6 relative">
            <img src={channelMode === ChannelModeEnum.Private ? "checkmarks1.svg":"checkmarks0.svg"} className="Checkmarks w-6 h-6 left-0 top-0 absolute flex-col justify-center items-center gap-2.5 inline-flex" />
            <div className="Private left-[24px] top-0 absolute text-neutral-600 text-base font-bold">private</div>
          </button>
        </div>
        <button onClick={createButtonHandler} className="Createbutton w-[75px] h-8 left-[155px] top-[157px] absolute">
          <img src="sweep.svg" className="w-8 h-8 left-0 top-0 absolute" />
          <div className="Create left-[29px] top-[7px] absolute text-neutral-600 text-base font-bold">create</div>
        </button>
      </div>
    )
  else // Private, Public
    return (
      <div className="Createchannel w-[385px] h-[165px] relative">
        <div className="Bg w-[385px] h-[165px] left-0 top-0 absolute bg-white rounded-[10px] shadow" />
        <button onClick={() => { actions.setShowCreateChannel(false) }}>
          <img src="cancel.svg" className="w-6 h-6 left-[355px] top-[5px] absolute" />
        </button>
        <img src="chat_add.svg" className="w-8 h-8 left-[22px] top-[17px] absolute" />
        <div className="left-[54px] top-[17px] absolute text-neutral-600 text-xl font-normal">create channel</div>

        {/* form */}
        <div className="w-[238px] h-7 left-[74px] top-[54px] absolute">
          <div className="left-0 top-[4px] absolute text-neutral-600 text-[15px] font-bold">name</div>
          <input type="text" onChange={onChangeName} className="channelName outline-none text-center w-[160px] h-[25px] left-[70px] top-0 absolute justify-center items-center gap-[5px] inline-flex" />
        </div>
        <img src="createChannelLine_200px.svg" className="absolute top-[5rem] left-[7.5rem]" />

        {/* checkboxes */}
        <div className="left-[93px] top-[94px] absolute justify-center items-center gap-[29px] inline-flex">
          <button onClick={toggleProtected} className="Protectedbutton w-[94px] h-6 relative">
            <img src={channelMode === ChannelModeEnum.Protected ? "checkmarks1.svg":"checkmarks0.svg"} className="Checkmarks w-6 h-6 left-0 top-0 absolute flex-col justify-center items-center gap-2.5 inline-flex" />
            <div className="Protected left-[24px] top-0 absolute text-neutral-600 text-base font-bold">protected</div>
          </button>
          <button onClick={togglePrivate} className="PrivateButton w-[76px] h-6 relative">
            <img src={channelMode === ChannelModeEnum.Private ? "checkmarks1.svg":"checkmarks0.svg"} className="Checkmarks w-6 h-6 left-0 top-0 absolute flex-col justify-center items-center gap-2.5 inline-flex" />
            <div className="Private left-[24px] top-0 absolute text-neutral-600 text-base font-bold">private</div>
          </button>
        </div>
        <button onClick={createButtonHandler} className="Createbutton w-[75px] h-8 left-[155px] top-[124px] absolute">
          <img src="sweep.svg" className="w-8 h-8 left-0 top-0 absolute" />
          <div className="Create left-[29px] top-[7px] absolute text-neutral-600 text-base font-bold">create</div>
        </button>
      </div>
    );
}

export default function CreateListFrame() {
  const { state, actions } = useContext(UserContext);
  const createChannelHandler = () => {
    actions.setShowCreateChannel(true);
  }

  return (
    <button onClick={createChannelHandler} className="absolute top-[1rem] left-[39.3rem] flex flex-row items-center justify-start gap-[0.13rem]">
      <div className="relative inline-block w-[3.38rem] h-[1.69rem] shrink-0">
        <p className="m-0">create</p>
      </div>
      <img
        className="relative w-[2rem] h-[2rem] overflow-hidden shrink-0"
        alt=""
        src="/chat-add-on-fill0-wght300-grad0-opsz48-1.svg"
      />
    </button>
  );
}

/* todo: button hover effects */