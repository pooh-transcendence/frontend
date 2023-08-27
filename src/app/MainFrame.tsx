'use client'
import React, { useContext, useEffect } from "react"
import Chat from "./chat/page"

import { savedContext } from "./UserProvider"
import { UserContext, mainStates, targetChannelInfo, userInfo } from "@/app/UserContext"
import { getAuth, setUserId, getUserId, redirectUri, setAuth, socket, updateSocket, api_get } from '@/app/api';
import TwoFactor from "./TwoFactor/page";
import ChannelLobby from "./ChannelLobby/page";
import GameLobby from "./GameLobby/page";
import MyPageFrame from "./MyPageLobby/page"

function SideButton(props: { type: mainStates }) {
  const { state, actions } = useContext(UserContext);

  const imgSrc = props.type === mainStates.ChannelLobby ? "sidebutton31.svg" : "sidebutton2.svg";
  const clickhandler = () => {
    if (props.type === mainStates.ChannelLobby)
      actions.setMainState(mainStates.ChannelLobby);
    else
      actions.setMainState(mainStates.gameLobby);
  };

  if (props.type === state.mainState)
    return (
      <button onClick={clickhandler} className="bg-[#E1CAFE] w-[70px] h-[70px] relative ">
        <img src={imgSrc} className="" />
      </button>
    )
  return (
    <button onClick={clickhandler} className="w-[70px] h-[70px] relative">
      <img src={imgSrc} className="" />
    </button>
  )
}

function UserProfile() {
  const { state, actions } = useContext(UserContext);
  const clickHandler = () => {
    actions.setInfoTargetUser(state.userInfo.id);
    actions.setShowInfo(true);
    console.log(state);
  }

  return (
    <button onClick={clickHandler} className="Userprofile w-[228px] h-[46px] px-px justify-start items-center gap-2 inline-flex">
      <img className="w-10 h-10" src={state.userInfo.avatar} />
      <div className="Nickname w-[178px] h-[46px] text-neutral-600 text-[32px] font-normal">{state.userInfo.nickname}</div>
      <div className="Line1 w-[228px] h-[0px] left-[-1px] top-[50.94px] absolute border border-neutral-600"></div>
    </button>
  );
}

export default function MainFrame() {
  const { state, actions } = useContext(UserContext);

  const bypassMe = () => {
    api_get("/user").then((res) => {
      console.log("/user", res);
      const data: userInfo = res.data.data;
      actions.setUserInfo({
        nickname: data.nickname,
        avatar: data.avatar ?? "https://via.placeholder.com/32x32",
        id: data.id,
        token: getAuth()!,
        registered: true,
        winnerGame: data.winnerGame,
        loserGame: data.loserGame,
      });
    });
  };
  const logout = () => {
    sessionStorage.clear();
    window.location.reload();
  }

  useEffect(() => {
    // auth bypass
    const loadedContext: string | null = sessionStorage.getItem("userContext");
    if (loadedContext) {
      const target: savedContext = JSON.parse(loadedContext);
      // restore auth
      setAuth(target.authToken);
      updateSocket();
      actions.setUserInfo(target.userInfo);

      // restore chat states
      for (const userIds in target.mutedUser) {
        const userId = parseInt(userIds);
        actions.setMutedUser({ userId, until: target.mutedUser[userIds].until });
        console.log("muted ", userIds, target.mutedUser[userIds]);
      }
      for (const userIds in target.userChat)
        target.userChat[userIds].map((msg) => { actions.setUserChat(msg); });
      for (const channelIds in target.channelChat)
        target.channelChat[channelIds].map((msg) => { actions.setChannelChat(msg); });
      console.log("restore complete", target);
    }

    if (!getAuth()) {
      // setAuth("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYsIm5pY2tuYW1lIjoidGVzdDYiLCJmdElkIjoiYWRzZmFzc2Rkc2RmIiwiaWF0IjoxNjkyMDA2OTU5LCJleHAiOjE2OTQ1OTg5NTl9.7z3DFG0O6bGPaQb5Wu99bBGoyIiqjW9Y5NYBSqSPGVw");
      // updateSocket();
    }

    const connectionHandler = () => {
      console.log("connected", socket);
      actions.setConnectionState(true);
    }
    const disconnectionHandler = () => {
      console.log("socket disconnected");
      actions.setConnectionState(false);
    }
    if (getAuth()) {
      socket.on('connect', connectionHandler);
      socket.on('disconnect', disconnectionHandler);
    }

    return () => {
      if (getAuth()) {
        socket.off('connect', connectionHandler);
        socket.off('disconnect', disconnectionHandler);
      }
    }
  }, []);

  if (getUserId())
    // if (sessionStorage.getItem("userContext"))
    return (
      <>
        {/* <pre>{JSON.stringify(state.userInfo)}</pre> */}
        <div className="flex-auto gap-5">
          <button onClick={bypassMe}>bypassMe</button>
          <br />
          <button onClick={logout}>logout</button>
        </div>
        {
          // check whether this user is registered
          !getAuth() && (
            <TwoFactor />
          )
        }
        {
          (getAuth()) &&
          <>
            {/* <div className="flex justify-center items-center h-screen bg-gradient-to-bl from-neutral-100 to-slate-50"> */}
            <div className="h-screen flex justify-center items-center">

              {
                state.showInfo && (
                  <div className="z-20 flex justify-center items-center">
                    <div className="z-30 w-[62.5rem] h-[40.63rem]">
                      <MyPageFrame />
                    </div>
                    <div className="z-10 absolute top-0 left-0 w-[100vw] h-[100vh] bg-black opacity-20 backdrop-blur-xl" />
                  </div>
                )
              }

              {/* <div className="flex justify-center items-center w-[1280px] h-[832px] relative gap-[12px]" > */}
              <div className="w-[1280px] h-[832px] absolute">

                {/* userProfile */}
                <div className="top-[3.13rem] left-[60.38rem] absolute w-[14.25rem] h-[2.875rem]">
                  <UserProfile />
                </div>

                {/* sidebuttons */}
                <div className="w-[4.38rem] h-[4.38rem] top-[14.88rem] left-[3.25rem] absolute rounded-tl-[10px] border">
                  <SideButton type={mainStates.ChannelLobby} />
                </div>
                <div className="w-[4.38rem] h-[4.38rem] top-[10.69rem] left-[3.25rem] absolute rounded-tl-[10px] border">
                  <SideButton type={mainStates.gameLobby} />
                </div>

                <div className="absolute w-[800px] h-[650px] top-[8.13rem] left-[7.44rem] z-10 rounded-[10px]">
                  {
                    state.mainState === mainStates.gameLobby ? (
                      <GameLobby />
                    ) : (
                      <ChannelLobby />
                    )
                  }
                </div>

                <div className="w-[300px] h-[650px] absolute top-[8.13rem] left-[58.19rem] border-solid border-dimgray rounded-3xs box-border border-[3px]">
                  <Chat />
                </div>
              </div>
            </div>
          </>
        }
      </>
    )
  else // redirect to oauth uri
    window ? window.location.replace(redirectUri()) : null;
}