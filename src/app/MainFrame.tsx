'use client'
import React, { useContext, useEffect } from "react"
import Chat from "./chat/page"

import { savedContext } from "./UserProvider"
import { UserContext, mainStates, targetChannelInfo, userInfo } from "@/app/UserContext"
import { getAuth, setUserId, getUserId, redirectUri, setAuth, socket, updateSocket, api_get } from '@/app/api';
import TwoFactor from "./TwoFactor/page";
import ChannelLobby from "./ChannelLobby/page";
import GameLobby from "./GameLobby/page";

function SideButton(props: {type: mainStates}) {
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
  const logout= () => {
    sessionStorage.clear();
    window.location.reload();
  } 

  useEffect(() => {
    // auth bypass
    const loadedContext: string | null=sessionStorage.getItem("userContext");
    if(loadedContext)
    {
      const target: savedContext=JSON.parse(loadedContext);
      // restore auth
      setAuth(target.authToken);
      updateSocket();
      actions.setUserInfo(target.userInfo);

      // restore chat states
      for(const userIds in target.mutedUser)
      {
        const userId=parseInt(userIds);
        actions.setMutedUser({userId, until: target.mutedUser[userIds].until});
        console.log("muted ", userIds, target.mutedUser[userIds]);
      }
      for(const userIds in target.userChat)
        target.userChat[userIds].map((msg) => { actions.setUserChat(msg); });
      for(const channelIds in target.channelChat)
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
    return (
      <>
        <pre>{JSON.stringify(state.userInfo)}</pre>
        <div className="flex-auto gap-5">
          <button onClick={bypassMe}>bypassMe</button>
          <br/>
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
            <div className="flex justify-center items-center h-screen bg-gradient-to-bl from-neutral-100 to-slate-50">
              
              {/* sideButtons */}
              <div className="Sidebutton2 w-[70px] h-[70px] left-[52px] top-[238px] absolute rounded-tl-[10px] border">
                <SideButton type={mainStates.ChannelLobby}/>
              </div>
              <div className="Sidebutton2 w-[70px] h-[70px] left-[52px] top-[171px] absolute rounded-tl-[10px] border">
              <SideButton type={mainStates.gameLobby}/>
              </div>

              <div className="flex justify-center items-center w-[1280px] h-[832px] relative gap-[12px]" >
                <div className="w-[800px] h-[650px] z-1 rounded-[10px]">
                  {
                    state.mainState === mainStates.gameLobby ? (
                      <GameLobby/>
                    ) : (
                      <ChannelLobby/>
                    )
                  }
                </div>
                <div className="w-[300px] h-[650px] rounded-3xs box-border border-[3px] border-solid border-dimgray">
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