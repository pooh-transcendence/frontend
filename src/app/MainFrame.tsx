'use client'
import React, { useContext, useEffect } from "react"
import Chat from "./chat/page"

import { UserContext } from "@/app/UserContext"
import { socket } from '@/app/api';
import UserProvider from "./UserProvider";

export default function MainFrame() {
  const {state, actions}=useContext(UserContext);

  useEffect(() => {
    const connectionHandler=() => {
      console.log("connected", socket);
      actions.setConnectionState(true);
    }
    socket.on('connect', connectionHandler);

    const disconnectionHandler=() => {
      console.log("socket disconnected");
      actions.setConnectionState(false);
    }
    socket.on('disconnect', disconnectionHandler);

    return () => {
      socket.off('connect', connectionHandler);
      socket.off('disconnect', disconnectionHandler);
    }
  }, []);

  return (
      <UserProvider>
        <div className="flex justify-center items-center h-screen bg-gradient-to-bl from-neutral-100 to-slate-50">
          <div className="flex justify-center items-center w-[1280px] h-[832px] relative gap-[12px]" >
            <div className="w-[800px] h-[650px] z-1 rounded-[10px] border border-neutral-600">
              {/* <Somewhat/> */}
            </div>
            <div className="w-[300px] h-[650px] rounded-[10px] border border-neutral-600">
              <Chat/>
            </div>
          </div>
        </div>
      </UserProvider>
    )
  }