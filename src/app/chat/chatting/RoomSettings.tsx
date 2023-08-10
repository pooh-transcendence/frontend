'use client'

import React, {useContext} from "react";
import { UserContext, chatStates } from "@/app/UserContext";
import { socket } from "@/app/api"

export default function RoomSettings(props: { type: "mod_protected" | "mod_public" | "default" }) {
    const {state, actions}=useContext(UserContext);

    const exitButtonHandler=() => {
        actions.setShowChatSetting(false);
    }
    const exitChannelHandler=() => {
        exitButtonHandler();
        socket.emit("leaveChannel", Number(state.channelChattingInfo.id), (ack: any) => {console.log("exited channel", ack)});
        actions.setChatState(chatStates.channelList);
    }
    if (props.type === "mod_protected") {
        return (
            <div className="w-[276px] h-[124px] relative shadow">
                <div className="w-[276px] h-[124px] left-0 top-0 absolute bg-[#FEFEFE] rounded-[10px]" />

                {/* bottom buttons */}
                <div className="left-[42px] top-[79px] absolute justify-start items-end gap-[26px] inline-flex">
                    {/* to public button */}
                    <div className="justify-center items-center gap-px flex">
                        <img className="w-7 h-7 justify-center items-center inline-flex" src="public.svg" />
                        <div className="text-neutral-600 text-base font-bold italic">to public</div>
                    </div>
                    {/* apply button */}
                    {/* TODO: */}
                    <div className="w-[75px] h-8 relative">
                        <img className="w-8 h-8 left-0 top-0 absolute justify-center items-center inline-flex" src="sweep.svg" />
                        <div className="left-[29px] top-[7px] absolute text-neutral-600 text-base font-bold italic">apply</div>
                    </div>
                </div>

                {/* exit channel button */}
                <button onClick={exitChannelHandler} className="pr-[5px] left-[17px] top-[7px] absolute justify-start items-center inline-flex">
                    <img className="w-6 h-6 justify-center items-center inline-flex" src="logout.svg" />
                    <div className="text-neutral-600 text-xs font-bold italic">exit channel</div>
                </button>
                {/* password input form */}
                <div className="w-[220px] h-[25px] left-[28px] top-[45px] absolute">
                    <div className="left-0 top-0 absolute text-neutral-600 text-[15px] font-bold">new pw</div>
                    <div className="w-[85px] h-[21px] left-[92px] top-0 absolute justify-center items-center inline-flex">
                        <input type="password" className="outline-none w-[120px] h-[21px] text-center text-neutral-600 text-[25px] font-normal leading-[21px]" />
                    </div>
                    <img className="absolute left-[50px] top-[25px]" src="password_input_line.svg" />
                </div>
                <button onClick={exitButtonHandler}>
                    <img className="w-6 h-6 left-[238px] top-[7px] absolute justify-center items-center inline-flex" src="cancel.svg" />
                </button>
            </div>
        )
    }
    else if (props.type === "mod_public") {
        return (
            <div className="w-[276px] h-[84px] relative shadow">
                <div className="w-[276px] h-[84px] left-0 top-0 absolute bg-[#FEFEFE] rounded-[10px]" />

                {/* bottom buttons */}
                <div className="left-[33.50px] top-[40px] absolute justify-start items-end gap-[26px] inline-flex">
                    {/* to public button */}
                    <div className="justify-center items-center gap-px flex">
                        <img className="w-7 h-7 justify-center items-center inline-flex" src="lock.svg" />
                        <div className="text-neutral-600 text-base font-bold italic">to protected</div>
                    </div>
                    {/* apply button */}
                    {/* TODO: */}
                    <div className="w-[75px] h-8 relative">
                        <img className="w-8 h-8 left-0 top-0 absolute justify-center items-center inline-flex" src="sweep.svg" />
                        <div className="left-[29px] top-[7px] absolute text-neutral-600 text-base font-bold italic">apply</div>
                    </div>
                </div>

                {/* exit channel button */}
                <button onClick={exitChannelHandler} className="pr-[5px] left-[17px] top-[7px] absolute justify-start items-center inline-flex">
                    <img className="w-6 h-6 justify-center items-center inline-flex" src="logout.svg" />
                    <div className="text-neutral-600 text-xs font-bold italic">exit channel</div>
                </button>
                <button onClick={exitButtonHandler}>
                    <img className="w-6 h-6 left-[238px] top-[7px] absolute justify-center items-center inline-flex" src="cancel.svg" />
                </button>
            </div>
        );
    }
    else // if(props.type === "default")
    {
        return (
            <div className="w-[276px] h-[39px] relative shadow">
                <div className="w-[276px] h-[39px] left-0 top-0 absolute bg-[#FEFEFE] rounded-[10px]" />

                {/* exit channel button */}
                <button onClick={exitChannelHandler} className="pr-[5px] left-[17px] top-[7px] absolute justify-start items-center inline-flex">
                    <img className="w-6 h-6 justify-center items-center inline-flex" src="logout.svg" />
                    <div className="text-neutral-600 text-xs font-bold italic">exit channel</div>
                </button>
                <button onClick={exitButtonHandler}>
                    <img className="w-6 h-6 left-[238px] top-[7px] absolute justify-center items-center inline-flex" src="cancel.svg" />
                </button>
            </div>
        );
    }
}
