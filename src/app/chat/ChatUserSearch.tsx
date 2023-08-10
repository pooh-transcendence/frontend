import React from "react";
import { UserListComponent } from "./lists/ChatUserListComp";

// TODO: scroll

const ChatUserSearch = (props: {type: "add_friend" | "invite"}): JSX.Element => {
    if(props.type === "add_friend")
    return (
        <div className="w-[276px] h-[476px] relative shadow">
            <div className="w-[276px] h-[476px] left-0 top-0 absolute bg-[#FEFEFE] rounded-[10px]" />
            <div className="w-[247px] h-[368px] left-[15px] top-[93px] absolute flex-col justify-start items-start gap-[7px] inline-flex">
                <UserListComponent nick="1" type="addFriend" />
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
        </div>
    );
    else // if(props.type === "invite")
    {
        return (
            <div className="w-[276px] h-[476px] relative shadow">
            <div className="w-[276px] h-[476px] left-0 top-0 absolute bg-[#FEFEFE] rounded-[10px]" />
            <div className="w-[247px] h-[340px] left-[15px] top-[93px] absolute flex-col justify-start items-start gap-[7px] inline-flex">
                <UserListComponent nick="1" type="inviteFriend_0" />
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
        </div>
        )
    }
}

export default ChatUserSearch;