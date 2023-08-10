import React from "react";

interface UserListCompProps {
    nick: string,
    type: "list_block" | "GAMING" | "ONLINE" | "OFFLINE" | "inviteFriend_1" | "inviteFriend_0" | "addFriend",
    profileImg: string
  }
  
export const UserListComponent = ({
    nick = "testNickasdf",
    type,
    profileImg = "https://via.placeholder.com/32x32",
  }: UserListCompProps): JSX.Element => {
    return (
      <>
        {type == "addFriend" && (
          <div className="w-[247px] h-[45px] relative">
            <div className="left-[1px] top-0 absolute justify-center items-center gap-2.5 inline-flex">
              <img className="w-8 h-8" src={profileImg} />
              <div className="text-neutral-600 text-base font-normal">{nick}</div>
            </div>
            <div className="left-[182px] top-[2px] absolute justify-start items-start gap-[3px] inline-flex">
              <img className="w-7 h-7 relative" src="toUserInfo.svg" />
              <img className="w-7 h-7 relative" src="group_add.svg" />
            </div>
            <img className="top-[41px] relative" src="listComp_line_240px.svg" />
          </div>
        )}
        {type == "inviteFriend_0" && (
          <div className="w-[247px] h-[45px] relative">
            <div className="left-[1px] top-0 absolute justify-center items-center gap-2.5 inline-flex">
              <img className="w-8 h-8" src={profileImg} />
              <div className="text-neutral-600 text-base font-normal">{nick}</div>
            </div>
            <div className="w-6 h-6 left-[217px] top-[4px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
              <img className="w-7 h-7 relative" src="Checkmarks0.svg" />
            </div>
            <img className="top-[41px] relative" src="listComp_line_240px.svg" />
          </div>
        )}
        {type == "inviteFriend_1" && (
          <div className="w-[247px] h-[45px] relative">
            <div className="left-[1px] top-0 absolute justify-center items-center gap-2.5 inline-flex">
              <img className="w-8 h-8" src={profileImg} />
              <div className="text-neutral-600 text-base font-normal">{nick}</div>
            </div>
            <div className="w-6 h-6 left-[217px] top-[4px] absolute flex-col justify-center items-center gap-2.5 inline-flex">
              <img className="w-7 h-7 relative" src="Checkmarks1.svg" />
            </div>
            <img className="top-[41px] relative" src="listComp_line_240px.svg" />
          </div>
        )}
        {type == "OFFLINE" && (
          <div className="w-[260px] h-[45px] relative">
            <div className="left-[1px] top-0 absolute justify-center items-center gap-2.5 inline-flex">
              <img className="w-8 h-8" src={profileImg} />
              <div className="text-neutral-600 text-base font-normal">{nick}</div>
              <img className="w-3.5 h-3.5 relative" src="wifi_off.svg" />
            </div>
            <img className="w-5 h-5 left-[241px] top-[8px] absolute" src="info.svg" />
            <img className="top-[41px] relative" src="listComp_line_260px.svg" />
          </div>
        )}
        {type == "ONLINE" && (
          <div className="w-[260px] h-[45px] relative">
            <div className="left-[1px] top-0 absolute justify-center items-center gap-2.5 inline-flex">
              <img className="w-8 h-8" src={profileImg} />
              <div className="text-neutral-600 text-base font-normal">{nick}</div>
              <img className="w-3.5 h-3.5 relative" src="wifi_on.svg" />
            </div>
            <img className="w-5 h-5 left-[216px] top-[8px] absolute" src="mark_as_unread.svg" />
            <img className="w-5 h-5 left-[241px] top-[8px] absolute" src="info.svg" />
            <img className="top-[41px] relative" src="listComp_line_260px.svg" />
          </div>
        )}
        {type == "GAMING" && (
          <div className="w-[260px] h-[45px] relative">
            <div className="left-[1px] top-0 absolute justify-center items-center gap-2.5 inline-flex">
              <img className="w-8 h-8" src={profileImg} />
              <div className="text-neutral-600 text-base font-normal">{nick}</div>
              <img className="w-3.5 h-3.5 relative" src="gaming.svg" />
            </div>
            <img className="w-5 h-5 left-[241px] top-[8px] absolute" src="info.svg" />
            <img className="top-[41px] relative" src="listComp_line_260px.svg" />
          </div>
        )}
        {type == "list_block" && (
          <div className="w-[260px] h-[45px] relative">
            <div className="left-[1px] top-0 absolute justify-center items-center gap-2.5 inline-flex">
              <img className="w-8 h-8" src={profileImg} />
              <div className="text-neutral-600 text-base font-normal">{nick}</div>
            </div>
            <img className="w-5 h-5 left-[241px] top-[8px] absolute" src="unblock.svg" />
            <img className="top-[41px] relative" src="listComp_line_260px.svg" />
          </div>
        )}
      </>
    )
  };