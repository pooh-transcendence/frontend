'use client'

import React, { useState, useEffect, useContext, useRef } from "react";
import { ChatTitle } from '../frame/ChatTitle' 
import { ChatBubble } from './ChatBubble'
import { socket } from "@/app/api";
import { UserContext } from "@/app/UserContext";
import UserInfo from "@/app/chat/lists/UserInfo";
import RoomSettings from "./RoomSettings";
import ChatUserSearch from "../ChatUserSearch";

interface Props{
    title: string,
}

export const ChatFriend = ({
    title,
}: Props): JSX.Element => {
    
    const {state, actions}=useContext(UserContext);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    
    const openUserInfo=(id: string) => {
        console.log("open "+id+"'s userinfo");
        actions.setShowChatUserInfo(true);
        actions.setChatTargetUser(id);
    };
    const closeUserInfo=() => {
        actions.setShowChatUserInfo(false);
    };

    useEffect(() => {            
        scrollRef.current?.scrollIntoView();
        renderMessage();
      }, [state.userChat]); // 어떻게 해야 보고있는 채팅이 업데이트 될때만 리랜더할 수 있을까?
      
    const onChange=(e: any)=>{setText(e.target.value);}
    const handleOnKeyPress=(e: any)=>{
        if(e.key === 'Enter')
        {
            e.preventDefault();
            submitText();
        }
    }

    function renderMessage(): Array<JSX.Element>
    {
        console.log("render", state.userChat[state.friendChattingInfo.id] ?? []);
        const res: Array<JSX.Element>=[];
        if(!state.userChat[state.friendChattingInfo.id]) return res;
        state.userChat[state.friendChattingInfo.id].forEach((msg, idx) => {
            const {nickname, message, userId}=msg;
            if(nickname!==state.userInfo.nickname)
                res.push(
                    <button onClick={()=>openUserInfo(userId)} className="text-left" key={idx}>
                        <ChatBubble
                            side={"left"}
                            nickname={nickname}
                            messageText={message}
                            key={idx} />
                    </button>
                );
            else
                res.push(
                    <ChatBubble
                    side={"right"}
                    nickname={nickname}
                    messageText={message}
                    key={idx} />
                )
        });
        return res;
    }
    
    const [text, setText]=useState("");
    const submitText=()=>{
        if(text==="") return;
        // sender side
        actions.setUserChat({userId: state.friendChattingInfo.id, nickname: state.userInfo.nickname, message: text});

        // opponent side
        console.log("send to", Number(state.friendChattingInfo.id));
        socket.emit("message", {userId : state.friendChattingInfo.id, message: text});
        setText("");
    }

    return (
        <>
            <div className="w-[300px] h-[650px] relative">
                {/* writing section */}
                <div className="w-[300px] h-[70px] left-0 top-[580px] absolute">
                    <div className="w-[300px] h-[70px] left-0 top-0 absolute bg-slate-100 rounded-[10px]" />
                    <form onKeyDown={handleOnKeyPress}>
                        {/* TODO: wrap text */}
                        <img onClick={submitText} className="z-10 w-6 h-6 left-[260px] top-[23px] absolute justify-center items-center inline-flex" src="send.svg" />
                        <input onChange={onChange} type="text" value={text} placeholder="test" className="z-10 outline-none w-[221px] h-[50px] left-[24px] top-[10px] absolute bg-slate-100 text-black font-normal" />
                    </form>
                </div>
                {/* chat container*/}
                {/* <div className="w-[270px] h-[511px] left-[15px] top-[59px] absolute flex-col justify-start items-end gap-[5px] inline-flex"> */}
                <div className="scrollbar-hide overflow-auto z-10 w-[270px] h-[511px] left-[15px] top-[59px] absolute flex-col justify-start items-end gap-[6px] inline-flex">
                    {renderMessage()}
                    <div ref={scrollRef}/>
                </div>
                {/* title section */}
                <ChatTitle type="friendChat" title={title} id={state.friendChattingInfo.id}/>
                {/* frame */}

                {/* userInfoModal */}
                <div className="z-20 absolute top-[256px] left-[12px]">
                {
                    state.showChatUserInfo && 
                        <UserInfo type="default"/>
                    }   
                </div>
            </div>
        </>
    )
}