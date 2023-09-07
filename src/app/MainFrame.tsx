"use client";
import React, { useContext, useEffect } from "react";
import Chat from "./chat/page";

import {
  UserContext,
  mainStates,
} from "@/app/UserContext";
import {
  getAuth,
  getUserId,
  redirectUri,
  socket,
  gameSocket,
} from "@/app/api";
import TwoFactor from "./TwoFactor/page";
import ChannelLobby from "./ChannelLobby/page";
import GameLobby from "./GameLobby/page";
import MyPageFrame from "./MyPageLobby/page";

function SideButton(props: { type: mainStates }) {
  const { state, actions } = useContext(UserContext);

  const imgSrc =
    props.type === mainStates.ChannelLobby
      ? "sidebutton31.svg"
      : "sidebutton2.svg";
  const clickhandler = () => {
    if (props.type === mainStates.ChannelLobby)
      actions.setMainState(mainStates.ChannelLobby);
    else actions.setMainState(mainStates.gameLobby);
  };

  if (props.type === state.mainState)
    return (
      <button
        onClick={clickhandler}
        className="bg-[#E1CAFE] rounded-tl-[10px] rounded-bl-[10px] w-[70px] h-[70px] relative "
      >
        <img src={imgSrc} className="" />
      </button>
    );
  return (
    <button onClick={clickhandler} className="w-[70px] h-[70px] relative">
      <img src={imgSrc} className="" />
    </button>
  );
}

function UserProfile() {
  const { state, actions } = useContext(UserContext);
  const clickHandler = () => {
    actions.setInfoTargetUser(state.userInfo.id);
    actions.setShowInfo(true);
    //console.log(state);
  };
  const logout = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <>
      <div className="w-[228px] h-[46px] flex items-center justify-between">
        <button
          onClick={clickHandler}
          className="Userprofile h-[46px] px-px justify-start items-center gap-2 inline-flex"
        >
          <img
            className="w-10 h-10 rounded-[70%]"
            src={state.userInfo.avatar}
          />
          <div className="Nickname w-[154px] h-[46px] text-neutral-600 text-[32px] font-normal">
            {state.userInfo.nickname}
          </div>
        </button>
        <button onClick={logout} className="flex items-center">
          <img className="w-6 h-6" src="keyoff.svg" />
        </button>
      </div>
      <div className="Line1 w-[228px] h-[0px] top-[50.94px] absolute border border-neutral-600"></div>
    </>
  );
}

export default function MainFrame() {
  const { state, actions } = useContext(UserContext);

  useEffect(() => {
    const loadedContext: string | null = sessionStorage.getItem("userContext");

    const connectionHandler = () => {
      console.log("socket connected", socket);
      actions.setConnectionState(true);
    };
    const disconnectionHandler = () => {
      console.log("socket disconnected", socket);
      actions.setConnectionState(false);
    };

    // if (getAuth()) {
    socket.on("connect", connectionHandler);
    socket.on("disconnect", disconnectionHandler);
    // }

    return () => {
      // if (getAuth()) {
      socket.off("connect", connectionHandler);
      socket.off("disconnect", disconnectionHandler);
      // }
    };
  }, [socket, gameSocket]);

  if (getUserId()) {
    if (state.userInfo.id != -1 && socket.disconnected) {
      return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-bl from-neutral-100 to-slate-50">
          You are trying to access multiple pages simultaneously.
        </div>
      );
    }
    else {
      return (
        <>
          <div className="flex justify-center items-center h-screen bg-gradient-to-bl from-neutral-100 to-slate-50">
            {
              // check whether this user is registered
              !getAuth() && <TwoFactor />
            }
            {getAuth() && (
              <>
                {state.showInfo && (
                  <div className="z-20 flex justify-center items-center">
                    <div className="z-30 w-[62.5rem] h-[40.63rem]">
                      <MyPageFrame />
                    </div>
                    <div className="z-10 absolute top-0 left-0 w-[100vw] h-[100vh] bg-black opacity-20 backdrop-blur-xl" />
                    <div className="z-10 absolute top-0 left-0 w-[100vw] h-[100vh] bg-black opacity-20 backdrop-blur-xl" />
                  </div>
                )}

                <div className="w-[1280px] h-[832px] absolute">
                  {/* userProfile */}
                  <div className="top-[3.13rem] left-[60.38rem] absolute w-[14.25rem] h-[2.875rem]">
                    <UserProfile />
                  </div>

                  {/* sidebuttons */}
                  <div className="w-[4.38rem] h-[4.38rem] top-[14.88rem] left-[3.25rem] absolute rounded-tl-[10px]">
                    <SideButton type={mainStates.ChannelLobby} />
                  </div>
                  <div className="w-[4.38rem] h-[4.38rem] top-[10.69rem] left-[3.25rem] absolute rounded-tl-[10px]">
                    <SideButton type={mainStates.gameLobby} />
                  </div>

                  <div className="absolute w-[800px] h-[650px] top-[8.13rem] left-[7.44rem] z-10 rounded-[10px]">
                    {state.mainState === mainStates.gameLobby ? (
                      <GameLobby />
                    ) : (
                      <ChannelLobby />
                    )}
                  </div>

                  <div className="w-[300px] h-[650px] absolute top-[8.13rem] left-[58.19rem]">
                    <Chat />
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      );
    }
  }
  else if (!sessionStorage.getItem("userContext")) // cannot get user information
    window ? window.location.replace(redirectUri()) : null;

}
