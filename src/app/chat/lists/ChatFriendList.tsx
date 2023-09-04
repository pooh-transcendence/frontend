'use client'
// 안 읽은 채널에 알림 못 띄우나?
import React, { useState, useEffect, useContext } from "react";
import { ChatBottomBar } from "../frame/ChatBottomBar";
import { ChatTitle } from "../frame/ChatTitle";
import { UserListComponent } from "./UserListComponent";
import { api_get, socket } from "@/app/api";
import { UserContext, chatStates } from "@/app/UserContext";
import ChatUserSearch from "../ChatUserSearch";

const SmallSeparater = (props: { str: string }): JSX.Element => {
    return (
        <div className="flex-col justify-center items-center gap-[5px] flex">
            <div className="text-center text-neutral-600 text-xs font-normal">{props.str}</div>
        </div>
    );
}

const BigSeparater = (props: { str: string }): JSX.Element => {
    return (
        <div className="w-[69.59px] h-[21px] text-neutral-600 text-base font-normal">{props.str}</div>
    );
}

interface friend {
    id: number;
    nickname: string;
    avatar: string;
    userState: "ONLINE" | "OFFLINE" | "GAMING";
}

interface block {
    id: number;
    nickname: string;
    avatar: string;
}

function makeUserListComp(friend: friend) {
    const { state, actions } = useContext(UserContext);
    // console.log("makeUserListComp", friend);
    const gotoChat = () => {
        actions.setChatState(chatStates.friendChat);
        actions.setFriendChattingInfo(friend);
        // console.log("change to friendChat", friend.id);
    }
    return (
        <button key={friend.id} onClick={gotoChat}>
            <UserListComponent userId={friend.id} nick={friend.nickname} type={friend.userState} profileImg={friend.avatar} />
        </button>
    )
}

function makeBlockListComp(block: block) {
    return (
        <UserListComponent key={block.id} userId={block.id} nick={block.nickname} type="list_block" profileImg={block.avatar} />
    )
}

export const ChatFriendList = (): JSX.Element => {
    const { state, actions } = useContext(UserContext);
    const [friendList, setFriendList] = useState<friend[]>([]);
    const [blockList, setBlockList] = useState<block[]>([]);

    useEffect(() => { // only first render
        socket.emit("getFriendList");
        socket.emit("getBlockList");
        // console.log("ChatFriendList state", state);

        const friendListListener = (friendList: friend[]) => {

            setFriendList(friendList);
            console.log("friendListListener", friendList);
        }
        const blockListListener = (blockList: block[]) => {
            setBlockList(blockList);
            console.log("blockListListener", blockList);
        }
        socket.once("getFriendList", friendListListener);
        socket.once("getBlockList", blockListListener);
    }, []);

    useEffect(() => {
        const addFriendToFriendList = (newFriend: friend) => {
            console.log("addFriendToFriendList", newFriend, friendList);
            setFriendList([...friendList, newFriend]);
        }
        const deleteBlockToBlockList = (blockedFriend: block) => { // delete block from friendlist
            console.log("deleteBlockToBlockList", blockedFriend);
            setBlockList(blockList.filter((elem) => { elem.id != blockedFriend.id }));
        }
        const createBlockToBlockList = (blockedFriend: block) => {
            console.log("createBlockToBlockList", blockedFriend);
            setBlockList([...blockList, blockedFriend]);
            // setFriendList(friendList.map((elem) => )) // delete
        }
        const changeFriendState = (changedFriend: friend) => {
            setFriendList(friendList.map((elem) => {
                if (elem.id == changedFriend.id) {
                    let tmp = elem;
                    tmp.userState = changedFriend.userState;
                    return tmp;
                }
                return elem;
            }))
        }

        // only for rerendering
        socket.on("addFriendToFriendList", addFriendToFriendList);
        socket.on("deleteBlockToBlockList", deleteBlockToBlockList);
        socket.on("createBlockToBlockList", createBlockToBlockList);
        socket.on("changeFriendState", changeFriendState);

        return () => {
            socket.off("addFriendToFriendList", addFriendToFriendList);
            socket.off("deleteBlockToBlockList", deleteBlockToBlockList);
            socket.off("createBlockToBlockList", createBlockToBlockList);
            socket.off("changeFriendState", changeFriendState);
        };

    }, [friendList, blockList]);

    return (
        <>
            <div className="w-[18.75rem] h-[40.625rem] relative">

                <div className="w-[300px] h-[650px] left-0 top-0 absolute rounded-[10px] border-neutral-600 border-[3px]" />

                {/* BottomBarSection */}
                <div className="w-[18.75rem] h-[3.125rem] left-0 top-[37.5rem] absolute">
                    <ChatBottomBar />
                </div>

                {/* TitleSection */}
                <div className="w-[18.75rem] h-[3.125rem] left-0 top-0 absolute">
                    <ChatTitle title="" type="friendList" id={-1} />
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
                <div className="top-[87px] left-[12px] absolute">
                    {
                        (state.showChatAddFriend && <ChatUserSearch type="add_friend" />)
                    }
                </div>
            </div>
        </>
    )
}
