'use client'

import React, { useContext } from "react";
import { UserContext, chatStates } from '@/app/UserContext';

interface Props {
    title: string,
    id: number,
    type: "channelChat" | "friendChat" | "channelList" | "friendList",
}

export const ChatTitle = ({
    title = "testNickasdf",
    id = -1,
    type,
}: Props): JSX.Element => {

    const { state, actions } = useContext(UserContext);

    const chatBackHandler = () => {
        console.log("back to chatlist");
        actions.setChatState(chatStates.friendList);
    };
    const channelBackHandler = () => {
        console.log("back to channellist");
        actions.setChatState(chatStates.channelList);
    };
    const channelSettingHandler = () => {
        actions.setShowChatSetting(true);
    };
    const channelInviteHandler = () => {
        actions.setShowChatInvite(true);
    }
    const chatUserInfoHandler = () => {
        actions.setShowChatUserInfo(true);
        actions.setChatTargetUser(id);
    }
    const addFriendHandler = () => {
        actions.setShowChatAddFriend(true);
    }

    return (
        <section>
            {type == "channelChat" && (
                <div className="w-[18.75rem] h-[3.125rem] relative">
                    <div className="w-[18.75rem] h-[3.125rem] left-[-0.18rem] top-0 absolute bg-slate-100 rounded-tl-[0.625rem] rounded-tr-[0.625rem]" />
                    <div className="w-[12.1875rem] h-6 left-[3.214375rem] top-[1.1875rem] absolute text-neutral-600 text-base font-normal">{title}<br /><br /></div>
                    <button onClick={channelBackHandler} className="z-10 w-[1.4375rem] h-[1.4375rem] left-[1rem] top-[1.0625rem] absolute">
                        <img className="w-[1.4375rem] h-[1.4375rem] left-0 top-0 absolute" src="backButton.svg" />
                    </button>
                    <button onClick={channelSettingHandler} className="z-10">
                        <img className="z-10 w-[1.5625rem] h-[1.5625rem] left-[14rem] top-[1rem] absolute justify-center items-center inline-flex" src="settings.svg" />
                    </button>
                    <button onClick={channelInviteHandler} className="z-10">
                        <img className="z-10 w-7 h-7 left-[16.125rem] top-[0.875rem] absolute justify-center items-center inline-flex" src="persons_add.svg" />
                    </button>
                </div>
            )}
            {type == "channelList" && (
                <div className="w-[18.75rem] h-[3.125rem] relative">
                    <div className="w-[18.75rem] h-[3.125rem] left-[-0.18rem] top-0 absolute bg-slate-100 rounded-tl-[0.625rem] rounded-tr-[0.625rem]" />
                    <div className="w-[12.1875rem] h-6 left-[3.214375rem] top-[1.1875rem] absolute text-neutral-600 text-base font-normal">channel<br /><br /></div>
                    <div className="w-[1.4375rem] h-[1.4375rem] left-[1rem] top-[1.0625rem] absolute">
                        <img className="w-[1.4375rem] h-[1.4375rem] left-0 top-0 absolute" src="forum.svg" />
                    </div>
                </div>
            )}
            {type == "friendChat" && (
                <div className="w-[18.75rem] h-[3.125rem] relative">
                    <div className="w-[18.75rem] h-[3.125rem] left-[-0.18rem] top-0 absolute bg-slate-100 rounded-tl-[0.625rem] rounded-tr-[0.625rem]" />
                    <button onClick={chatUserInfoHandler} className="text-left">
                        <div className="w-[12.1875rem] h-6 left-[3.214375rem] top-[1.1875rem] absolute text-neutral-600 text-base font-normal">{title}<br /><br /></div>
                    </button>
                    <button onClick={chatBackHandler} className="z-10 w-[1.4375rem] h-[1.4375rem] left-[1rem] top-[1.0625rem] absolute">
                        <img className="w-[1.4375rem] h-[1.4375rem] left-0 top-0 absolute" src="backButton.svg" />
                    </button>
                    {/* <img className="w-7 h-7 left-[16.125rem] top-[0.875rem] absolute justify-center items-center inline-flex" src="settings.svg" /> */}
                </div>
            )}
            {type == "friendList" && (
                <div className="w-[18.75rem] h-[3.125rem] relative">
                    <div className="w-[18.75rem] h-[3.125rem] left-[-0.18rem] top-0 absolute bg-slate-100 rounded-tl-[0.625rem] rounded-tr-[0.625rem]" />
                    <div className="w-[12.1875rem] h-6 left-[3.214375rem] top-[1.1875rem] absolute text-neutral-600 text-base font-normal">friends<br /><br /></div>
                    <div className="w-[1.4375rem] h-[1.4375rem] left-[1rem] top-[1.0625rem] absolute">
                        <img className="w-[1.4375rem] h-[1.4375rem] left-0 top-0 absolute" src="group.svg" />
                    </div>
                    <button onClick={addFriendHandler} className="z-10">
                        <img className="w-7 h-7 left-[16.125rem] top-[0.875rem] absolute justify-center items-center inline-flex" src="group_add.svg" />
                    </button>
                </div>
            )}
        </section>
    )
};