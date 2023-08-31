'use client'

import React, { useState, useEffect, useContext, useRef } from "react";
import { ChatTitle } from '@/app/chat/frame/ChatTitle';
import { ChatBubble } from '@/app/chat/chatting/ChatBubble';
import { socket } from "@/app/api";
import { UserContext } from "@/app/UserContext";
import UserInfo from "@/app/chat/lists/UserInfo";
import RoomSettings from "@/app/chat/chatting/RoomSettings";
import ChatUserSearch from "@/app/chat/ChatUserSearch";

interface Props {
    title: string,
}

export const ChatChannel = ({
    title,
}: Props): JSX.Element => {

    const { state, actions } = useContext(UserContext);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const openUserInfo = (id: number) => {
        console.log("open " + id + "'s userinfo");
        actions.setShowChatUserInfo(true);
        actions.setChatTargetUser(id);
    };
    const closeUserInfo = () => {
        actions.setShowChatUserInfo(false);
    };

    useEffect(() => {
        scrollRef.current?.scrollIntoView();
        renderMessage();
    }, [state.channelChat]); // 어떻게 해야 보고있는 채팅이 업데이트 될때만 리랜더할 수 있을까?

    const onChange = (e: any) => { setText(e.target.value); }
    const handleOnKeyPress = (e: any) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            submitText();
        }
    }

    function renderMessage(): Array<JSX.Element> {
        // console.log("render", state.channelChat[state.channelChattingInfo.id]);
        const res: Array<JSX.Element> = [];
        if (!state.channelChat[state.channelChattingInfo.id]) return res;
        state.channelChat[state.channelChattingInfo.id].forEach((msg, idx) => {
            const { nickname, message, userId } = msg;
            if (nickname && nickname !== state.userInfo.nickname)
                res.push(
                    <button onClick={() => openUserInfo(userId)} className="text-left" key={idx}>
                        <ChatBubble
                            side={"left"}
                            nickname={nickname}
                            messageText={message}
                            key={idx} />
                    </button>
                );
            else if(nickname)
                res.push(
                    <ChatBubble
                        side={"right"}
                        nickname={nickname}
                        messageText={message}
                        key={idx} />
                )
            else
                res.push(
                <ChatBubble
                    side={"center"}
                    nickname={"systemMessage"}
                    messageText={message}
                    key={idx} />
                )
        });
        return res;
    }

    const [text, setText] = useState("");
    const submitText = () => {
        if (text === "") return;
        // sender side
        actions.setChannelChat({ channelId: state.channelChattingInfo.id, userId: state.userInfo.id, nickname: state.userInfo.nickname, message: text });

        // opponent side
        // console.log("send to", Number(state.channelChattingInfo.id));
        socket.emit("message", { channelId: Number(state.channelChattingInfo.id), message: text + ' ' });
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
                    <div ref={scrollRef} />
                </div>
                {/* title section */}
                <ChatTitle type="channelChat" title={title} id={state.channelChattingInfo.id} />
                {/* frame */}
                <div className="w-[300px] h-[650px] left-0 top-0 absolute rounded-[10px] border border-neutral-600" />

                {/* userInfoModal */}
                {
                    state.showChatUserInfo &&
                    <div className="absolute z-20 top-[256px] left-[12px]">
                        <UserInfo type="default" />
                    </div>
                }
                {/* chatSettingModal */}
                {
                    state.showChatSetting && (
                        state.channelChattingInfo.userType == "MODERATOR" && state.channelChattingInfo.channelType == "PROTECTED" ?
                            <div className="z-20 absolute top-[16.44rem] left-[0.75rem]">
                                <RoomSettings roomType={state.channelChattingInfo.channelType} userType={state.channelChattingInfo.userType} />
                            </div> :
                            state.channelChattingInfo.userType == "MODERATOR" && state.channelChattingInfo.channelType == "PUBLIC" ?
                                <div className="z-20 absolute top-[17.69rem] left-[0.75rem]">
                                    <RoomSettings roomType={state.channelChattingInfo.channelType} userType={state.channelChattingInfo.userType} />
                                </div> :
                                // default
                                <div className="z-20 absolute top-[19.06rem] left-[0.75rem]">
                                    <RoomSettings roomType={state.channelChattingInfo.channelType} userType={state.channelChattingInfo.userType} />
                                </div>
                    )
                }
                {/* chatInviteModal */}
                {
                    state.showChatInvite &&
                    <div className="z-20 absolute top-[5.4375rem] left-[0.75rem]">
                        <ChatUserSearch type="invite" />
                    </div>
                }
            </div>
        </>
    )
}
