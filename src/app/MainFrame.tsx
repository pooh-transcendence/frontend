'use client'
import React, { useContext, useEffect } from "react"
import Chat from "./chat/page"

import { UserContext } from "@/app/UserContext"
import { getAuth, getUserId, redirectUri, setAuth, socket, updateSocket } from '@/app/api';
import UserProvider from "./UserProvider";
import TwoFactor from "./TwoFactor/page";

export default function MainFrame() {
  const { state, actions } = useContext(UserContext);

  useEffect(() => {
    // setAuth("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwibmlja25hbWUiOiJ0ZXN0MiIsImZ0SWQiOiJ0am9hc2RmIiwiaWF0IjoxNjkxOTcyODc1LCJleHAiOjE2OTQ1NjQ4NzV9.hMSX82U4JZtvw9QpXyDpXI5jIwDsKIDKIbQ3uLKYbnk");
    // updateSocket();

    const connectionHandler = () => {
      console.log("connected", socket);
      actions.setConnectionState(true);
    }
    const disconnectionHandler = () => {
      console.log("socket disconnected");
      actions.setConnectionState(false);
    
    }
    if(getAuth())
    {
      socket.on('connect', connectionHandler);
      socket.on('disconnect', disconnectionHandler);
    }

    return () => {
      if(getAuth())
      {
        socket.off('connect', connectionHandler);
        socket.off('disconnect', disconnectionHandler);
      }
    }
  }, []);


  if(getUserId())
    return (
      <>
        <pre>{JSON.stringify(state.userInfo)}</pre>
        {
          // check whether this user is registered
          (!getAuth()) && 
          <div>
            two-factor auth modal activated
            <TwoFactor/>
          </div>
        }
        {
          (getAuth()) && 
          <UserProvider>
            <div className="flex justify-center items-center h-screen bg-gradient-to-bl from-neutral-100 to-slate-50">
              <div className="flex justify-center items-center w-[1280px] h-[832px] relative gap-[12px]" >
                <div className="w-[800px] h-[650px] z-1 rounded-[10px] border border-neutral-600">
                  {/* <Somewhat/> */}
                </div>
                <div className="w-[300px] h-[650px] rounded-[10px] border border-neutral-600">
                  <Chat />
                </div>
              </div>
            </div>
          </UserProvider>
        }
      </>
    )
  else // redirect to oauth uri
    window.location.replace(redirectUri());
}