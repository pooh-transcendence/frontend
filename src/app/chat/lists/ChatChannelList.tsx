// 'use client'

import React, { useState } from "react";
import { ChatBottomBar } from "../frame/ChatBottomBar";
import { ChatTitle } from "../frame/ChatTitle";

interface ChannelListProps {
    channelName: string,
    channelOwner: string,
    channelPeopleCnt: number,
    channelProfileImg: string
};

const ChannelListComponent=({
    channelName,
    channelOwner,
    channelPeopleCnt,
    channelProfileImg = "https://via.placeholder.com/28x28",
    }: ChannelListProps): JSX.Element => {
    return (
        <>
            <div className="w-[260px] h-[42px] relative">
                <img className="w-7 h-7 left-0 top-[4px] absolute" src={channelProfileImg} />
                <div className="w-[61px] left-[198px] top-0 absolute justify-end items-start inline-flex">
                    <img className="w-4 h-4 relative" src="person.svg" />
                    <div className="text-right text-neutral-600 text-[13px] font-normal">{channelPeopleCnt}</div>
                </div>
                <div className="w-[77px] h-[21px] left-[183px] top-[14px] absolute text-right text-neutral-600 text-[13px] font-normal">{channelOwner}</div>
                <div className="w-[152px] h-5 left-[41px] top-[8px] absolute text-neutral-600 text-xl font-normal">{channelName}<br /></div>
                <img className="absolute left-[34px] top-[39px]" src="channelListComp_underLine.svg" />
            </div>
        </>
    );
};

export const ChatChannelList = (): JSX.Element => {
    return (
        <div className="w-[300px] h-[650px] relative">
            {/* BottomBarSection */}
            <div className="w-[300px] h-[51px] left-0 top-[599px] absolute">
                <ChatBottomBar />
            </div>
            {/* TitleSection */}
            <div className="w-[300px] h-[50px] left-0 top-0 absolute">
                <ChatTitle title="" type="channelList" />
            </div>
            {/* ContentsSection */}
            <div className="w-[260px] py-2 left-[20px] top-[58px] absolute flex-col justify-start items-start gap-[7px] inline-flex">
                <ChannelListComponent channelName="testSans" channelOwner="toj" channelPeopleCnt={123}/>
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