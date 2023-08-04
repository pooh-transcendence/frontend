// 'use client'

import React, { useState } from "react";
import { ChatBottomBar } from "./ChatBottomBar";
import { ChatTitle } from "./ChatTitle";
import { UserListComponent } from "./ChatUserListComp";

const SmallSeparater=(props: {str: string}): JSX.Element => {
    return (
        <div className="flex-col justify-center items-center gap-[5px] flex">
            <div className="text-center text-neutral-600 text-xs font-normal">{props.str}</div>
        </div>
    );
}
const BigSeparater=(props: {str: string}): JSX.Element => {
    return (
        <div className="w-[69.59px] h-[21px] text-neutral-600 text-base font-normal">{props.str}</div>
    );
}

export const ChatFriendList = (): JSX.Element => {
    return (
        <div className="w-[300px] h-[650px] relative">
            {/* BottomBarSection */}
            <div className="w-[300px] h-[51px] left-0 top-[599px] absolute">
                <ChatBottomBar />
            </div>
            {/* TitleSection */}
            <div className="w-[300px] h-[50px] left-0 top-0 absolute">
                <ChatTitle title="" type="friendList" />
            </div>
            {/* ContentsSection */}
            <div className="w-[300px] h-[650px] left-0 top-0 absolute rounded-[10px] border border-neutral-600" />
            <div className="w-[260px] py-2 left-[20px] top-[58px] absolute flex-col justify-start items-start gap-[7px] inline-flex">
                {/* renderFriends() */}
                <BigSeparater str="friends" />
                <SmallSeparater str="online" />
                <UserListComponent nick="sans2" type="list_1" />
                <UserListComponent nick="sans" type="list_game" />
                <SmallSeparater str="offline" />
                <UserListComponent nick="sans3" type="list_0" />
                <BigSeparater str="blocks" />
                <UserListComponent nick="toj" type="list_block" />
            </div>
        </div>
    )
}

// let testQuery: string[][]=
// [
//     ["recv", "user1", "testText"],
//     ["recv", "user2", "test2"],
//     ["send", "", "testssett"],
// ];

// function renderMessage(): Array<JSX.Element>
// {
//     const res: Array<JSX.Element>=[];
//     for(let i=0; i<testQuery.length; i++)
//     {
//         const [type, nickname, message]=testQuery[i];
//         res.push(<ChatBubble 
//                 side={type==="recv" ? "left":"right"}
//                 nickname={nickname}
//                 messageText={message} />);
//     }
//     return res;
// }