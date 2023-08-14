'use client'

import React, { useContext, useState, useEffect} from "react";
import { UserListComponent } from "./lists/UserListComponent";
import { UserContext } from "@/app/UserContext"
import { api_get, socket } from "../api";

interface friend
{
    id: string,
    nickname: string,
    avatar: string,
    userState: string,
    loserGame: any,
    winnerGame: any,
}

const ChatUserSearch = (props: {type: "add_friend" | "invite"}): JSX.Element => {
    const {state, actions}=useContext(UserContext);
    const [friendList, setFriendList] = useState<friend[]>([]);
    const [userList, setUserList] = useState<any[]>([]);

    useEffect(() => {
        if(state.showChatAddFriend)
        {
            // api_get("/user/AllUser").then((data) => {
            socket.emit("AllUser", (data: any[]) => {
               setUserList(data);
               console.log(data);
            //    console.log(data.data);
            });
        }
        else
        {
            socket.emit("getFriendList", (data: friend[]) => {
                setFriendList(data);
            });
        }
    }, []);
    const exitButtonHandler1=() => {
        actions.setShowChatAddFriend(false);
    }
    const exitButtonHandler2=() => {
        actions.setShowChatInvite(false);
    };


    if(props.type === "add_friend")
    return (
        <div className="w-[276px] h-[476px] relative shadow">
            <div className="w-[276px] h-[476px] left-0 top-0 absolute bg-[#FEFEFE] rounded-[10px]" />
            <div className="w-[247px] h-[368px] left-[15px] top-[93px] absolute flex-col justify-start items-start gap-[7px] inline-flex">
                {/* { renderComponent("add_friend") } */}
                <UserListComponent userId="3" nick="test3" profileImg="" type="addFriend"/>
            </div>
            <div className="w-6 h-6 left-[238px] top-[7px] absolute" />
            <div className="w-[75px] h-3.5 left-[16px] top-[69px] absolute text-neutral-600 text-[15px] font-normal">result</div>
            {/* search section */}
            <div className="w-[247px] h-[30px] left-[15px] top-[23px] absolute">
                <div className="left-[7px] top-0 absolute justify-start items-center gap-1 inline-flex">
                    <div className="w-6 h-6 pl-[2.86px] pr-[3.23px] pt-[2.87px] pb-[3.22px] justify-center items-center flex" />
                    <input type="text" placeholder="search" className="placeholder:italic outline-none w-[142px] h-[19px] text-neutral-600 text-base font-bold"></input>
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
                    Object.entries(friendList).map(
                        ([idx, friend]) => {
                            return <UserListComponent userId={friend.id} nick={friend.nickname} profileImg={friend.avatar} type="inviteFriend_0" />
                    })
                }
            </div>
            <div className="w-6 h-6 left-[238px] top-[7px] absolute" />
            <div className="w-[75px] h-3.5 left-[16px] top-[69px] absolute text-neutral-600 text-[15px] font-normal">result</div>
            {/* search section */}
            <div className="w-[247px] h-[30px] left-[15px] top-[23px] absolute">
                <div className="left-[7px] top-0 absolute justify-start items-center gap-1 inline-flex">
                    <div className="w-6 h-6 pl-[2.86px] pr-[3.23px] pt-[2.87px] pb-[3.22px] justify-center items-center flex" />
                    <input type="text" placeholder="search" className="placeholder:italic outline-none w-[142px] h-[19px] text-neutral-600 text-base font-bold"></input>
                </div>
                <img className="absolute left-[2.86px] top-[2.87px]" src="search.svg" />
                <img className="absolute left-[1.24px] top-[27px]" src="userSearch_line_240px.svg" />
            </div>
            {/* invite button */}
            <div className="left-[101px] top-[439px] w-[75px] h-8 relative">
                <img className="w-8 h-8 left-0 top-0 absolute" src="sweep.svg" />
                <div className="left-[29px] top-[7px] absolute text-neutral-600 text-base font-bold italic"> invite</div>
            </div>
            <button onClick={exitButtonHandler2}>
                    <img className="w-6 h-6 left-[238px] top-[7px] absolute justify-center items-center inline-flex" src="cancel.svg" />
            </button>
        </div>
        )
    }
}

export default ChatUserSearch;