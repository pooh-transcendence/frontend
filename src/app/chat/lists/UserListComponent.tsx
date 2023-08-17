'use client'

import { socket } from "@/app/api";
import React, { useContext } from "react";
import { UserContext } from "@/app/UserContext";

interface UserListCompProps {
  userId: number,
  nick: string,
  type: "list_block" | "GAMING" | "ONLINE" | "OFFLINE" | "ONCHAT" | "inviteFriend_1" | "inviteFriend_0" | "addFriend",
  profileImg: string,
}

export const UserListComponent = ({
  userId,
  nick = "testNickasdf",
  type,
  profileImg = "https://via.placeholder.com/32x32",
}: UserListCompProps): JSX.Element => {

  const { state, actions } = useContext(UserContext);

  const addFriendHandler = () => {
    socket.emit("createFriend", { "followingUserId": Number(userId) });
  }
  const selectHandler = () => {
    actions.setChannelChattingInfo({ ...state.channelChattingInfo, inviteSelectedList: [...state.channelChattingInfo.inviteSelectedList, userId] });
  }
  const unselectHandler = () => {
    actions.setChannelChattingInfo({ ...state.channelChattingInfo, inviteSelectedList: state.channelChattingInfo.inviteSelectedList.filter((elem) => elem != userId) });
  }

  return (
    <>
      {type === "addFriend" && (
        <div className="w-[247px] h-[45px] relative">
          <div className="left-[1px] top-0 absolute justify-center items-center gap-2.5 inline-flex">
            <img className="w-8 h-8" src={profileImg} />
            <div className="text-neutral-600 text-base font-normal">{nick}</div>
          </div>
          <div className="left-[182px] top-[2px] absolute justify-start items-start gap-[3px] inline-flex">
            <img className="w-7 h-7 relative" src="toUserInfo.svg" />
            <button onClick={addFriendHandler}>
              <img className="w-7 h-7 relative" src="group_add.svg" />
            </button>
          </div>
          <img className="top-[41px] relative" src="listComp_line_240px.svg" />
        </div>
      )}
      {type === "inviteFriend_0" && (
        <div className="w-[247px] h-[45px] relative">
          <img className="top-[41px] relative" src="listComp_line_240px.svg" />
          <div className="left-[1px] top-0 absolute justify-center items-center gap-2.5 inline-flex">
            <img className="w-8 h-8" src={profileImg} />
            <div className="text-neutral-600 text-base font-normal">{nick}</div>
          </div>
          <button onClick={selectHandler} className="w-6 h-6 left-[217px] top-[4px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
            <img className="w-7 h-7 relative" src="Checkmarks0.svg" />
          </button>
        </div>
      )}
      {type === "inviteFriend_1" && (
        <div className="w-[247px] h-[45px] relative">
          <img className="top-[41px] relative" src="listComp_line_240px.svg" />
          <div className="left-[1px] top-0 absolute justify-center items-center gap-2.5 inline-flex">
            <img className="w-8 h-8" src={profileImg} />
            <div className="text-neutral-600 text-base font-normal">{nick}</div>
          </div>
          <button onClick={unselectHandler} className="w-6 h-6 left-[217px] top-[4px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
            <img className="w-7 h-7 relative" src="Checkmarks1.svg" />
          </button>
        </div>
      )}
      {type === "OFFLINE" && (
        <div className="w-[260px] h-[45px] relative">
          <img className="w-5 h-5 left-[241px] top-[8px] absolute" src="info.svg" />
          <div className="left-[1px] top-0 absolute justify-center items-center gap-2.5 inline-flex">
            <img className="w-8 h-8" src={profileImg} />
            <div className="text-neutral-600 text-base font-normal">{nick}</div>
            <img className="w-3.5 h-3.5 relative" src="wifi_off.svg" />
          </div>
          <img className="top-[41px] relative" src="listComp_line_260px.svg" />
        </div>
      )}
      {(type === "ONLINE" || type === "ONCHAT") && (
        <div className="w-[260px] h-[45px] relative">
          <img className="top-[41px] relative" src="listComp_line_260px.svg" />
          <div className="left-[1px] top-0 absolute justify-center items-center gap-2.5 inline-flex">
            <img className="w-8 h-8" src={profileImg} />
            <div className="text-neutral-600 text-base font-normal">{nick}</div>
            <img className="w-3.5 h-3.5 relative" src="wifi_on.svg" />
          </div>
          <img className="w-5 h-5 left-[216px] top-[8px] absolute" src="mark_as_unread.svg" />
          <img className="w-5 h-5 left-[241px] top-[8px] absolute" src="info.svg" />
        </div>
      )}
      {type === "GAMING" && (
        <div className="w-[260px] h-[45px] relative">
          <img className="top-[41px] relative" src="listComp_line_260px.svg" />
          <div className="left-[1px] top-0 absolute justify-center items-center gap-2.5 inline-flex">
            <img className="w-8 h-8" src={profileImg} />
            <div className="text-neutral-600 text-base font-normal">{nick}</div>
            <img className="w-3.5 h-3.5 relative" src="gaming.svg" />
          </div>
          <img className="w-5 h-5 left-[241px] top-[8px] absolute" src="info.svg" />
        </div>
      )}
      {type === "list_block" && (
        <div className="w-[260px] h-[45px] relative">
          <img className="top-[41px] relative" src="listComp_line_260px.svg" />
          <div className="left-[1px] top-0 absolute justify-center items-center gap-2.5 inline-flex">
            <img className="w-8 h-8" src={profileImg} />
            <div className="text-neutral-600 text-base font-normal">{nick}</div>
          </div>
          <button onClick={() => { socket.emit("deleteBlock", { "blockedUserId": Number(userId) }) }}>
            <img className="w-5 h-5 left-[241px] top-[8px] absolute" src="unblock.svg" />
          </button>
        </div>
      )}
    </>
  )
};