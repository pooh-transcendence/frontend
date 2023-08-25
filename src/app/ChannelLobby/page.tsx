'use client';

import type { NextPage } from "next";
import ChannelRoomList from "./channelRoom/channelRoomList";

import CreateListFrame, { CreateChannelModal } from "./frame/createListFrame";
import { useContext } from "react";
import { UserContext } from "../UserContext";

const ChannelLobby: NextPage = () => {
  const { state, actions } = useContext(UserContext);

  return (
    <div className="absolute w-[50rem] h-[40.63rem] text-[1.25rem] text-[#555555]">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xs box-border border-[3px] border-solid border-dimgray" />
      <div className="absolute top-[1.19rem] left-[1.69rem] w-[46.56rem] h-[37.88rem]">
        <ChannelRoomList />
        <CreateListFrame />
      </div>
      {
        state.showCreateChannel && (
          <div className="flex items-center justify-center h-[100%]">
            <CreateChannelModal />
          </div>
        )

      }
    </div>
  );
}

export default ChannelLobby;
