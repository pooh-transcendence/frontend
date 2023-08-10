'use client'

import React, { useContext } from "react";
import { UserContext, chatStates} from '@/app/UserContext';

interface Props {
    title: string,
    type: "channelChat" | "friendChat" | "channelList" | "friendList",
}

export const ChatTitle = ({
    title = "testNickasdf",
    type,
}: Props): JSX.Element => {
    
    const {state, actions}=useContext(UserContext);
    
    const chatBackHandler=() => {
        console.log("back to chatlist");
        actions.setChatState(chatStates.friendList);
    };
    const channelBackHandler=() => {
        console.log("back to channellist");
        actions.setChatState(chatStates.channelList);
    };

    return (
        <section>
            {type == "channelChat" && (
                <div className="w-[18.75rem] h-[3.125rem] relative">
                    <div className="w-[18.75rem] h-[3.125rem] left-0 top-0 absolute bg-slate-100 rounded-tl-[0.625rem] rounded-tr-[0.625rem]" />
                    <div className="w-[12.1875rem] h-6 left-[3.214375rem] top-[1.1875rem] absolute text-neutral-600 text-base font-normal">{title}<br /><br /></div>
                    <button onClick={channelBackHandler} className="z-10 w-[1.4375rem] h-[1.4375rem] left-[1rem] top-[1.0625rem] absolute">
                        <img className="w-[1.4375rem] h-[1.4375rem] left-0 top-0 absolute" src="backButton.svg" />
                    </button>
                    <img className="w-[1.5625rem] h-[1.5625rem] left-[14rem] top-[1rem] absolute justify-center items-center inline-flex" src="settings.svg" />
                    <img className="w-7 h-7 left-[16.125rem] top-[0.875rem] absolute justify-center items-center inline-flex" src="persons_add.svg" />
                </div>
            )}
            {type == "channelList" && (
                <div className="w-[18.75rem] h-[3.125rem] relative">
                    <div className="w-[18.75rem] h-[3.125rem] left-0 top-0 absolute bg-slate-100 rounded-tl-[0.625rem] rounded-tr-[0.625rem]" />
                    <div className="w-[12.1875rem] h-6 left-[3.214375rem] top-[1.1875rem] absolute text-neutral-600 text-base font-normal">channel<br /><br /></div>
                    <div className="w-[1.4375rem] h-[1.4375rem] left-[1rem] top-[1.0625rem] absolute">
                        <img className="w-[1.4375rem] h-[1.4375rem] left-0 top-0 absolute" src="forum.svg" />
                    </div>
                </div>
            )}
            {type == "friendChat" && (
                <div className="w-[18.75rem] h-[3.125rem] relative">
                    <div className="w-[18.75rem] h-[3.125rem] left-0 top-0 absolute bg-slate-100 rounded-tl-[0.625rem] rounded-tr-[0.625rem]" />
                   <div className="w-[12.1875rem] h-6 left-[3.214375rem] top-[1.1875rem] absolute text-neutral-600 text-base font-normal">{title}<br /><br /></div>
                    <button onClick={chatBackHandler} className="z-10 w-[1.4375rem] h-[1.4375rem] left-[1rem] top-[1.0625rem] absolute">
                        <img className="w-[1.4375rem] h-[1.4375rem] left-0 top-0 absolute" src="backButton.svg" />
                    </button> 
                    <img className="w-7 h-7 left-[16.125rem] top-[0.875rem] absolute justify-center items-center inline-flex" src="settings.svg" />
                </div>
            )}
            {type == "friendList" && (
                <div className="w-[18.75rem] h-[3.125rem] relative">
                    <div className="w-[18.75rem] h-[3.125rem] left-0 top-0 absolute bg-slate-100 rounded-tl-[0.625rem] rounded-tr-[0.625rem]" />
                    <div className="w-[12.1875rem] h-6 left-[3.214375rem] top-[1.1875rem] absolute text-neutral-600 text-base font-normal">friends<br /><br /></div>
                    <div className="w-[1.4375rem] h-[1.4375rem] left-[1rem] top-[1.0625rem] absolute">
                        <img className="w-[1.4375rem] h-[1.4375rem] left-0 top-0 absolute" src="group.svg" />
                    </div>
                    <img className="w-7 h-7 left-[16.125rem] top-[0.875rem] absolute justify-center items-center inline-flex" src="group_add.svg" />
                </div>
            )}
        </section>
    )
};