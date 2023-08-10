'use client'

import React, { useState, useEffect, useContext } from "react";
import { ChatBottomBar } from "../frame/ChatBottomBar";
import { ChatTitle } from "../frame/ChatTitle";
import { UserListComponent } from "./ChatUserListComp";
import { socket } from "@/app/api";
import { UserContext, chatStates } from "@/app/UserContext";


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

interface friend
{
    id: string;
    nickname: string;
    avatar: string;
    userState: "ONLINE" | "OFFLINE" | "GAMING";
}

interface block
{
    id: string;
    nickname: string;
    avatar: string;
}

function makeUserListComp(friend: friend){
    const {state, actions} = useContext(UserContext);

    friend={...friend, id: "2"}; // for debug
    const gotoChat= () => {
        actions.setChatState(chatStates.friendChat);
        actions.setFriendChattingInfo(friend);
        console.log("change to friendChat", friend.id);
    }
    return (
        <button onClick={gotoChat}>
            <UserListComponent userId={friend.id} nick={friend.nickname} type={friend.userState} profileImg={friend.avatar}/>
        </button>
    )
}

function makeBlockListComp(block: block){
    return (
            <UserListComponent userId={block.id} nick={block.nickname} type="list_block" profileImg={block.avatar}/>
    )
}

export const ChatFriendList = (): JSX.Element => {
    const {state, actions} = useContext(UserContext);
    const [friendList, setFriendList] = useState<friend[]>([]);
    const [blockList, setBlockList] = useState<block[]>([]);

    useEffect(() => {
        socket.emit("getFriendList", (data: friend[]) => {
            setFriendList(data);
        });
        socket.emit("getBlockList", (data: block[]) => {
            setBlockList(data);
        });
        console.log("friendList", friendList);
        console.log("blockList", blockList);
    }, []);

    return (
        <div className="w-[18.75rem] h-[40.625rem] relative">
            {/* BottomBarSection */}
            <div className="w-[18.75rem] h-[3.1875rem] left-0 top-[37.4375rem] absolute">
                <ChatBottomBar />
            </div>
            {/* TitleSection */}
            <div className="w-[18.75rem] h-[3.125rem] left-0 top-0 absolute">
                <ChatTitle title="" type="friendList" />
            </div>
            {/* ContentsSection */}
            <div className="w-[16.25rem] py-2 left-[1.25rem] top-[3.625rem] absolute flex-col justify-start items-start gap-[0.4375rem] inline-flex">
                {/* renderFriends() */}
                <BigSeparater str="friends" />
                <SmallSeparater str="online" />
                {
                    Object.entries(friendList.filter(friend => friend.userState === "ONLINE" || friend.userState === "GAMING") ?? [{}]).map(
                        ([idx, friend]) => makeUserListComp(friend))
                }
                <SmallSeparater str="offline" />
                {
                    Object.entries(friendList.filter(friend => friend.userState === "OFFLINE") ?? [{}]).map(
                        ([idx, friend]) => makeUserListComp(friend))
                }
                <BigSeparater str="blocks" />
                {
                    Object.entries(blockList).map(
                        ([idx, block]) => makeBlockListComp(block))
                }
            </div>
        </div>
    )
}
