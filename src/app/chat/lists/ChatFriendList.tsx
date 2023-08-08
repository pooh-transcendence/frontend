'use client'

import React, { useState, useEffect } from "react";
import { ChatBottomBar } from "../frame/ChatBottomBar";
import { ChatTitle } from "../frame/ChatTitle";
import { UserListComponent } from "./ChatUserListComp";
import { socket, auth } from "@/app/api/socket";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { setFriendList, fetchInitialValue } from "../reducer";

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
    const dispatch = useDispatch();
    const { loading, friendList } = useSelector((state: any) => ({
        loading: state.chatReducer.loading,
        friendList: state.chatReducer.friendList,
      }));

    useEffect(() => {
        dispatch<any>(fetchInitialValue());
        console.log(friendList ?? "friend list is null");
        socket.on("getFriendList", (data)=>{
            console.log(data);
            // dispatch(setFriendList(data.friendList));
        })
    }, [dispatch, friendList]);

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
                {/* <UserListComponent nick="t1" type="list_1" /> */}
                {
                    Object.entries(friendList ?? [{}]).map((data) => {
                        console.log(data);
                        return <UserListComponent nick="asdf" type="list_1" profileImg={"test2"}/>
                    })
                }
                <SmallSeparater str="offline" />
                <BigSeparater str="blocks" />
            </div>
        </div>
    )
}
