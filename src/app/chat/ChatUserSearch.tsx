 'use client'

import React, { useContext, useState, useEffect } from "react";
import { UserListComponent } from "./lists/UserListComponent";
import { UserContext } from "@/app/UserContext"
import { api_get, api_patch, socket } from "../api";

interface friend {
    id: number,
    nickname: string,
    avatar: string,
    userState: string,
    loserGame: any,
    winnerGame: any,
}

const ChatUserSearch = (props: { type: "add_friend" | "invite" }): JSX.Element => {
    const { state, actions } = useContext(UserContext);
    const [originalList, setOriginalList] = useState<friend[]>([]);
    const [userList, setUserList] = useState<friend[]>([]);

    const onChange = (e: any) => {
        const query: string = e.target.value;
        setUserList(originalList.filter((elem) => elem.nickname.startsWith(query)));
    };

    useEffect(() => {
        // TODO: 더 나은 검색결과를 위해 정렬하는거 조을듯
        if (state.showChatAddFriend)
            socket.emit("allUser", (data: friend[]) => {
                console.log(data);
                const tmpList = data.filter((elem) => elem.id != state.userInfo.id);
                setOriginalList(tmpList);
                setUserList(tmpList)
            });
        else {
            socket.emit("getFriendList", (data: friend[]) => {
                // setOriginalList(data);
                // setUserList(data);
                console.log(data);
            });
            socket.once("getFriendList", (data: friend[]) => {
                setOriginalList(data);
                setUserList(data);
            });
        }
    }, []);
    const exitButtonHandler1 = () => {
        actions.setShowChatAddFriend(false);
    }
    const exitButtonHandler2 = () => {
        actions.setShowChatInvite(false);
    };
    const inviteHandler = () => {
        state.channelChattingInfo.inviteSelectedList.forEach((elem) => {
            socket.emit("inviteUser", { userId: elem, channelId: state.channelChattingInfo.id });
        })
        actions.setShowChatInvite(false);
        actions.setChannelChattingInfo({ ...state.channelChattingInfo, inviteSelectedList: [] });
    }


    if (props.type === "add_friend")
        return (
            <div className="w-[276px] h-[476px] relative shadow">
                <div className="w-[276px] h-[476px] left-0 top-0 absolute bg-[#FEFEFE] rounded-[10px]" />
                <div className="w-[247px] h-[368px] left-[15px] top-[93px] absolute flex-col justify-start items-start gap-[7px] inline-flex">
                    {/* { renderComponent("add_friend") } */}
                    {
                        Object.entries(userList).map(
                            ([idx, friend]) => {
                                return <UserListComponent key={idx} userId={friend.id} nick={friend.nickname} profileImg={friend.avatar} type="addFriend" />
                            })
                    }

                </div>
                <div className="w-6 h-6 left-[238px] top-[7px] absolute" />
                <div className="w-[75px] h-3.5 left-[16px] top-[69px] absolute text-neutral-600 text-[15px] font-normal">result</div>
                {/* search section */}
                <div className="w-[247px] h-[30px] left-[15px] top-[23px] absolute">
                    <div className="left-[7px] top-0 absolute justify-start items-center gap-1 inline-flex">
                        <div className="w-6 h-6 pl-[2.86px] pr-[3.23px] pt-[2.87px] pb-[3.22px] justify-center items-center flex" />
                        <input onChange={onChange} type="text" placeholder="search" className="placeholder:italic outline-none w-[142px] h-[19px] text-neutral-600 text-base font-bold"></input>
                    </div>
                    <img className="absolute left-[2.86px] top-[2.87px]" src="search.svg" />
                    <img className="absolute left-[1.24px] top-[27px]" src="userSearch_line_240px.svg" />
                </div>
                <button onClick={exitButtonHandler1}>
                    <img className="w-6 h-6 left-[238px] top-[7px] absolute justify-center items-center inline-flex" src="cancel.svg" />
                </button>
            </div>
        );
    else // if(props.type === "invite")
    {
        return (
            <div className="w-[276px] h-[476px] relative shadow">
                <div className="w-[276px] h-[476px] left-0 top-0 absolute bg-[#FEFEFE] rounded-[10px]" />
                <div className="w-[247px] h-[340px] left-[15px] top-[93px] absolute flex-col justify-start items-start gap-[7px] inline-flex">
                    {/* { renderComponent("inviteFriend_0") } */}
                    {
                        Object.entries(userList).map(
                            ([idx, friend]) => {
                                return <UserListComponent key={idx} userId={friend.id} nick={friend.nickname} profileImg={friend.avatar} type={state.channelChattingInfo.inviteSelectedList.includes(friend.id) ? "inviteFriend_1" : "inviteFriend_0"} />
                            })
                    }
                </div>
                <div className="w-6 h-6 left-[238px] top-[7px] absolute" />
                <div className="w-[75px] h-3.5 left-[16px] top-[69px] absolute text-neutral-600 text-[15px] font-normal">result</div>
                {/* search section */}
                <div className="w-[247px] h-[30px] left-[15px] top-[23px] absolute">
                    <div className="left-[7px] top-0 absolute justify-start items-center gap-1 inline-flex">
                        <div className="w-6 h-6 pl-[2.86px] pr-[3.23px] pt-[2.87px] pb-[3.22px] justify-center items-center flex" />
                        <input onChange={onChange} type="text" placeholder="search" className="placeholder:italic outline-none w-[142px] h-[19px] text-neutral-600 text-base font-bold"></input>
                    </div>
                    <img className="absolute left-[2.86px] top-[2.87px]" src="search.svg" />
                    <img className="absolute left-[1.24px] top-[27px]" src="userSearch_line_240px.svg" />
                </div>
                {/* invite button */}
                <button onClick={inviteHandler} className="left-[101px] top-[439px] w-[75px] h-8 relative">
                    <img className="w-8 h-8 left-0 top-0 absolute" src="sweep.svg" />
                    <div className="left-[29px] top-[7px] absolute text-neutral-600 text-base font-bold italic"> invite</div>
                </button>
                <button onClick={exitButtonHandler2}>
                    <img className="w-6 h-6 left-[238px] top-[7px] absolute justify-center items-center inline-flex" src="cancel.svg" />
                </button>
            </div>
        )
    }
}

export default ChatUserSearch;
